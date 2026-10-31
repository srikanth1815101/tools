---
id: "color-picker"
title: "Color Code Picker - Free Online Tool | CSRGO Tools"
name: "Color Code Picker"
description: "Pick and convert color codes"
url: "/tools/color-code-picker/"
category: "developer-tools"
icon: "palette"
color: "bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400"
keywords:
  - "color code picker"
  - "color code picker online"
  - "free color code picker"
hero:
  icon: "palette"
  iconBg: "gradient-bg"
  title: "Color Code Picker"
  subtitle: "Pick a color and instantly get HEX, RGB, HSL, and CMYK codes"
  features:
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Codes"
    - icon: "copy"
      color: "text-blue-500"
      label: "One-Click Copy"
    - icon: "shield"
      color: "text-green-500"
      label: "Privacy-First"
whatIs:
  title: "What is Color Code Picker?"
  content: "The Color Code Picker is a free online tool that lets you select any color and instantly view its HEX, RGB, HSL, and CMYK codes. It's perfect for designers, developers, and anyone working with digital color. Easily copy any code for use in your projects."
whyUse:
  title: "Why Use Color Code Picker?"
  items:
    - icon: "check-circle"
      title: "All Color Codes"
      desc: "Get HEX, RGB, HSL, and CMYK instantly for any color."
    - icon: "copy"
      title: "Easy Copy"
      desc: "Copy any color code with a single click."
    - icon: "settings"
      title: "Custom Display"
      desc: "Choose which color formats to show."
    - icon: "lock"
      title: "Privacy-First"
      desc: "All processing is done in your browser. Your data never leaves your device."
howToUse:
  title: "How to Use Color Code Picker"
  steps:
    - icon: "droplet"
      title: "Pick a Color"
      desc: "Use the color picker or select a sample color."
    - icon: "settings"
      title: "Choose Format"
      desc: "Select which color code formats to display."
    - icon: "copy"
      title: "Copy Code"
      desc: "Click the copy button next to any code to copy it."
    - icon: "trash-2"
      title: "Clear"
      desc: "Reset to the default color anytime."
features:
  - "Pick any color using a modern color picker"
  - "View HEX, RGB, HSL, and CMYK codes instantly"
  - "Copy any color code with one click"
  - "Choose which color formats to display"
  - "Sample colors for quick selection"
  - "Responsive design for desktop and mobile"
  - "All processing done in your browser for privacy"
