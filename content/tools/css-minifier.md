---
id: "css-minifier"
title: "CSS Minifier - Free Online Tool | CSRGO Tools"
name: "CSS Minifier"
description: "Minify CSS code"
url: "/tools/css-minifier/"
category: "developer-tools"
icon: "file-code"
color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
keywords:
  - "css minifier"
  - "css minifier online"
  - "free css minifier"
hero:
  icon: "file-code"
  iconBg: "gradient-bg"
  title: "CSS Minifier"
  subtitle: "Minify and optimize your CSS code instantly with advanced options"
  features:
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Minification"
    - icon: "settings"
      color: "text-blue-500"
      label: "Customizable Output"
    - icon: "shield"
      color: "text-green-500"
      label: "Browser-based & Secure"
whatIs:
  title: "What is CSS Minifier?"
  content: "The CSS Minifier is a free online tool that compresses and optimizes your CSS code by removing unnecessary whitespace, comments, and formatting. It helps reduce file size and improve website performance, while offering advanced options for output customization.<br><br><strong>Key features:</strong> Remove comments, keep or remove last semicolons, add line breaks after rules, and more. All processing is done in your browser for privacy and speed."
whyUse:
  title: "Why Use CSS Minifier?"
  items:
    - icon: "arrow-down"
      title: "Reduce File Size"
      desc: "Shrink your CSS files for faster load times and better performance."
    - icon: "sliders"
      title: "Customizable Output"
      desc: "Choose to remove comments, keep last semicolons, and add line breaks as needed."
    - icon: "lock"
      title: "Privacy First"
      desc: "All minification happens locally in your browser. Your CSS never leaves your device."
    - icon: "copy"
      title: "Easy Copy & Export"
      desc: "One-click copy functionality for your minified CSS output."
howToUse:
  title: "How to Use CSS Minifier"
  steps:
    - icon: "file-input"
      title: "Input CSS"
      desc: "Paste your CSS code into the input area or use the sample CSS buttons."
    - icon: "settings"
      title: "Choose Options"
      desc: "Select your preferred minification options like removing comments or keeping last semicolons."
    - icon: "minimize-2"
      title: "Minify"
      desc: "Click Minify to instantly compress your CSS. Copy the result with one click."
features:
  - "Minify CSS with customizable options"
  - "Remove comments, whitespace, and unnecessary formatting"
  - "Option to keep or remove last semicolons"
  - "Add line breaks after rules for readability"
  - "Sample CSS for quick testing"
  - "One-click copy functionality"
  - "All processing done in your browser for privacy and security"
  - "Responsive design for all devices"
  - "No registration or installation required"
