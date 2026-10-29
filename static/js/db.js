/**
 * CSRGO Tools - IndexedDB Wrapper
 * Mirrors DSA Platform IndexedDB Architecture (https://dsa.csrgo.com)
 * Stores favourite tools, recently used tools, and user profile data.
 */

const TOOLS_DB_NAME = 'CSRGO_TOOLS_DB';
const TOOLS_DB_VERSION = 1;
const STORE_FAVOURITES = 'favourites';
const STORE_RECENT = 'recent_tools';
const STORE_SETTINGS = 'settings';

class ToolsDatabase {
  constructor() {
    this.db = null;
    this.ready = this.init();
  }

  async init() {
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) {
        console.warn('IndexedDB not supported, falling back to localStorage');
        resolve(null);
        return;
      }

      const request = indexedDB.open(TOOLS_DB_NAME, TOOLS_DB_VERSION);

      request.onerror = (event) => {
        console.error('IndexedDB error:', event.target.error);
        reject(event.target.error);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_FAVOURITES)) {
          db.createObjectStore(STORE_FAVOURITES, { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains(STORE_RECENT)) {
          db.createObjectStore(STORE_RECENT, { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains(STORE_SETTINGS)) {
          db.createObjectStore(STORE_SETTINGS, { keyPath: 'key' });
        }
      };

      request.onsuccess = async (event) => {
        this.db = event.target.result;
        await this.migrateLegacyStorage();
        resolve(this.db);
      };
    });
  }

  async migrateLegacyStorage() {
    if (!this.db) return;
    try {
      const migrated = localStorage.getItem('csrgo_tools_migrated_v1');
      if (!migrated) {
        const legacyFavs = JSON.parse(localStorage.getItem('csrgo_favourites') || '[]');
        if (Array.isArray(legacyFavs) && legacyFavs.length > 0) {
          for (const fav of legacyFavs) {
            if (fav && (fav.id || fav.url)) {
              const id = fav.id || fav.url.replace(/^\/?tools\//, '').replace(/\.html$/, '').replace(/\/$/, '');
              await this.addFavourite({
                id: id,
                name: fav.name || id,
                description: fav.description || '',
                icon: fav.icon || 'tool',
                url: `/tools/${id}/`,
                category: fav.category || '',
                addedAt: Date.now()
              });
            }
          }
        }
        localStorage.setItem('csrgo_tools_migrated_v1', 'true');
      }
    } catch (e) {
      console.warn('Migration warning:', e);
    }
  }

  /* --- Favourite Operations --- */
  async getFavourite(id) {
    await this.ready;
    if (!this.db) return null;
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_FAVOURITES], 'readonly');
      const store = tx.objectStore(STORE_FAVOURITES);
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  async isFavourite(id) {
    const fav = await this.getFavourite(id);
    return !!fav;
  }

  async addFavourite(tool) {
    await this.ready;
    if (!this.db) return false;
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_FAVOURITES], 'readwrite');
      const store = tx.objectStore(STORE_FAVOURITES);
      const cleanUrl = tool.url ? tool.url.replace(/\.html$/, '').replace(/\/?$/, '/') : `/tools/${tool.id}/`;
      const data = {
        id: tool.id,
        name: tool.name,
        description: tool.description || '',
        icon: tool.icon || 'tool',
        url: cleanUrl,
        category: tool.category || '',
        addedAt: tool.addedAt || Date.now()
      };
      const req = store.put(data);
      req.onsuccess = () => {
        window.dispatchEvent(new CustomEvent('tools-favourites-updated', { detail: data }));
        resolve(true);
      };
      req.onerror = () => reject(req.error);
    });
  }

  async removeFavourite(id) {
    await this.ready;
    if (!this.db) return false;
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_FAVOURITES], 'readwrite');
      const store = tx.objectStore(STORE_FAVOURITES);
      const req = store.delete(id);
      req.onsuccess = () => {
        window.dispatchEvent(new CustomEvent('tools-favourites-updated', { detail: { id, removed: true } }));
        resolve(true);
      };
      req.onerror = () => reject(req.error);
    });
  }

  async toggleFavourite(tool) {
    const exists = await this.isFavourite(tool.id);
    if (exists) {
      await this.removeFavourite(tool.id);
      return false;
    } else {
      await this.addFavourite(tool);
      return true;
    }
  }

  async getAllFavourites() {
    await this.ready;
    if (!this.db) {
      try {
        return JSON.parse(localStorage.getItem('csrgo_favourites') || '[]');
      } catch (e) {
        return [];
      }
    }
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_FAVOURITES], 'readonly');
      const store = tx.objectStore(STORE_FAVOURITES);
      const req = store.getAll();
      req.onsuccess = () => {
        const results = req.result || [];
        results.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
        resolve(results);
      };
      req.onerror = () => reject(req.error);
    });
  }

  /* --- Recently Used Operations --- */
  async recordRecent(tool) {
    await this.ready;
    if (!this.db || !tool || !tool.id) return false;
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_RECENT], 'readwrite');
      const store = tx.objectStore(STORE_RECENT);
      const cleanUrl = tool.url ? tool.url.replace(/\.html$/, '').replace(/\/?$/, '/') : `/tools/${tool.id}/`;
      const data = {
        id: tool.id,
        name: tool.name,
        description: tool.description || '',
        icon: tool.icon || 'tool',
        url: cleanUrl,
        category: tool.category || '',
        lastUsed: Date.now()
      };
      const req = store.put(data);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllRecent(limit = 12) {
    await this.ready;
    if (!this.db) return [];
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_RECENT], 'readonly');
      const store = tx.objectStore(STORE_RECENT);
      const req = store.getAll();
      req.onsuccess = () => {
        const results = req.result || [];
        results.sort((a, b) => (b.lastUsed || 0) - (a.lastUsed || 0));
        resolve(results.slice(0, limit));
      };
      req.onerror = () => reject(req.error);
    });
  }

  async clearRecent() {
    await this.ready;
    if (!this.db) return false;
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([STORE_RECENT], 'readwrite');
      const store = tx.objectStore(STORE_RECENT);
      const req = store.clear();
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }
}

// Global Singleton Instance (exact match to DSA window.dsaDB)
window.toolsDB = new ToolsDatabase();
