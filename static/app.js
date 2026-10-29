/**
 * CSRGO Tools - Main Application Script
 * Provides category management, global search, typewriter animation, and tool discovery.
 */

function getToolsByCategory(category) {
  return window.tools.filter(t => t.category === category);
}

function getToolsBySearch(query) {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  return window.tools.filter(tool => {
    const matchesName = tool.name && tool.name.toLowerCase().includes(term);
    const matchesDesc = tool.description && tool.description.toLowerCase().includes(term);
    const matchesKeywords = Array.isArray(tool.keywords) && tool.keywords.some(k => k.toLowerCase().includes(term));
    return matchesName || matchesDesc || matchesKeywords;
  });
}

function renderCategories() {
  const container = document.getElementById("categoriesSection");
  if (!container) return;

  container.innerHTML = `
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Browse by Categories</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Find the perfect tool for your task from our collection of free online utilities
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        ${window.categories.map(cat => renderCategoryCard(cat)).join("")}
      </div>
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }
}

function renderCategoryCard(category) {
  const toolsInCategory = getToolsByCategory(category.id);
  return `
    <div class="group relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-100 h-full flex flex-col">
      <div class="flex justify-between items-start mb-4">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center ${category.color}">
          <i data-lucide="${category.icon}" class="w-6 h-6"></i>
        </div>
        <a href="categories/${category.id}.html" class="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <span>View all</span>
          <span class="transform transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
      <h3 class="text-xl font-bold mb-2">${category.name}</h3>
      <p class="text-gray-600 text-sm mb-6">${category.description}</p>
      <div class="space-y-2 flex-grow">
        ${toolsInCategory.map((tool, idx) => renderToolItem(tool, idx)).join("")}
      </div>
    </div>
  `;
}

function renderToolItem(tool, index = 0) {
  const colors = [
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
  const prefix = window.location.pathname.includes("/categories/") ? "../" : "";
  return `
    <a href="${prefix + tool.url}" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
      <div class="w-8 h-8 rounded-lg flex items-center justify-center ${colors[index % colors.length]}">
        <i data-lucide="${tool.icon}" class="w-4 h-4"></i>
      </div>
      <div>
        <span class="font-medium text-gray-900">${tool.name}</span>
        <p class="text-xs text-gray-500 mt-0.5">${tool.description}</p>
      </div>
    </a>
  `;
}

// Global Categories Definition
window.categories = [
  {id:"image-tools",name:"Image Tools",description:"Convert, resize, and manipulate images online",icon:"image",color:"bg-green-50 text-green-600"},
  {id:"text-tools",name:"Text Tools",description:"Text manipulation and analysis tools",icon:"type",color:"bg-blue-50 text-blue-600"},
  {id:"math-calculators",name:"Math & Calculators",description:"Various calculators and mathematical tools",icon:"calculator",color:"bg-red-50 text-red-600"},
  {id:"unit-converters",name:"Unit Converters",description:"Convert units easily",icon:"ruler",color:"bg-yellow-50 text-yellow-600"},
  {id:"developer-tools",name:"Developer Tools",description:"Essential tools for web developers",icon:"code",color:"bg-orange-50 text-orange-600"},
  {id:"security-tools",name:"Security & Encryption",description:"Tools for security and data encryption",icon:"shield",color:"bg-indigo-50 text-indigo-600"}
];

// Global Tools Definition
window.tools = [
  {id:"image-to-png",name:"Image to PNG Converter",description:"Convert images to PNG format",icon:"image",url:"tools/image-to-png-converter.html",category:"image-tools"},
  {id:"image-to-jpg",name:"Image to JPG Converter",description:"Convert images to JPG format",icon:"image",url:"tools/image-to-jpg-converter.html",category:"image-tools"},
  {id:"image-resizer",name:"Image Resizer",description:"Resize images to desired dimensions",icon:"scaling",url:"tools/image-resizer.html",category:"image-tools"},
  {id:"image-compressor",name:"Image Compressor",description:"Compress images without losing quality",icon:"image-upscale",url:"tools/image-compressor.html",category:"image-tools"},
  {id:"image-cropper",name:"Image Cropper",description:"Crop images to desired size",icon:"crop",url:"tools/image-cropper.html",category:"image-tools"},
  {id:"image-to-base64",name:"Convert Image to Base64",description:"Convert images to Base64 string",icon:"file-code",url:"tools/convert-image-to-base64.html",category:"image-tools"},
  {id:"webp-to-png",name:"Convert WebP to PNG",description:"Convert WebP images to PNG format",icon:"image",url:"tools/convert-webp-to-png.html",category:"image-tools"},
  {id:"gif-maker",name:"GIF Maker",description:"Create animated GIFs from images",icon:"image-play",url:"tools/gif-maker.html",category:"image-tools"},
  {id:"qr-generator",name:"QR Code Generator",description:"Generate QR codes for any content",icon:"qr-code",url:"tools/qr-code-generator.html",category:"image-tools"},
  {id:"screenshot-to-pdf",name:"Image to PDF Converter",description:"Convert images to PDF format",icon:"file",url:"tools/image-to-pdf-converter.html",category:"image-tools"},
  {id:"word-counter",name:"Word Counter",description:"Count words in your text",icon:"whole-word",url:"tools/word-counter.html",category:"text-tools"},
  {id:"white-space-removal",name:"White Space Removal",description:"Remove extra spaces, tabs, and line breaks",icon:"letter-text",url:"tools/white-space-removal.html",category:"text-tools",keywords:["white space","text cleaning","format text","remove spaces","remove tabs","remove line breaks","text formatting","clean text"]},
  {id:"case-converter",name:"Case Converter",description:"Convert text between different cases",icon:"type",url:"tools/case-converter.html",category:"text-tools"},
  {id:"text-to-handwriting",name:"Text to Handwriting Converter",description:"Convert your text into realistic handwriting",icon:"pen-tool",url:"tools/text-to-handwriting.html",category:"text-tools"},
  {id:"speech-to-text",name:"Speech-to-Text",description:"Convert speech to text",icon:"mic",url:"tools/speech-to-text.html",category:"text-tools"},
  {id:"url-encoder",name:"URL Encoder & Decoder",description:"Encode or decode URLs",icon:"link",url:"tools/url-encoder-decoder.html",category:"text-tools"},
  {id:"random-text",name:"Random Text Generator",description:"Generate random text",icon:"shuffle",url:"tools/random-text-generator.html",category:"text-tools"},
  {id:"json-formatter",name:"JSON Formatter",description:"Format and validate JSON",icon:"braces",url:"tools/json-formatter.html",category:"developer-tools"},
  {id:"html-to-markdown",name:"HTML to Markdown Converter",description:"Convert HTML to Markdown",icon:"code",url:"tools/html-to-markdown-converter.html",category:"developer-tools"},
  {id:"css-minifier",name:"CSS Minifier",description:"Minify CSS code",icon:"file-code",url:"tools/css-minifier.html",category:"developer-tools"},
  {id:"js-minifier",name:"JavaScript Minifier",description:"Minify JavaScript code",icon:"file-code-2",url:"tools/javascript-minifier.html",category:"developer-tools"},
  {id:"sql-formatter",name:"SQL Formatter",description:"Format SQL queries",icon:"database",url:"tools/sql-formatter.html",category:"developer-tools"},
  {id:"htaccess-generator",name:"HTACCESS Redirect Generator",description:"Generate HTACCESS redirect rules",icon:"circle-arrow-out-up-right",url:"tools/htaccess-redirect-generator.html",category:"developer-tools"},
  {id:"markdown-to-html",name:"Markdown to HTML Converter",description:"Convert Markdown to HTML",icon:"code-xml",url:"tools/markdown-to-html-converter.html",category:"developer-tools"},
  {id:"color-picker",name:"Color Code Picker",description:"Pick and convert color codes",icon:"palette",url:"tools/color-code-picker.html",category:"developer-tools"},
  {id:"base64-encoder",name:"Base64 Encoder & Decoder",description:"Encode or decode Base64",icon:"file-code",url:"tools/base64-encoder-decoder.html",category:"developer-tools"},
  {id:"percentage-calculator",name:"Percentage Calculator",description:"Calculate percentages",icon:"percent",url:"tools/percentage-calculator.html",category:"math-calculators"},
  {id:"age-calculator",name:"Age Calculator",description:"Calculate age from birth date",icon:"calendar",url:"tools/age-calculator.html",category:"math-calculators"},
  {id:"bmi-calculator",name:"BMI Calculator",description:"Calculate Body Mass Index",icon:"activity",url:"tools/bmi-calculator.html",category:"math-calculators"},
  {id:"loan-calculator",name:"Loan EMI Calculator",description:"Calculate loan EMI",icon:"credit-card",url:"tools/loan-emi-calculator.html",category:"math-calculators"},
  {id:"scientific-calculator",name:"Scientific Calculator",description:"Advanced mathematical calculations",icon:"calculator",url:"tools/scientific-calculator.html",category:"math-calculators"},
  {id:"discount-calculator",name:"Discount Calculator",description:"Calculate discounts",icon:"tag",url:"tools/discount-calculator.html",category:"math-calculators"},
  {id:"binary-converter",name:"Binary to Decimal Converter",description:"Convert between binary and decimal",icon:"binary",url:"tools/binary-to-decimal-converter.html",category:"math-calculators"},
  {id:"tip-calculator",name:"Tip Calculator",description:"Calculate tips and splits",icon:"hand-platter",url:"tools/tip-calculator.html",category:"math-calculators"},
  {id:"length-converter",name:"Length Converter",description:"Convert between length units",icon:"ruler",url:"tools/length-converter.html",category:"unit-converters"},
  {id:"weight-converter",name:"Weight Converter",description:"Convert between weight units",icon:"scale",url:"tools/weight-converter.html",category:"unit-converters"},
  {id:"speed-converter",name:"Speed Converter",description:"Convert between speed units",icon:"gauge",url:"tools/speed-converter.html",category:"unit-converters"},
  {id:"temperature-converter",name:"Temperature Converter",description:"Convert between temperature units",icon:"thermometer",url:"tools/temperature-converter.html",category:"unit-converters"},
  {id:"volume-converter",name:"Volume Converter",description:"Convert between volume units",icon:"box",url:"tools/volume-converter.html",category:"unit-converters"},
  {id:"data-converter",name:"Data Storage Converter",description:"Convert between data storage units",icon:"hard-drive",url:"tools/data-storage-converter.html",category:"unit-converters"},
  {id:"energy-converter",name:"Energy Converter",description:"Convert between energy units",icon:"zap",url:"tools/energy-converter.html",category:"unit-converters"},
  {id:"pressure-converter",name:"Pressure Converter",description:"Convert between pressure units",icon:"wind-arrow-down",url:"tools/pressure-converter.html",category:"unit-converters"},
  {id:"fuel-converter",name:"Fuel Efficiency Converter",description:"Convert between fuel efficiency units",icon:"fuel",url:"tools/fuel-efficiency-converter.html",category:"unit-converters"},
  {id:"angle-converter",name:"Angle Converter",description:"Convert between angle units",icon:"compass",url:"tools/angle-converter.html",category:"unit-converters"},
  {id:"md5-generator",name:"MD5 Hash Generator",description:"Generate MD5 hashes",icon:"key",url:"tools/md5-hash-generator.html",category:"security-tools"},
  {id:"sha256-generator",name:"SHA256 Hash Generator",description:"Generate SHA256 hashes",icon:"key-round",url:"tools/sha256-hash-generator.html",category:"security-tools"},
  {id:"password-generator",name:"Password Generator",description:"Generate secure passwords",icon:"lock",url:"tools/password-generator.html",category:"security-tools"},
  {id:"random-string",name:"Random String Generator",description:"Generate random strings",icon:"hash",url:"tools/random-string-generator.html",category:"security-tools"}
];

// Popular Tool Identifiers
const popularToolIds = [
  "image-to-png",
  "image-to-jpg",
  "image-resizer",
  "image-compressor",
  "image-cropper",
  "meta-tag-generator",
  "keyword-density",
  "word-counter",
  "case-converter",
  "json-formatter",
  "bmi-calculator",
  "currency-converter",
  "length-converter",
  "md5-generator",
  "password-generator",
  "youtube-thumbnail",
  "instagram-downloader",
  "barcode-generator",
  "resume-builder",
  "random-number",
  "ai-chatbot",
  "meme-generator",
  "tip-calculator",
  "sql-formatter",
  "color-picker"
];

function renderPopularTools() {
  const row1 = document.getElementById("popularToolsRow1");
  const row2 = document.getElementById("popularToolsRow2");
  if (!row1 || !row2) return;

  const popularTools = popularToolIds
    .map(id => window.tools.find(t => t.id === id))
    .filter(Boolean);

  const midpoint = Math.ceil(popularTools.length / 2);
  const row1Tools = popularTools.slice(0, midpoint);
  const row2Tools = popularTools.slice(midpoint);

  const colors = [
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

  function setupAutoScroll(element, speed, direction) {
    let scrollPos = 0;
    function step() {
      if (element.scrollWidth > element.clientWidth) {
        scrollPos += speed * direction;
        if (scrollPos < 0) {
          scrollPos = element.scrollWidth - element.clientWidth;
        }
        if (scrollPos > element.scrollWidth - element.clientWidth) {
          scrollPos = 0;
        }
        element.scrollLeft = scrollPos;
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  row1.innerHTML = row1Tools
    .map((tool, idx) => `
    <a href="${tool.url}" class="min-w-[320px] max-w-xs h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:border-blue-100 focus:ring-2 focus:ring-blue-200 outline-none">
      <div class="w-12 h-12 rounded-lg flex items-center justify-center ${colors[idx % colors.length]}">
        <i data-lucide="${tool.icon}" class="w-6 h-6"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="font-semibold text-base text-gray-900">${tool.name}</div>
        <div class="text-gray-500 text-sm mt-1">${tool.description}</div>
      </div>
    </a>
  `)
    .join("");

  row2.innerHTML = row2Tools
    .map((tool, idx) => `
    <a href="${tool.url}" class="min-w-[320px] max-w-xs h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:border-blue-100 focus:ring-2 focus:ring-blue-200 outline-none">
      <div class="w-12 h-12 rounded-lg flex items-center justify-center ${colors[idx % colors.length]}">
        <i data-lucide="${tool.icon}" class="w-6 h-6"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="font-semibold text-base text-gray-900">${tool.name}</div>
        <div class="text-gray-500 text-sm mt-1">${tool.description}</div>
      </div>
    </a>
  `)
    .join("");

  if (window.lucide) {
    lucide.createIcons();
  }

  setupAutoScroll(row1, 0.7, 1);
  setupAutoScroll(row2, 0.7, -1);
}

function setupCategoryReveal() {
  const categoriesSection = document.getElementById("categoriesSection");
  window.addEventListener("scroll", function handleScroll() {
    const popularSection = document.getElementById("popularToolsSection");
    if (!categoriesSection || !popularSection) return;

    if (popularSection.getBoundingClientRect().bottom < 0.7 * window.innerHeight) {
      categoriesSection.classList.remove("opacity-0", "pointer-events-none");
      window.removeEventListener("scroll", handleScroll);
    }
  });
}

function showPopularTools(show) {
  const popularSection = document.getElementById("popularToolsSection");
  if (popularSection) {
    popularSection.style.display = show ? "" : "none";
  }
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.getElementById("searchForm");
  let currentQuery = "";

  if (!searchInput) return;

  searchInput.addEventListener("input", e => {
    const term = e.target.value;
    currentQuery = term;
    const results = getToolsBySearch(term);
    renderSearchResults(results, term);
  });

  if (searchForm) {
    searchForm.addEventListener("submit", e => {
      e.preventDefault();
      const results = getToolsBySearch(currentQuery);
      renderSearchResults(results, currentQuery);
    });
  }
}

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

function renderToolCard(tool, index) {
  const category = window.categories.find(c => c.id === tool.category);
  const color = colorPalette[index % colorPalette.length];
  return `
    <a href="${tool.url}" class="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 transition-all duration-300 hover:shadow-md hover:border-blue-100 focus:ring-2 focus:ring-blue-200 outline-none">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-lg flex items-center justify-center ${color}">
          <i data-lucide="${tool.icon}" class="w-7 h-7"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-lg text-gray-900">${tool.name}</div>
          <div class="text-gray-500 text-base mt-1">${tool.description}</div>
        </div>
      </div>
      <hr class="my-4 border-gray-100">
      <div class="text-sm text-gray-400">Category: ${category ? category.name : ""}</div>
    </a>
  `;
}

function renderSearchResults(results, query) {
  const container = document.getElementById("searchResults");
  if (!container) return;

  if (!query.trim()) {
    container.innerHTML = "";
    showPopularTools(true);
    return;
  }

  showPopularTools(false);
  container.innerHTML = `
    <div class="container mx-auto py-8 px-4">
      <h2 class="text-lg font-semibold mb-4">
        ${results.length > 0 ? `Results for "${query}" (${results.length})` : `No results found for "${query}"`}
      </h2>
      ${
        results.length > 0
          ? `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              ${results.map((tool, idx) => renderToolCard(tool, idx)).join("")}
            </div>`
          : `<div class="bg-gray-50 rounded-lg p-8 text-center">
              <p class="text-gray-500">
                No tools match your search. Try different keywords or browse categories below.
              </p>
            </div>`
      }
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }
}

