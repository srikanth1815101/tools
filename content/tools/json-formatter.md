---
id: "json-formatter"
title: "JSON Formatter - Free Online Tool | CSRGO Tools"
name: "JSON Formatter"
description: "Format and validate JSON"
url: "/tools/json-formatter/"
category: "developer-tools"
icon: "braces"
color: "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
keywords:
  - "json formatter"
  - "json formatter online"
  - "free json formatter"
hero:
  icon: "braces"
  iconBg: "gradient-bg"
  title: "JSON Formatter & Validator"
  subtitle: "Format, validate, and beautify your JSON data with advanced options"
  features:
    - icon: "shield"
      color: "text-green-500"
      label: "Secure Processing"
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Formatting"
    - icon: "globe"
      color: "text-blue-500"
      label: "Browser-based"
whatIs:
  title: "What is JSON Formatter?"
  content: "The JSON Formatter is a powerful online tool that helps you format, validate, and beautify JSON (JavaScript Object Notation) data. It provides a clean and organized view of your JSON data with proper indentation and syntax highlighting, making it easier to read and debug.<br><br><strong>Key features:</strong> The tool offers multiple formatting options including customizable indentation, syntax highlighting themes, and the ability to minify JSON for production use. It also includes validation to ensure your JSON is properly formatted and error-free."
whyUse:
  title: "Why Use JSON Formatter?"
  items:
    - icon: "check-circle"
      title: "Syntax Validation"
      desc: "Instantly validate your JSON data and get detailed error messages if there are any issues."
    - icon: "layout"
      title: "Customizable Formatting"
      desc: "Choose your preferred indentation style and syntax highlighting theme for better readability."
    - icon: "file-code"
      title: "Minification Support"
      desc: "Minify your JSON for production use to reduce file size and improve performance."
    - icon: "copy"
      title: "Easy Copy & Export"
      desc: "One-click copy functionality and export options for your formatted JSON data."
howToUse:
  title: "How to Use JSON Formatter"
  steps:
    - icon: "file-input"
      title: "Input JSON"
      desc: "Paste your JSON data into the input area or use the sample JSON options."
    - icon: "settings"
      title: "Choose Options"
      desc: "Select your preferred formatting options like indentation size and theme."
    - icon: "wand-2"
      title: "Format & Validate"
      desc: "Click format to beautify your JSON or validate to check for errors."
features:
  - "Format JSON with customizable indentation (2 spaces, 4 spaces, or tabs)"
  - "Multiple syntax highlighting themes for better readability"
  - "JSON validation with detailed error messages"
  - "Minify JSON for production use"
  - "Sample JSON data for quick testing"
  - "One-click copy functionality"
  - "All processing done in your browser for privacy and security"
