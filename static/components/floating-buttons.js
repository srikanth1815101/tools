!(function () {
  function isToolPage() {
    return /\/tools\//.test(window.location.pathname) && !!window.CSRGO_TOOL_INFO;
  }

  function getToolInfo() {
    if (window.CSRGO_TOOL_INFO) return window.CSRGO_TOOL_INFO;
    return {
      name: document.title.replace(/ - Free Online Tool.*$/, ""),
      url: window.location.href,
      icon: "star"
    };
  }

  function getFavourites() {
    try {
      return JSON.parse(localStorage.getItem("csrgo_favourites") || "[]");
    } catch {
      return [];
    }
  }

  function setFavourites(favs) {
    localStorage.setItem("csrgo_favourites", JSON.stringify(favs));
  }

  function isFavourite(tool) {
    return getFavourites().some((item) => item.url === tool.url);
  }

  function getShareLinks(url, title) {
    return [
      {
        name: "WhatsApp",
        icon: "message-circle",
        url: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`
      },
      {
        name: "Telegram",
        icon: "send",
        url: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
      },
      {
        name: "Copy Link",
        icon: "copy",
        url: "#",
        action: "copy"
      }
    ];
  }

  function copyText(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  }

  function injectSharePopupStyles() {
    if (document.getElementById("csrgo-share-popup-style")) return;
    const styleEl = document.createElement("style");
    styleEl.id = "csrgo-share-popup-style";
    styleEl.textContent = `
      #csrgo-share-popup {
        background: linear-gradient(135deg, #e0e7ff 0%, #f5f3ff 100%);
        backdrop-filter: blur(16px) saturate(180%);
        border-radius: 1.5rem;
        box-shadow: 0 8px 32px rgba(37,99,235,0.35), 0 2px 8px rgba(0,0,0,0.15);
        border: 2.5px solid #7c3aed;
        padding: 2rem 1.5rem 1.5rem 1.5rem;
        animation: fade-in .25s cubic-bezier(.4,0,.2,1);
        transition: box-shadow .2s, border-color .2s;
      }
      #csrgo-share-popup .absolute.top-2.right-2 {
        top: 1rem; right: 1rem;
        background: none;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        transition: color .2s;
      }
      #csrgo-share-popup .absolute.top-2.right-2:hover {
        color: #7c3aed;
      }
      #csrgo-share-popup .flex.gap-2.mb-4 {
        margin-bottom: 1.25rem;
        gap: 0.5rem;
      }
      #csrgo-share-popup .flex-1.py-2.rounded-lg.font-semibold {
        border-radius: 0.5rem;
        padding: 0.5rem 0.8rem;
        font-weight: 700;
        font-size: 0.98rem;
        background: none;
        border: none;
        cursor: pointer;
        transition: background .2s, color .2s, box-shadow .2s;
      }
      #csrgo-share-popup .csrgo-tab-active,
      #csrgo-share-popup .csrgo-tab-active:focus,
      #csrgo-share-popup .csrgo-tab-active:hover,
      #csrgo-share-popup button.csrgo-tab-active:hover,
      #csrgo-share-popup button.csrgo-tab-active:focus {
        background: linear-gradient(90deg,#2563eb,#7c3aed) !important;
        color: #fff !important;
        box-shadow: 0 2px 8px rgba(124,60,237,0.10) !important;
        transform: none !important;
        cursor: default !important;
      }
      #csrgo-share-popup .csrgo-tab-inactive:hover,
      #csrgo-share-popup button.csrgo-tab-inactive:hover {
        color: #222 !important;
        background: #e5e7eb !important;
      }
      #csrgo-share-popup .flex.flex-wrap.gap-3.mb-4.justify-center {
        gap: 1.5rem;
        margin-bottom: 1.5rem;
        border-top: 1px solid #e0e7ef;
        padding-top: 1.25rem;
      }
      #csrgo-share-popup a, #csrgo-share-popup button {
        background: none;
        border: none;
        outline: none;
        box-shadow: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        color: #222;
        font-size: 1rem;
        transition: color .18s, transform .18s;
      }
      #csrgo-share-popup .icon-whatsapp { color: #25D366; }
      #csrgo-share-popup .icon-telegram { color: #229ED9; }
      #csrgo-share-popup .icon-messenger { color: #0084FF; }
      #csrgo-share-popup .icon-instagram { color: #E1306C; }
      #csrgo-share-popup .icon-copy { color: #64748b; }
      #csrgo-share-popup a:hover .icon-whatsapp, #csrgo-share-popup button:hover .icon-whatsapp { color: #128C7E; }
      #csrgo-share-popup a:hover .icon-telegram, #csrgo-share-popup button:hover .icon-telegram { color: #1769aa; }
      #csrgo-share-popup a:hover .icon-messenger, #csrgo-share-popup button:hover .icon-messenger { color: #005fa3; }
      #csrgo-share-popup a:hover .icon-instagram, #csrgo-share-popup button:hover .icon-instagram { color: #C13584; }
      #csrgo-share-popup a:hover .icon-copy, #csrgo-share-popup button:hover .icon-copy { color: #334155; }
      #csrgo-share-popup a:hover, #csrgo-share-popup button:hover {
        transform: scale(1.13);
      }
      #csrgo-share-popup i[class^="w-7"], #csrgo-share-popup i.w-7 {
        font-size: 2.1rem;
        width: 2.1rem;
        height: 2.1rem;
        margin-bottom: 0.1rem;
      }
      #csrgo-share-popup .text-xs {
        font-size: 0.93rem;
        font-weight: 500;
        letter-spacing: 0.01em;
      }
      @media (max-width: 500px) {
        #csrgo-share-popup {
          width: 95vw !important;
          padding: 1.2rem 0.5rem 1rem 0.5rem;
        }
        #csrgo-share-popup .flex.flex-wrap.gap-3.mb-4.justify-center {
          gap: 1rem;
        }
      }
      #csrgo-share-popup #csrgo-share-close-btn {
        background: linear-gradient(90deg, #7c3aed 0%, #2563eb 100%);
        color: #fff;
        font-weight: 600;
        border: none;
        border-radius: 0.5rem;
        box-shadow: 0 2px 8px rgba(124,60,237,0.10);
        padding: 0.35rem 1.2rem;
        font-size: 0.98rem;
        margin-top: 0.5rem;
        cursor: pointer;
        transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
      }
      #csrgo-share-popup #csrgo-share-close-btn:hover {
        background: linear-gradient(90deg, #8b5cf6 0%, #2563eb 100%);
        box-shadow: 0 4px 16px rgba(124,60,237,0.18);
        transform: translateY(-2px) scale(1.04);
      }
    `;
    document.head.appendChild(styleEl);
  }

  function renderFloatingButtons() {
    const container = document.getElementById("floating-buttons");
    if (!container) return;
    container.innerHTML = "";

    let btnIndex = 0;
    const buttons = [];

    // Share button
    buttons.push({
      id: "csrgo-share-btn",
      html: `<button id="csrgo-share-btn" class="fixed z-50" style="bottom:${24 + 65 * btnIndex}px; right:24px; width:45px; height:45px; background:linear-gradient(90deg,#2563eb,#7c3aed); color:white; box-shadow:0 4px 24px rgba(79,70,229,0.12); border-radius:9999px; display:flex; align-items:center; justify-content:center; transition:all .2s;" title="Share"><i data-lucide="share-2" class="w-5 h-5" style="color:white;"></i></button>`
    });
    btnIndex++;

    // Favourite button (only on tool pages)
    if (isToolPage()) {
      const toolFav = isFavourite(getToolInfo());
      buttons.push({
        id: "csrgo-favourite-btn",
        html: `<button id="csrgo-favourite-btn" class="fixed z-50" style="bottom:${24 + 65 * btnIndex}px; right:24px; width:45px; height:45px; background:linear-gradient(90deg,#2563eb,#7c3aed); color:white; box-shadow:0 4px 24px rgba(79,70,229,0.12); border-radius:9999px; display:flex; align-items:center; justify-content:center; transition:all .2s;" title="${toolFav ? "Added to Favourites" : "Add to Favourites"}"><i data-lucide="${toolFav ? "star-off" : "star"}" class="w-5 h-5" style="color:white;"></i></button>`
      });
      btnIndex++;
    }

    // Scroll to top button
    buttons.push({
      id: "csrgo-scroll-top",
      html: `<button id="csrgo-scroll-top" class="fixed z-50" style="bottom:${24 + 65 * btnIndex}px; right:24px; width:45px; height:45px; background:linear-gradient(90deg,#2563eb,#7c3aed); color:white; box-shadow:0 4px 24px rgba(79,70,229,0.12); border-radius:9999px; display:flex; align-items:center; justify-content:center; transition:all .2s; opacity:0; pointer-events:none;" title="Go to top"><i data-lucide="arrow-up" class="w-5 h-5" style="color:white;"></i></button>`
    });

    container.innerHTML =
      buttons.map((b) => b.html).join("") +
      `<div id="csrgo-share-popup" class="fixed z-50" style="bottom:${24 + 65 * (btnIndex + 1)}px; right:24px; border-radius:1rem; width:20rem; max-width:90vw; display:none; animation:fade-in .2s;"><div id="csrgo-share-content"></div></div>`;

    if (window.lucide) lucide.createIcons();

    // Scroll-to-top logic
    const scrollTopBtn = document.getElementById("csrgo-scroll-top");
    if (scrollTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          scrollTopBtn.style.opacity = 1;
          scrollTopBtn.style.pointerEvents = "auto";
        } else {
          scrollTopBtn.style.opacity = 0;
          scrollTopBtn.style.pointerEvents = "none";
        }
      });
      scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    // Favourite toggle logic
    if (isToolPage()) {
      const favBtn = document.getElementById("csrgo-favourite-btn");
      if (favBtn) {
        favBtn.addEventListener("click", () => {
          const info = getToolInfo();
          if (isFavourite(info)) {
            const updated = getFavourites().filter((f) => f.url !== info.url);
            setFavourites(updated);
          } else {
            const list = getFavourites();
            if (!list.some((item) => item.url === info.url)) {
              list.push(info);
              setFavourites(list);
            }
          }
          renderFloatingButtons();
        });
      }
    }

    // Share popup logic
    const shareBtn = document.getElementById("csrgo-share-btn");
    const sharePopup = document.getElementById("csrgo-share-popup");
    const shareContent = document.getElementById("csrgo-share-content");

    if (shareBtn && sharePopup && shareContent) {
      shareBtn.addEventListener("click", () => {
        sharePopup.style.display = sharePopup.style.display === "none" || !sharePopup.style.display ? "block" : "none";

        if (isToolPage()) {
          shareContent.innerHTML = `
            <div class="flex gap-2 mb-4">
              <button id="csrgo-tab-site" class="flex-1 py-2 rounded-lg font-semibold csrgo-tab-active">Share CSRGO</button>
              <button id="csrgo-tab-tool" class="flex-1 py-2 rounded-lg font-semibold csrgo-tab-inactive">Share Tool</button>
            </div>
            <div id="csrgo-tab-content"></div>
          `;

          const tabSite = document.getElementById("csrgo-tab-site");
          const tabTool = document.getElementById("csrgo-tab-tool");
          const tabContent = document.getElementById("csrgo-tab-content");

          function renderTab(type) {
            if (type === "site") {
              tabSite.classList.add("csrgo-tab-active");
              tabSite.classList.remove("csrgo-tab-inactive");
              tabTool.classList.remove("csrgo-tab-active");
              tabTool.classList.add("csrgo-tab-inactive");
              renderShareItems("https://tools.csrgo.com", "CSRGO Tools - Free Online Utilities");
            } else {
              tabTool.classList.add("csrgo-tab-active");
              tabTool.classList.remove("csrgo-tab-inactive");
              tabSite.classList.remove("csrgo-tab-active");
              tabSite.classList.add("csrgo-tab-inactive");
              const info = getToolInfo();
              renderShareItems("https://tools.csrgo.com/" + info.url, info.name);
            }
          }

          function renderShareItems(shareUrl, shareTitle) {
            const links = getShareLinks(shareUrl, shareTitle);
            tabContent.innerHTML = `
              <div class="flex flex-wrap gap-3 mb-4 justify-center">
                ${links
                  .map((link) => {
                    let iconClass = "";
                    if (link.name === "WhatsApp") iconClass = "icon-whatsapp";
                    if (link.name === "Telegram") iconClass = "icon-telegram";
                    if (link.name === "Copy Link") iconClass = "icon-copy";
                    return link.action === "copy"
                      ? `<button class="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600" data-copy-url="${shareUrl}">
                          <i data-lucide="${link.icon}" class="w-7 h-7 ${iconClass}"></i>
                          <span class="text-xs">${link.name}</span>
                        </button>`
                      : `<a href="${link.url}" target="_blank" rel="noopener" class="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600" onclick="window.open(this.href, '_blank', 'width=600,height=400'); return false;">
                          <i data-lucide="${link.icon}" class="w-7 h-7 ${iconClass}"></i>
                          <span class="text-xs">${link.name}</span>
                        </a>`;
                  })
                  .join("")}
              </div>
              <div class="flex justify-center mt-2">
                <button id="csrgo-share-close-btn" class="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-colors">Close</button>
              </div>
            `;

            if (window.lucide) lucide.createIcons();

            tabContent.querySelectorAll("button[data-copy-url]").forEach((btn) => {
              btn.onclick = function () {
                copyText(btn.getAttribute("data-copy-url"));
                const label = btn.querySelector("span");
                const originalText = label.textContent;
                label.textContent = "Copied!";
                setTimeout(() => {
                  label.textContent = originalText;
                }, 1200);
              };
            });

            const closeBtn = tabContent.querySelector("#csrgo-share-close-btn");
            if (closeBtn) {
              closeBtn.onclick = () => {
                sharePopup.style.display = "none";
              };
            }
          }

          tabSite.onclick = () => renderTab("site");
          tabTool.onclick = () => renderTab("tool");
          renderTab("site");
        } else {
          const siteUrl = "https://tools.csrgo.com";
          const links = getShareLinks(siteUrl, "CSRGO Tools - Free Online Utilities");
          shareContent.innerHTML = `
            <div class="flex gap-2 mb-4">
              <button class="flex-1 py-2 rounded-lg font-semibold csrgo-tab-active" style="width:100%">Share CSRGO</button>
            </div>
            <div class="flex flex-wrap gap-3 mb-4 justify-center">
              ${links
                .map((link) => {
                  let iconClass = "";
                  if (link.name === "WhatsApp") iconClass = "icon-whatsapp";
                  if (link.name === "Telegram") iconClass = "icon-telegram";
                  if (link.name === "Copy Link") iconClass = "icon-copy";
                  return link.action === "copy"
                    ? `<button class="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600" data-copy-url="${siteUrl}">
                        <i data-lucide="${link.icon}" class="w-7 h-7 ${iconClass}"></i>
                        <span class="text-xs">${link.name}</span>
                      </button>`
                    : `<a href="${link.url}" target="_blank" rel="noopener" class="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600" onclick="window.open(this.href, '_blank', 'width=600,height=400'); return false;">
                        <i data-lucide="${link.icon}" class="w-7 h-7 ${iconClass}"></i>
                        <span class="text-xs">${link.name}</span>
                      </a>`;
                })
                .join("")}
            </div>
            <div class="flex justify-center mt-2">
              <button id="csrgo-share-close-btn" class="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-colors">Close</button>
            </div>
          `;

          shareContent.querySelectorAll("button[data-copy-url]").forEach((btn) => {
            btn.onclick = function () {
              copyText(btn.getAttribute("data-copy-url"));
              const label = btn.querySelector("span");
              const originalText = label.textContent;
              label.textContent = "Copied!";
              setTimeout(() => {
                label.textContent = originalText;
              }, 1200);
            };
          });

          const closeBtn = shareContent.querySelector("#csrgo-share-close-btn");
          if (closeBtn) {
            closeBtn.onclick = () => {
              sharePopup.style.display = "none";
            };
          }
          if (window.lucide) lucide.createIcons();
        }
      });

      document.addEventListener("mousedown", function handleOutsideClick(event) {
        if (!sharePopup.contains(event.target) && event.target !== shareBtn && !shareBtn.contains(event.target)) {
          sharePopup.style.display = "none";
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      injectSharePopupStyles();
      renderFloatingButtons();
    });
  } else {
    injectSharePopupStyles();
    renderFloatingButtons();
  }

  window.renderFloatingButtons = renderFloatingButtons;
})();
