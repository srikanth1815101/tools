/**
 * CSRGO Tools - Category Page Component
 * Renders category hero section, grid of tools in that category, and other categories section.
 */

let isCategoryPageRendered = false;

function initCategoryPage(categoryId, title, description, icon, color) {
  if (isCategoryPageRendered) return;
  isCategoryPageRendered = true;

  const cat = (window.categories || []).find(c => c.id === categoryId);
  const pageTitle = title || (cat ? cat.name : categoryId);
  const pageDesc = description || (cat ? cat.description : getCategoryDescription(categoryId));
  const pageIcon = icon || (cat ? cat.icon : "grid");

  document.title = `${pageTitle} - CSRGO Tools`;

  const heroEl = document.getElementById("categoryHeroSection");
  if (heroEl) {
    heroEl.className = "text-center relative";
    heroEl.innerHTML = `
      <div class="flex justify-center mb-6">
        <div class="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center animate-float shadow-lg shadow-purple-500/20">
          <i data-lucide="${pageIcon}" class="w-10 h-10 text-white"></i>
        </div>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-4 animate-fade-in animate-hero-heading tracking-tight" style="animation-delay:0.2s;">
        <span class="gradient-logo-text">${pageTitle}</span>
      </h1>
      <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
        ${pageDesc}
      </p>
      <div class="flex flex-wrap justify-center gap-2 mb-4 animate-fade-in animate-hero-search" style="animation-delay:0.6s;">
        <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-full shadow-sm whitespace-nowrap text-gray-700 dark:text-gray-300">
          <i data-lucide="shield" class="w-4 h-4 text-green-500"></i>
          <span class="text-xs md:text-sm font-medium">Secure Tools</span>
        </div>
        <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-full shadow-sm whitespace-nowrap text-gray-700 dark:text-gray-300">
          <i data-lucide="zap" class="w-4 h-4 text-yellow-500"></i>
          <span class="text-xs md:text-sm font-medium">Instant Results</span>
        </div>
        <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-full shadow-sm whitespace-nowrap text-gray-700 dark:text-gray-300">
          <i data-lucide="globe" class="w-4 h-4 text-blue-500"></i>
          <span class="text-xs md:text-sm font-medium">Browser-based</span>
        </div>
      </div>
    `;
  }

  if (window.lucide) {
    lucide.createIcons();
  }

  renderTools(categoryId);
}

function renderTools(categoryId) {
  const toolsList = (window.tools || []).filter(t => t.category === categoryId);
  const grid = document.getElementById("tools-grid");
  if (!grid) return;

  if (toolsList.length !== 0) {
    grid.innerHTML = toolsList
      .map(
        (tool, idx) => `
      <div class="bg-white dark:bg-[#141B3D] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 p-5 transition-all duration-300 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800">
        ${window.renderToolItem(tool, idx)}
      </div>
    `
      )
      .join("");

    if (window.lucide) {
      lucide.createIcons();
    }

    renderOtherCategories(categoryId);
  } else {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12">
        <div class="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
          <i data-lucide="alert-circle" class="w-8 h-8 text-gray-400"></i>
        </div>
        <p class="text-gray-400 text-lg">No tools found in this category.</p>
      </div>
    `;

    if (window.lucide) {
      lucide.createIcons();
    }
  }
}

function renderOtherCategories(currentCategoryId) {
  const otherCats = (window.categories || []).filter(c => c.id !== currentCategoryId);
  const otherContainer = document.getElementById("otherCategoriesSection");
  if (!otherContainer) return;

  otherContainer.innerHTML = `
    <div class="text-center mb-10">
      <h2 class="text-2xl md:text-4xl font-extrabold mb-3">
        <span class="gradient-logo-text">Browse Other Categories</span>
      </h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
        Explore our collection of powerful tools organized by category
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      ${otherCats
        .map(
          cat => `
        <div class="bg-white dark:bg-[#141B3D] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 p-6 transition-all duration-300 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 flex flex-col justify-between">
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center ${cat.color} mb-4">
              <i data-lucide="${cat.icon}" class="w-6 h-6"></i>
            </div>
            <h3 class="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white">${cat.name}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">${cat.description}</p>
          </div>
          <a href="/categories/${cat.id}/" class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
            <span>View all tools</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }
}

function getCategoryDescription(categoryId) {
  const descriptions = {
    "image-tools": "Convert, resize, and optimize your images",
    "text-tools": "Format, analyze, and transform your text",
    "developer-tools": "Essential tools for web development",
    "math-calculators": "Perform complex calculations and conversions",
    "unit-converters": "Convert between different units of measurement",
    "security-tools": "Keep your data safe and secure"
  };
  return descriptions[categoryId] || "Explore our collection of tools";
}

// Ensure category styling is loaded
(function () {
  if (!document.getElementById("csrgo-category-styles")) {
    const style = document.createElement("style");
    style.id = "csrgo-category-styles";
    style.textContent = `
      .gradient-bg {
        background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
      }
      .gradient-logo-text {
        background-image: linear-gradient(90deg, var(--csrgo-purple, #7C3AED) 10%, var(--csrgo-blue, #2563EB) 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 800;
        letter-spacing: -0.01em;
        text-shadow: 0 2px 8px rgba(124, 58, 237, 0.08);
      }
      .card-hover {
        transition: all 0.3s ease;
      }
      .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-fade-in {
        opacity: 0;
        animation: fadeIn 0.6s ease-out forwards;
      }
      .animate-hero-heading {
        animation: heroHeading 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      .animate-hero-desc {
        animation: heroDesc 0.8s 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      .animate-hero-search {
        animation: heroSearch 0.9s 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes heroHeading {
        0% { opacity: 0; transform: scale(0.95) translateY(20px); filter: brightness(0.8); }
        60% { opacity: 1; transform: scale(1.03) translateY(-2px); filter: brightness(1.1); }
        100% { opacity: 1; transform: scale(1) translateY(0); filter: brightness(1); }
      }
      @keyframes heroDesc {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes heroSearch {
        0% { opacity: 0; transform: translateY(20px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      .drop-zone-active {
        border-color: #3B82F6 !important;
        background-color: #EFF6FF;
      }
    `;
    document.head.appendChild(style);
  }
})();