faq:
  - q: "What is JSON formatting?"
    a: "JSON formatting is the process of organizing JSON data with proper indentation and structure to make it more readable and maintainable."
  - q: "Why should I format my JSON?"
    a: "Formatted JSON is easier to read, debug, and maintain. It helps identify syntax errors and improves code quality."
  - q: "What is JSON minification?"
    a: "JSON minification removes all unnecessary whitespace and formatting to reduce file size, which is useful for production environments."
  - q: "Is my JSON data secure?"
    a: "Yes, all processing is done locally in your browser. Your data never leaves your device."
  - q: "What JSON versions are supported?"
    a: "The tool supports all standard JSON formats and follows the JSON specification (RFC 8259)."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-6">
            <!-- Options -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 items-end">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Indentation</label>
                <select id="indentSize" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="2">2 Spaces</option>
                  <option value="4">4 Spaces</option>
                  <option value="tab">Tab</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                <select id="theme" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="github">GitHub</option>
                  <option value="monokai">Monokai</option>
                  <option value="vs">VS (Visual Studio)</option>
                  <option value="atom-one-dark">Atom One Dark</option>
                </select>
              </div>
              <div class="flex gap-2 lg:justify-end flex-col lg:flex-row w-full">
                <button class="sample-json w-full lg:w-auto min-w-[140px] px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-lg text-sm font-medium text-blue-700 transition-colors flex items-center justify-center gap-2">
                  <i data-lucide="file-text" class="w-4 h-4"></i>
                  Simple JSON
                </button>
                <button class="sample-json w-full lg:w-auto min-w-[140px] px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-lg text-sm font-medium text-purple-700 transition-colors flex items-center justify-center gap-2">
                  <i data-lucide="file-code" class="w-4 h-4"></i>
                  Complex JSON
                </button>
              </div>
            </div>

            <!-- Input Area -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Left Column: Input -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold flex items-center gap-2">
                    <i data-lucide="file-input" class="w-5 h-5 text-blue-600"></i>
                    Input JSON
                  </h3>
                  <div class="flex gap-2">
                    <button id="clearInput" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      <i data-lucide="trash-2" class="w-4 h-4"></i>
                      Clear
                    </button>
                  </div>
                </div>
                <div class="relative">
                  <textarea id="jsonInput" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Paste your JSON here..."></textarea>
                </div>
                <!-- Error message: below input on mobile, hidden on desktop -->
                <div id="errorMessageMobile" class="hidden lg:hidden p-4 bg-red-50 text-red-700 rounded-lg text-sm"></div>
              </div>

              <!-- Right Column: Output (Desktop) -->
              <div class="space-y-4 hidden lg:block">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold flex items-center gap-2">
                    <i data-lucide="file-output" class="w-5 h-5 text-green-600"></i>
                    Formatted Output
                  </h3>
                  <div class="flex gap-2">
                    <button id="copyOutput" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      <i data-lucide="copy" class="w-4 h-4"></i>
                      Copy
                    </button>
                  </div>
                </div>
                <div class="relative">
                  <pre id="jsonOutput" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm overflow-auto"></pre>
                </div>
              </div>
            </div>
            <!-- Error message: full width on desktop, hidden on mobile -->
            <div id="errorMessage" class="hidden p-4 bg-red-50 text-red-700 rounded-lg text-sm w-full mt-4 mx-auto"></div>

            <!-- Action Buttons (Mobile) -->
            <div class="flex gap-4 lg:hidden">
              <button id="formatBtnMobile" class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                <i data-lucide="wand-2" class="w-4 h-4"></i>
                Format
              </button>
              <button id="minifyBtnMobile" class="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2">
                <i data-lucide="minimize-2" class="w-4 h-4"></i>
                Minify
              </button>
            </div>

            <!-- Output Area (Mobile) -->
            <div class="space-y-4 lg:hidden">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  <i data-lucide="file-output" class="w-5 h-5 text-green-600"></i>
                  Formatted Output
                </h3>
                <div class="flex gap-2">
                  <button id="copyOutputMobile" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                    Copy
                  </button>
                </div>
              </div>
              <div class="relative">
                <pre id="jsonOutputMobile" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm overflow-auto"></pre>
              </div>
            </div>

            <!-- Action Buttons (Desktop) -->
            <div class="hidden lg:flex gap-4 justify-center">
              <button id="formatBtn" class="w-48 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                <i data-lucide="wand-2" class="w-4 h-4"></i>
                Format
              </button>
              <button id="minifyBtn" class="w-48 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2">
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
      renderToolSections('JSON_FORMATTER_DATA');
    });

    // Elements
    const jsonInput = document.getElementById('jsonInput');
    const jsonOutput = document.getElementById('jsonOutput');
    const jsonOutputMobile = document.getElementById('jsonOutputMobile');
    const formatBtn = document.getElementById('formatBtn');
    const minifyBtn = document.getElementById('minifyBtn');
    const formatBtnMobile = document.getElementById('formatBtnMobile');
    const minifyBtnMobile = document.getElementById('minifyBtnMobile');
    const clearInput = document.getElementById('clearInput');
    const copyOutput = document.getElementById('copyOutput');
    const copyOutputMobile = document.getElementById('copyOutputMobile');
    const errorMessage = document.getElementById('errorMessage');
    const errorMessageMobile = document.getElementById('errorMessageMobile');
    const indentSize = document.getElementById('indentSize');
    const theme = document.getElementById('theme');
    const sampleJsonButtons = document.querySelectorAll('.sample-json');

    // Sample JSON data
    const sampleJson = {
      simple: {
        name: "John Doe",
        age: 30,
        email: "john@example.com",
        active: true,
        hobbies: ["reading", "gaming", "coding"]
      },
      complex: {
        users: [
          {
            id: 1,
            name: "Alice",
            address: {
              street: "123 Main St",
              city: "Boston",
              country: "USA"
            },
            orders: [
              {
                id: "A123",
                items: ["laptop", "mouse"],
                total: 1299.99
              }
            ]
          }
        ],
        metadata: {
          version: "1.0",
          timestamp: "2024-03-20T12:00:00Z"
        }
      }
    };

    // Format JSON
    function formatJSON(json, indent) {
      try {
        const parsed = typeof json === 'string' ? JSON.parse(json) : json;
        return JSON.stringify(parsed, null, indent);
      } catch (e) {
        throw new Error('Invalid JSON: ' + e.message);
      }
    }

    // Minify JSON
    function minifyJSON(json) {
      try {
        const parsed = typeof json === 'string' ? JSON.parse(json) : json;
        return JSON.stringify(parsed);
      } catch (e) {
        throw new Error('Invalid JSON: ' + e.message);
      }
    }

    // Update syntax highlighting
    function updateHighlighting() {
      const code = jsonOutput.textContent;
      jsonOutput.innerHTML = code;
      jsonOutputMobile.innerHTML = code;
      hljs.highlightElement(jsonOutput);
      hljs.highlightElement(jsonOutputMobile);
    }

    // Initialize with empty state
    jsonOutput.textContent = '';
    jsonOutputMobile.textContent = '';
    errorMessage.classList.add('hidden'); // Hide error on desktop at load
    errorMessageMobile.classList.add('hidden'); // Hide error on mobile at load

    // Format button click
    function handleFormat() {
      if (window.innerWidth < 1024) {
        // Mobile: always hide desktop error
        errorMessage.classList.add('hidden');
        errorMessage.classList.remove('lg:block'); // Ensure desktop block display is removed
      } else {
        // Desktop: always hide mobile error
        errorMessageMobile.classList.add('hidden');
      }
      try {
        const indent = indentSize.value === 'tab' ? '\t' : parseInt(indentSize.value);
        const formatted = formatJSON(jsonInput.value, indent);
        jsonOutput.textContent = formatted;
        jsonOutputMobile.textContent = formatted;
        updateHighlighting();
        errorMessage.classList.add('hidden');
        errorMessage.classList.remove('lg:block'); // Ensure desktop block display is removed when no error
        errorMessageMobile.classList.add('hidden');
        // Auto scroll to output on mobile with offset for nav bar, only if no error
        if (window.innerWidth < 1024) {
          const outputSection = jsonOutputMobile.parentElement.parentElement; // More robust selection
          const navHeight = 80; // Approximate height of nav bar
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
          errorMessage.classList.add('lg:block'); // Explicitly add block display for desktop error
        }
      }
    }

    // Minify button click
    function handleMinify() {
      if (window.innerWidth < 1024) {
        // Mobile: always hide desktop error
        errorMessage.classList.add('hidden');
        errorMessage.classList.remove('lg:block'); // Ensure desktop block display is removed
      } else {
        // Desktop: always hide mobile error
        errorMessageMobile.classList.add('hidden');
      }
      try {
        const minified = minifyJSON(jsonInput.value);
        jsonOutput.textContent = minified;
        jsonOutputMobile.textContent = minified;
        updateHighlighting();
        errorMessage.classList.add('hidden');
        errorMessage.classList.remove('lg:block'); // Ensure desktop block display is removed when no error
        errorMessageMobile.classList.add('hidden');
        // Auto scroll to output on mobile with offset for nav bar, only if no error
        if (window.innerWidth < 1024) {
          const outputSection = jsonOutputMobile.parentElement.parentElement; // More robust selection
          const navHeight = 80; // Approximate height of nav bar
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
          errorMessage.classList.add('lg:block'); // Explicitly add block display for desktop error
        }
      }
    }

    // Add event listeners for both desktop and mobile buttons
    formatBtn.addEventListener('click', handleFormat);
    minifyBtn.addEventListener('click', handleMinify);
    formatBtnMobile.addEventListener('click', handleFormat);
    minifyBtnMobile.addEventListener('click', handleMinify);

    // Clear input
    clearInput.addEventListener('click', () => {
      jsonInput.value = '';
      jsonOutput.textContent = '';
      jsonOutputMobile.textContent = '';
      errorMessage.classList.add('hidden');
      errorMessage.classList.remove('lg:block');
      errorMessageMobile.classList.add('hidden');
    });

    // Copy output (Desktop)
    copyOutput.addEventListener('click', () => {
      const text = jsonOutput.textContent;
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

    // Copy output (Mobile)
    copyOutputMobile.addEventListener('click', () => {
      const text = jsonOutputMobile.textContent;
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

    // Theme change
    theme.addEventListener('change', () => {
      const link = document.querySelector('link[href*="highlight.js"]');
      link.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/${theme.value}.min.css`;
      
      // Set background color based on theme for readability
      const currentTheme = theme.value;
      let bgColor = '';
      let textColor = ''; // New variable for text color

      if (currentTheme === 'monokai' || currentTheme === 'atom-one-dark') {
        bgColor = '#282c34'; // Dark background for dark themes
        textColor = '#f8f8f2'; // Light text for dark themes (Monokai default)
      } else if (currentTheme === 'vs') {
        bgColor = '#ffffff'; // White background for light themes
        textColor = '#000000'; // Force black text for VS
      } else {
        bgColor = '#ffffff'; // White background for other light themes
        textColor = '#333333'; // Default dark text for other light themes
      }

      // Apply background to the <pre> tags forcefully, overriding any other background styles
      jsonOutput.style.setProperty('background-color', bgColor, 'important');
      jsonOutputMobile.style.setProperty('background-color', bgColor, 'important');
      
      // Apply text color to the <pre> tags forcefully
      jsonOutput.style.setProperty('color', textColor, 'important');
      jsonOutputMobile.style.setProperty('color', textColor, 'important');

      // Update body data-theme attribute for CSS targeting
      document.body.setAttribute('data-theme', currentTheme);

      updateHighlighting();
    });

    // Sample JSON buttons
    sampleJsonButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const sample = index === 0 ? sampleJson.simple : sampleJson.complex;
        jsonInput.value = JSON.stringify(sample, null, 2);
        formatBtn.click();
      });
    });

    // Clear output and hide errors when input changes
    jsonInput.addEventListener('input', () => {
      jsonOutput.textContent = '';
      jsonOutputMobile.textContent = '';
      errorMessage.classList.add('hidden');
      errorMessage.classList.remove('lg:block');
      errorMessageMobile.classList.add('hidden');
    });
  </script>
{{< /rawhtml >}}
