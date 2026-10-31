function renderToolSections(toolDataName) {
  const data = window[toolDataName];
  if (!data) return;

  const heroSection = document.getElementById("heroSection");
  if (heroSection && (heroSection.dataset.rendered === toolDataName || heroSection.dataset.rendered === "server")) return;
  if (heroSection) heroSection.dataset.rendered = toolDataName;
  if (data.hero && heroSection) {
    heroSection.innerHTML = `
      <div class="flex justify-center mb-4">
        <div class="w-16 h-16 rounded-2xl ${data.hero.iconBg} flex items-center justify-center animate-float">
          <i data-lucide="${data.hero.icon}" class="w-8 h-8 text-white"></i>
        </div>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 animate-fade-in">
        <span class="gradient-logo-text">${data.hero.title}</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 animate-fade-in">
        ${data.hero.subtitle}
      </p>
      <div class="flex flex-wrap justify-center gap-4 mt-4">
        ${data.hero.features
          .map(
            (f) => `
          <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300 justify-center">
            <i data-lucide="${f.icon}" class="w-5 h-5 ${f.color}"></i>
            <span class="text-sm md:text-base font-medium">${f.label}</span>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    if (window.lucide) lucide.createIcons();
  }

  const whatIsSection = document.getElementById("whatIsSection");
  if (whatIsSection && data.whatIs) {
    whatIsSection.innerHTML = `
      <div class="bg-white dark:bg-[#141B3D] rounded-2xl md:rounded-3xl border border-gray-100 dark:border-gray-700/50 p-6 md:p-8 shadow-sm">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-10 md:w-12 aspect-square rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 text-white shadow-sm">
            <i data-lucide="info" class="w-6 h-6"></i>
          </div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">${data.whatIs.title}</h2>
        </div>
        <div class="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
          ${data.whatIs.content}
        </div>
      </div>
    `;
  }

  const whyUseSection = document.getElementById("whyUseSection");
  if (whyUseSection && data.whyUse) {
    const bgColors = ["bg-blue-50 dark:bg-blue-900/30", "bg-purple-50 dark:bg-purple-900/30", "bg-green-50 dark:bg-green-900/30", "bg-yellow-50 dark:bg-yellow-900/30"];
    const textColors = ["text-blue-600 dark:text-blue-400", "text-purple-600 dark:text-purple-400", "text-green-600 dark:text-green-400", "text-yellow-600 dark:text-yellow-400"];
    const defaultIcons = ["shield", "settings", "file-type", "zap"];

    whyUseSection.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-10 md:w-12 aspect-square rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 text-white shadow-sm">
            <i data-lucide="star" class="w-6 h-6"></i>
          </div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">${data.whyUse.title}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${data.whyUse.items
            .map(
              (item, idx) => `
            <div class="bg-white dark:bg-[#141B3D] p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm card-hover">
              <div class="w-12 h-12 rounded-xl ${bgColors[idx % 4]} flex items-center justify-center mb-4">
                <i data-lucide="${item.icon || defaultIcons[idx % 4]}" class="w-6 h-6 ${textColors[idx % 4]}"></i>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${item.title}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">${item.desc}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  const howToUseSection = document.getElementById("howToUseSection");
  if (howToUseSection && data.howToUse) {
    howToUseSection.innerHTML = `
      <div class="bg-white dark:bg-[#141B3D] rounded-2xl md:rounded-3xl border border-gray-100 dark:border-gray-700/50 p-6 md:p-8 shadow-sm">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-10 md:w-12 aspect-square rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 text-white shadow-sm">
            <i data-lucide="help-circle" class="w-6 h-6"></i>
          </div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">${data.howToUse.title}</h2>
        </div>
        <div class="space-y-4">
          ${data.howToUse.steps
            .map(
              (step, idx) => `
            <div class="flex gap-4 p-4 md:p-5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/40">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">${idx + 1}</div>
              <div class="flex-1">
                <h3 class="text-lg font-bold mb-1 flex items-center gap-2 text-gray-900 dark:text-white">
                  <i data-lucide="${step.icon || (idx === 0 ? "upload" : idx === 1 ? "settings" : "wand-2")}" class="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
                  ${step.title}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">${step.desc}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  const featuresSection = document.getElementById("featuresSection");
  if (featuresSection && data.features) {
    featuresSection.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-10 md:w-12 aspect-square rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 text-white shadow-sm">
            <i data-lucide="list-checks" class="w-6 h-6"></i>
          </div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">Features</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${data.features
            .map(
              (feat) => `
            <div class="bg-white dark:bg-[#141B3D] p-5 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm card-hover">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 text-green-600 dark:text-green-400">
                  <i data-lucide="check-circle" class="w-5 h-5"></i>
                </div>
                <span class="text-gray-700 dark:text-gray-200 text-sm md:text-base font-medium leading-relaxed">${feat}</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  const faqSection = document.getElementById("faqSection");
  if (faqSection && data.faq) {
    faqSection.innerHTML = `
      <div class="bg-white dark:bg-[#141B3D] rounded-2xl md:rounded-3xl border border-gray-100 dark:border-gray-700/50 p-6 md:p-8 shadow-sm">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-10 md:w-12 aspect-square rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 text-white shadow-sm">
            <i data-lucide="help-circle" class="w-6 h-6"></i>
          </div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        </div>
        <div class="space-y-4">
          ${data.faq
            .map(
              (faq) => `
            <div class="faq-item bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/40 rounded-xl overflow-hidden transition-all">
              <button class="w-full px-6 py-4 text-left flex items-center justify-between text-gray-900 dark:text-white font-semibold text-lg hover:text-blue-600 dark:hover:text-fuchsia-400">
                <span>${faq.q}</span>
                <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500 dark:text-gray-400 faq-icon transition-transform duration-300"></i>
              </button>
              <div class="faq-content overflow-hidden transition-all duration-300 ease-in-out" style="max-height: 0;">
                <div class="px-6 pb-4">
                  <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">${faq.a}</p>
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  if (window.lucide) {
    lucide.createIcons();
  }

  // Setup FAQ accordion click handler
  let activeFaq = null;
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector("button");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    btn.addEventListener("click", () => {
      if (activeFaq === item) {
        content.style.maxHeight = "0";
        icon.style.transform = "rotate(0deg)";
        activeFaq = null;
        return;
      }
      if (activeFaq) {
        const prevContent = activeFaq.querySelector(".faq-content");
        const prevIcon = activeFaq.querySelector(".faq-icon");
        prevContent.style.maxHeight = "0";
        prevIcon.style.transform = "rotate(0deg)";
      }
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
      activeFaq = item;
    });
  });
}

// Auto-render if CSRGO_TOOL_NAME is defined
window.addEventListener("DOMContentLoaded", () => {
  if (window.CSRGO_TOOL_NAME) {
    renderToolSections(window.CSRGO_TOOL_NAME);
  }
});

// Shared styles for tool cards and animations
(function () {
  if (!document.getElementById("csrgo-tool-shared-styles")) {
    const styleEl = document.createElement("style");
    styleEl.id = "csrgo-tool-shared-styles";
    styleEl.textContent = `
      .gradient-bg {
        background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
      }
      .card-hover {
        transition: all 0.3s ease;
      }
      .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .drop-zone-active {
        border-color: #4F46E5;
        background-color: rgba(79, 70, 229, 0.05);
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
    `;
    document.head.appendChild(styleEl);
  }
})();