const typewriterColorCycle = [
  "#2563eb",
  "#059669",
  "#ca8a04",
  "#7c3aed",
  "#db2777",
  "#ea580c",
  "#dc2626",
  "#4f46e5",
  "#4b5563"
];

function typewriterTick() {
  const phrases = window.typewriterPhrases;
  if (!phrases || phrases.length === 0) return;

  let phraseIndex = window.typewriterIndex;
  let charIdx = window.charIndex;
  let isDeleting = window.isDeleting;

  const textEl = document.getElementById("searchTypewriterText");
  const overlayEl = document.getElementById("searchTypewriterOverlay");
  const searchInput = window.searchInput;
  const searchIcon = document.getElementById("searchIcon");

  if (!textEl || !searchInput) return;

  if (searchInput.value && searchInput.value.length > 0) {
    if (overlayEl) overlayEl.style.display = "none";
    return;
  }

  if (overlayEl) overlayEl.style.display = "flex";

  const currentPhrase = phrases[phraseIndex];
  const currentColor = typewriterColorCycle[phraseIndex % typewriterColorCycle.length];

  textEl.style.color = currentColor;
  setTimeout(() => {
    if (searchIcon) {
      const icon = searchIcon.querySelector("i");
      if (icon) icon.style.color = currentColor;
    }
  }, 0);

  if (isDeleting) {
    if (charIdx === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      window.typewriterIndex = phraseIndex;
      window.isDeleting = isDeleting;
      setTimeout(typewriterTick, 500);
      return;
    } else {
      charIdx--;
      window.charIndex = charIdx;
      textEl.textContent = currentPhrase.substring(0, charIdx);
      setTimeout(typewriterTick, 50);
      return;
    }
  } else {
    if (charIdx === currentPhrase.length) {
      isDeleting = true;
      window.isDeleting = isDeleting;
      setTimeout(typewriterTick, 1000);
      return;
    } else {
      charIdx++;
      window.charIndex = charIdx;
      textEl.textContent = currentPhrase.substring(0, charIdx);
      setTimeout(typewriterTick, 100);
      return;
    }
  }
}