faq:
  - q: "What color formats are supported?"
    a: "You can view and copy HEX, RGB, HSL, and CMYK codes for any color."
  - q: "Is my color data sent to a server?"
    a: "No, all processing is done locally in your browser. Your data is never uploaded or stored."
  - q: "Can I use this tool on my phone or tablet?"
    a: "Yes! The tool is fully responsive and works on all modern devices."
  - q: "How do I copy a color code?"
    a: "Click the copy icon next to any color code to copy it to your clipboard."
  - q: "Can I reset to the default color?"
    a: "Yes, just click the Clear button to reset the picker to the default blue."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover flex flex-col gap-8">
          <!-- Picker & Options -->
          <div class="flex flex-col md:flex-row md:items-center gap-6">
            <div class="flex flex-col items-center gap-2 w-full md:w-auto">
              <input id="colorInput" type="color" value="#3b82f6" class="w-24 h-24 rounded-xl border-2 border-blue-200 shadow-md cursor-pointer transition-all" />
              <div class="flex gap-2 mt-2">
                <button class="sample-color px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium hover:bg-blue-100 transition-colors" data-color="#3b82f6">Blue</button>
                <button class="sample-color px-3 py-1 rounded-lg bg-green-50 text-green-700 text-xs font-medium hover:bg-green-100 transition-colors" data-color="#22c55e">Green</button>
                <button class="sample-color px-3 py-1 rounded-lg bg-pink-50 text-pink-700 text-xs font-medium hover:bg-pink-100 transition-colors" data-color="#ec4899">Pink</button>
                <button class="sample-color px-3 py-1 rounded-lg bg-yellow-50 text-yellow-700 text-xs font-medium hover:bg-yellow-100 transition-colors" data-color="#f59e42">Orange</button>
              </div>
            </div>
            <div class="flex-1 flex flex-col gap-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Display Format</label>
              <select id="displayFormat" class="w-full border rounded-lg px-3 py-2 bg-white">
                <option value="all">All Formats</option>
                <option value="hex">HEX Only</option>
                <option value="rgb">RGB Only</option>
                <option value="hsl">HSL Only</option>
                <option value="cmyk">CMYK Only</option>
              </select>
              <button id="clearBtn" class="mt-2 w-full md:w-auto px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2 text-sm font-medium">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
                Clear
              </button>
            </div>
          </div>
          <!-- Output Area -->
          <div class="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col gap-4">
            <div class="flex flex-wrap gap-4 justify-between items-center">
              <div class="flex items-center gap-2">
                <span class="block w-6 h-6 rounded border border-gray-300" id="colorPreview" style="background:#3b82f6"></span>
                <span id="colorName" class="font-medium text-gray-700">Blue</span>
              </div>
              <div id="errorMessage" class="hidden p-2 bg-red-50 text-red-700 rounded-lg text-xs"></div>
            </div>
            <div id="colorCodes" class="grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();
    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('COLOR_CODE_PICKER_DATA');
    });
    // Color conversion helpers
    function hexToRgb(hex) {
      hex = hex.replace('#', '');
      if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
      const num = parseInt(hex, 16);
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255
      };
    }
    function rgbToHex(r, g, b) {
      return (
        '#' +
        [r, g, b]
          .map(x => x.toString(16).padStart(2, '0'))
          .join('')
          .toUpperCase()
      );
    }
    function rgbToHsl(r, g, b) {
      r /= 255; g /= 255; b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
      return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
      };
    }
    function rgbToCmyk(r, g, b) {
      if ((r === 0) && (g === 0) && (b === 0)) return {c:0,m:0,y:0,k:100};
      let c = 1 - (r / 255), m = 1 - (g / 255), y = 1 - (b / 255);
      let minCMY = Math.min(c,Math.min(m,y));
      c = Math.round(100 * (c - minCMY) / (1 - minCMY));
      m = Math.round(100 * (m - minCMY) / (1 - minCMY));
      y = Math.round(100 * (y - minCMY) / (1 - minCMY));
      let k = Math.round(100 * minCMY);
      return {c, m, y, k};
    }
    // Color name helper (basic)
    const colorNames = {
      '#3b82f6': 'Blue',
      '#22c55e': 'Green',
      '#ec4899': 'Pink',
      '#f59e42': 'Orange'
    };
    // Elements
    const colorInput = document.getElementById('colorInput');
    const displayFormat = document.getElementById('displayFormat');
    const colorPreview = document.getElementById('colorPreview');
    const colorName = document.getElementById('colorName');
    const colorCodes = document.getElementById('colorCodes');
    const sampleColorBtns = document.querySelectorAll('.sample-color');
    const clearBtn = document.getElementById('clearBtn');
    const errorMessage = document.getElementById('errorMessage');
    // Render color codes
    function renderColorCodes(hex) {
      const rgb = hexToRgb(hex);
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
      const codes = {
        hex: rgbToHex(rgb.r, rgb.g, rgb.b),
        rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
        hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        cmyk: `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`
      };
      let formats = ['hex', 'rgb', 'hsl', 'cmyk'];
      if (displayFormat.value !== 'all') formats = [displayFormat.value];
      colorCodes.innerHTML = formats.map(fmt => `
        <div class="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-200">
          <span class="font-mono text-sm min-w-[70px] capitalize">${fmt.toUpperCase()}</span>
          <span class="font-mono text-blue-700 text-sm select-all flex-1">${codes[fmt]}</span>
          <button class="copy-btn text-gray-500 hover:text-blue-600 transition-colors" data-value="${codes[fmt]}" title="Copy">
            <i data-lucide="copy" class="w-4 h-4"></i>
          </button>
        </div>
      `).join('');
      lucide.createIcons();
      document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.onclick = function() {
          navigator.clipboard.writeText(btn.getAttribute('data-value'));
          btn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
          lucide.createIcons();
          setTimeout(() => {
            btn.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i>';
            lucide.createIcons();
          }, 1500);
        };
      });
    }
    // Update UI
    function updateColor(hex) {
      colorPreview.style.background = hex;
      colorName.textContent = colorNames[hex.toLowerCase()] || hex.toUpperCase();
      renderColorCodes(hex);
      errorMessage.classList.add('hidden');
    }
    // Event listeners
    colorInput.addEventListener('input', e => {
      updateColor(e.target.value);
    });
    displayFormat.addEventListener('change', () => {
      updateColor(colorInput.value);
    });
    sampleColorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        colorInput.value = btn.getAttribute('data-color');
        updateColor(colorInput.value);
      });
    });
    clearBtn.addEventListener('click', () => {
      colorInput.value = '#3b82f6';
      updateColor('#3b82f6');
    });
    // Initial render
    updateColor(colorInput.value);
  </script>
{{< /rawhtml >}}