faq:
  - q: "What does CSS minification do?"
    a: "CSS minification removes unnecessary characters like whitespace, comments, and line breaks to reduce file size and improve performance."
  - q: "Will minification change how my CSS works?"
    a: "No, minification only removes characters that are not required for CSS to function. Your styles will remain the same."
  - q: "Is my CSS data secure?"
    a: "Yes, all processing is done locally in your browser. Your CSS is never sent to any server."
  - q: "Can I keep comments or formatting?"
    a: "You can choose to keep or remove comments, last semicolons, and add line breaks after rules using the available options."
  - q: "Why should I minify my CSS?"
    a: "Minified CSS loads faster, saves bandwidth, and improves website performance, especially for production environments."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-6">
            <!-- Options -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 items-end">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Remove Comments</label>
                <select id="removeComments" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Keep Last Semicolon</label>
                <select id="keepLastSemicolon" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Line Break After Rules</label>
                <select id="lineBreak" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            </div>
            <!-- Input/Output Area -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Left Column: Input -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold flex items-center gap-2">
                    <i data-lucide="file-input" class="w-5 h-5 text-blue-600"></i>
                    Input CSS
                  </h3>
                  <div class="flex gap-2">
                    <button id="clearInput" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      <i data-lucide="trash-2" class="w-4 h-4"></i>
                      Clear
                    </button>
                  </div>
                </div>
                <div class="relative">
                  <textarea id="cssInput" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Paste your CSS here..."></textarea>
                </div>
                <div class="flex gap-2">
                  <button class="sample-css w-full lg:w-auto min-w-[140px] px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-lg text-sm font-medium text-blue-700 transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="file-text" class="w-4 h-4"></i>
                    Simple CSS
                  </button>
                  <button class="sample-css w-full lg:w-auto min-w-[140px] px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-lg text-sm font-medium text-purple-700 transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="file-code" class="w-4 h-4"></i>
                    Complex CSS
                  </button>
                </div>
                <div id="errorMessageMobile" class="hidden lg:hidden p-4 bg-red-50 text-red-700 rounded-lg text-sm"></div>
              </div>
              <!-- Right Column: Output (Desktop) -->
              <div class="space-y-4 hidden lg:block">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold flex items-center gap-2">
                    <i data-lucide="file-output" class="w-5 h-5 text-green-600"></i>
                    Minified Output
                  </h3>
                  <div class="flex gap-2">
                    <button id="copyOutput" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      <i data-lucide="copy" class="w-4 h-4"></i>
                      Copy
                    </button>
                  </div>
                </div>
                <div class="relative">
                  <pre id="cssOutput" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm overflow-auto bg-gray-50"></pre>
                </div>
              </div>
            </div>
            <div id="errorMessage" class="hidden p-4 bg-red-50 text-red-700 rounded-lg text-sm w-full mt-4 mx-auto"></div>
            <!-- Action Buttons (Mobile) -->
            <div class="flex gap-4 lg:hidden">
              <button id="minifyBtnMobile" class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                <i data-lucide="minimize-2" class="w-4 h-4"></i>
                Minify
              </button>
            </div>
            <!-- Output Area (Mobile) -->
            <div class="space-y-4 lg:hidden">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  <i data-lucide="file-output" class="w-5 h-5 text-green-600"></i>
                  Minified Output
                </h3>
                <div class="flex gap-2">
                  <button id="copyOutputMobile" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                    Copy
                  </button>
                </div>
              </div>
              <div class="relative">
                <pre id="cssOutputMobile" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm overflow-auto bg-gray-50"></pre>
              </div>
            </div>
            <!-- Action Buttons (Desktop) -->
            <div class="hidden lg:flex gap-4 justify-center">
              <button id="minifyBtn" class="w-48 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                <i data-lucide="minimize-2" class="w-4 h-4"></i>
                Minify
              </button>
            </div>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();
    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('CSS_MINIFIER_DATA');
    });
    // Elements
    const cssInput = document.getElementById('cssInput');
    const cssOutput = document.getElementById('cssOutput');
    const cssOutputMobile = document.getElementById('cssOutputMobile');
    const minifyBtn = document.getElementById('minifyBtn');
    const minifyBtnMobile = document.getElementById('minifyBtnMobile');
    const clearInput = document.getElementById('clearInput');
    const copyOutput = document.getElementById('copyOutput');
    const copyOutputMobile = document.getElementById('copyOutputMobile');
    const errorMessage = document.getElementById('errorMessage');
    const errorMessageMobile = document.getElementById('errorMessageMobile');
    const removeComments = document.getElementById('removeComments');
    const keepLastSemicolon = document.getElementById('keepLastSemicolon');
    const lineBreak = document.getElementById('lineBreak');
    const sampleCssButtons = document.querySelectorAll('.sample-css');
    // Sample CSS data
    const sampleCss = {
      simple: `body {\n  color: #333;\n  background: #fff;\n}\n\nh1 {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}`,
      complex: `/* Main styles */\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n/* Navigation */\nnav ul {\n  list-style: none;\n  padding: 0;\n}\nnav ul li {\n  display: inline-block;\n  margin-right: 1rem;\n}\n\n/* Button */\n.button {\n  background: linear-gradient(90deg, #4f8cff, #a084ee);\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 0.75rem 1.5rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.button:hover {\n  background: linear-gradient(90deg, #3b6fd8, #7c5fd3);\n}`
    };
    // CSS Minification logic
    function minifyCSS(css, options) {
      let min = css;
      if (options.removeComments === 'yes') {
        min = min.replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, '');
      }
      min = min.replace(/\s*([{}:;,])\s*/g, '$1'); // Remove space around {}:;,
      min = min.replace(/;}/g, options.keepLastSemicolon === 'yes' ? ';}' : '}');
      min = min.replace(/\s+/g, ' '); // Collapse whitespace
      min = min.replace(/\s*([>+~])\s*/g, '$1'); // Remove space around >+~
      min = min.trim();
      if (options.lineBreak === 'yes') {
        min = min.replace(/}/g, '}\n');
      }
      return min;
    }
    // Minify button click
    function handleMinify() {
      errorMessage.classList.add('hidden');
      errorMessageMobile.classList.add('hidden');
      try {
        const options = {
          removeComments: removeComments.value,
          keepLastSemicolon: keepLastSemicolon.value,
          lineBreak: lineBreak.value
        };
        const css = cssInput.value;
        if (!css.trim()) throw new Error('Please enter CSS to minify.');
        const minified = minifyCSS(css, options);
        cssOutput.textContent = minified;
        cssOutputMobile.textContent = minified;
        errorMessage.classList.add('hidden');
        errorMessageMobile.classList.add('hidden');
        // Auto scroll to output on mobile
        if (window.innerWidth < 1024) {
          const outputSection = cssOutputMobile.parentElement.parentElement;
          const navHeight = 80;
          const outputPosition = outputSection.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: outputPosition - navHeight,
            behavior: 'smooth'
          });
        }
      } catch (e) {
        if (window.innerWidth < 1024) {
          errorMessage.classList.add('hidden');
          errorMessageMobile.textContent = e.message;
          errorMessageMobile.classList.remove('hidden');
        } else {
          errorMessageMobile.classList.add('hidden');
          errorMessage.textContent = e.message;
          errorMessage.classList.remove('hidden');
        }
      }
    }
    // Event listeners
    minifyBtn && minifyBtn.addEventListener('click', handleMinify);
    minifyBtnMobile && minifyBtnMobile.addEventListener('click', handleMinify);
    clearInput.addEventListener('click', () => {
      cssInput.value = '';
      cssOutput.textContent = '';
      cssOutputMobile.textContent = '';
      errorMessage.classList.add('hidden');
      errorMessageMobile.classList.add('hidden');
    });
    copyOutput.addEventListener('click', () => {
      const text = cssOutput.textContent;
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const originalText = copyOutput.innerHTML;
          copyOutput.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Copied!';
          lucide.createIcons();
          setTimeout(() => {
            copyOutput.innerHTML = originalText;
            lucide.createIcons();
          }, 2000);
        });
      }
    });
    copyOutputMobile.addEventListener('click', () => {
      const text = cssOutputMobile.textContent;
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const originalText = copyOutputMobile.innerHTML;
          copyOutputMobile.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Copied!';
          lucide.createIcons();
          setTimeout(() => {
            copyOutputMobile.innerHTML = originalText;
            lucide.createIcons();
          }, 2000);
        });
      }
    });
    sampleCssButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const sample = index === 0 ? sampleCss.simple : sampleCss.complex;
        cssInput.value = sample;
        handleMinify();
      });
    });
    cssInput.addEventListener('input', () => {
      cssOutput.textContent = '';
      cssOutputMobile.textContent = '';
      errorMessage.classList.add('hidden');
      errorMessageMobile.classList.add('hidden');
    });
  </script>
{{< /rawhtml >}}