let heroCategoryScrollIndex = 0;
let heroCategoryRowWidth = 0;
let heroCategoryIconWidth = 0;

function renderHeroCategoriesRow() {
  const row = document.getElementById("heroCategoriesRow");
  if (!row) return;

  const inner = row.querySelector(".hero-icons-inner");
  if (!inner) return;

  const duplicatedCategories = [...window.categories, ...window.categories];
  inner.innerHTML = duplicatedCategories
    .map(
      cat => `
    <span class="hero-category-icon ${cat.color}"><i data-lucide="${cat.icon}"></i></span>
  `
    )
    .join("");

  if (window.lucide) {
    lucide.createIcons();
  }

  setTimeout(() => {
    heroCategoryRowWidth = inner.scrollWidth / 2;
    heroCategoryIconWidth = inner.firstElementChild
      ? inner.firstElementChild.offsetWidth + 20
      : 60;
  }, 100);
}

function autoScrollHeroCategoriesRow() {
  const row = document.getElementById("heroCategoriesRow");
  if (!row) return;

  const inner = row.querySelector(".hero-icons-inner");
  if (!inner) return;

  let offsetIndex = 0;
  let currentOffset = 0;

  setTimeout(function animate() {
    const targetOffset = -offsetIndex * heroCategoryIconWidth;
    inner.style.transition = "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
    inner.style.transform = `translateX(${targetOffset}px)`;
    currentOffset = targetOffset;

    setTimeout(() => {
      offsetIndex++;
      if (offsetIndex >= window.categories.length) {
        inner.style.transition = "none";
        inner.style.transform = "translateX(0px)";
        offsetIndex = 0;
        currentOffset = 0;
        setTimeout(animate, 900);
      } else {
        setTimeout(animate, 900);
      }
    }, 700);
  }, 900);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("categoriesSection")) {
    renderCategories();
    renderPopularTools();
    setupCategoryReveal();
    setupSearch();

    const toolNames = window.tools.map(t => t.name);
    const toolCategories = window.tools.map(t => t.category);
    let initialIndex = Math.floor(Math.random() * toolNames.length);

    const searchInput = document.getElementById("searchInput");
    window.typewriterPhrases = toolNames;
    window.typewriterCategoryMap = toolCategories;
    window.typewriterIndex = initialIndex;
    window.charIndex = 0;
    window.isDeleting = false;
    window.searchInput = searchInput;

    if (searchInput) {
      typewriterTick();
      searchInput.addEventListener("input", () => {
        if (!searchInput.value) {
          window.charIndex = 0;
          window.isDeleting = false;
          window.typewriterIndex = Math.floor(Math.random() * toolNames.length);
          typewriterTick();
        }
      });
    }

    renderHeroCategoriesRow();
    autoScrollHeroCategoriesRow();
  }

  if (window.lucide) {
    lucide.createIcons();
  }
});