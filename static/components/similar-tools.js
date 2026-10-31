(function () {
  function initSimilarTools() {
    const currentTool = window.CSRGO_TOOL_INFO || null;
    if (!currentTool) return;

    function getSimilarTools(tool) {
      if (!tool || !tool.category) return [];
      const candidates = (window.tools || []).filter(
        (t) => t.category === tool.category && t.url !== tool.url && t.name !== tool.name
      );
      for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
      }
      return candidates.slice(0, 2);
    }

    const similar = getSimilarTools(currentTool);
    if (!similar.length) return;

    const categoryObj = (window.categories || []).find((c) => c.id === currentTool.category);
    const colorPalette = [
      "bg-blue-50 text-blue-600",
      "bg-green-50 text-green-600",
      "bg-yellow-50 text-yellow-600",
      "bg-purple-50 text-purple-600",
      "bg-pink-50 text-pink-600",
      "bg-orange-50 text-orange-600",
      "bg-red-50 text-red-600",
      "bg-indigo-50 text-indigo-600",
      "bg-gray-50 text-gray-600"
    ];

    function renderSimilarCard(tool, idx) {
      const color = tool.color || colorPalette[idx % colorPalette.length];
      let href = tool.url.startsWith('/') ? tool.url : '/' + tool.url;
      return `
        <a href="${href}" class="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#141B3D] shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center ${color}">
            <i data-lucide="${tool.icon}" class="w-5 h-5"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-semibold text-base text-gray-900 dark:text-white">${tool.name}</div>
            <div class="text-gray-500 dark:text-gray-400 text-sm mt-0.5 line-clamp-1">${tool.description}</div>
          </div>
        </a>
      `;
    }

    const placeholder = document.getElementById("similarToolsSection");
    if (!placeholder) return;

    placeholder.innerHTML = `
      <div class="space-y-4">
        <h2 class="text-2xl font-extrabold flex items-center gap-2 text-gray-900 dark:text-white">
          <i data-lucide="sparkles" class="w-6 h-6 text-yellow-400"></i>
          Similar Tools
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          ${similar.map((t, idx) => renderSimilarCard(t, idx)).join("")}
          <a href="/categories/${categoryObj ? categoryObj.id : ""}/" class="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20">
              <i data-lucide="arrow-right" class="w-5 h-5 text-white"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="font-semibold text-base text-white">View all ${categoryObj ? categoryObj.name : "tools"}</div>
            </div>
          </a>
        </div>
      </div>
    `;

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSimilarTools);
  } else {
    initSimilarTools();
  }
})();
