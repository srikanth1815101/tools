---
id: "html-to-markdown"
title: "HTML to Markdown Converter - Free Online Tool | CSRGO Tools"
name: "HTML to Markdown Converter"
description: "Convert HTML to Markdown"
url: "/tools/html-to-markdown-converter/"
category: "developer-tools"
icon: "code"
color: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
keywords:
  - "html to markdown converter"
  - "html to markdown converter online"
  - "free html to markdown converter"
hero:
  icon: "code"
  iconBg: "gradient-bg"
  title: "HTML to Markdown Converter"
  subtitle: "Convert HTML code to clean, readable Markdown instantly with advanced options"
  features:
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Conversion"
    - icon: "settings"
      color: "text-blue-500"
      label: "Customizable Output"
    - icon: "shield"
      color: "text-green-500"
      label: "Browser-based & Secure"
whatIs:
  title: "What is HTML to Markdown Converter?"
  content: "The HTML to Markdown Converter is a free online tool that transforms HTML code into clean, readable Markdown format. It supports a wide range of HTML tags and provides advanced options to customize the output style, making it ideal for developers, writers, and content creators.<br><br><strong>Key features:</strong> Choose heading style, bullet marker, code block style, and more. All processing is done in your browser for privacy and speed."
whyUse:
  title: "Why Use HTML to Markdown Converter?"
  items:
    - icon: "arrow-right-left"
      title: "Seamless Conversion"
      desc: "Quickly convert HTML code to Markdown for documentation, blogs, or code sharing."
    - icon: "sliders"
      title: "Customizable Output"
      desc: "Select your preferred heading, bullet, and code block styles for perfect Markdown."
    - icon: "lock"
      title: "Privacy First"
      desc: "All conversions happen locally in your browser. Your HTML never leaves your device."
    - icon: "copy"
      title: "Easy Copy & Export"
      desc: "One-click copy functionality for your Markdown output."
howToUse:
  title: "How to Use HTML to Markdown Converter"
  steps:
    - icon: "file-input"
      title: "Input HTML"
      desc: "Paste your HTML code into the input area or use the sample HTML buttons."
    - icon: "settings"
      title: "Choose Options"
      desc: "Select your preferred heading style, bullet marker, code block style, and more."
    - icon: "wand-2"
      title: "Convert"
      desc: "Click Convert to instantly generate Markdown. Copy the result with one click."
features:
  - "Convert HTML to Markdown with customizable options"
  - "Supports heading, list, code, emphasis, and link styles"
  - "Sample HTML for quick testing"
  - "One-click copy functionality"
  - "All processing done in your browser for privacy and security"
  - "Responsive design for all devices"
  - "No registration or installation required"
faq:
  - q: "What is Markdown?"
    a: "Markdown is a lightweight markup language for formatting text, widely used for documentation, blogging, and code sharing."
  - q: "Why convert HTML to Markdown?"
    a: "Markdown is easier to read and write than HTML, and is supported by many platforms including GitHub, Reddit, and blogging tools."
  - q: "Is my HTML data secure?"
    a: "Yes, all processing is done locally in your browser. Your HTML is never sent to any server."
  - q: "What HTML tags are supported?"
    a: "Most common HTML tags are supported, including headings, paragraphs, lists, links, images, code blocks, and more."
  - q: "Can I customize the Markdown output?"
    a: "Yes, you can choose heading style, bullet marker, code block style, emphasis delimiter, and link style."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-6">
            <!-- Options -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 items-end">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Code Block Style</label>
                <select id="codeBlockStyle" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="indented">Indented</option>
                  <option value="fenced">Fenced (```)</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Emphasis Delimiter</label>
                <select id="emDelimiter" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="_">_ (underscore)</option>
                  <option value="*">* (asterisk)</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Link Style</label>
                <select id="linkStyle" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="inlined">Inlined</option>
                  <option value="referenced">Referenced</option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 items-end">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Heading Style</label>
                <select id="headingStyle" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="setext">Setext (underlined)</option>
                  <option value="atx">ATX (#)</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bullet List Marker</label>
                <select id="bulletListMarker" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="*">*</option>
                  <option value="-">-</option>
                  <option value="+">+</option>
                </select>
              </div>
              <div class="flex gap-2 lg:justify-end flex-col lg:flex-row w-full">
                <button class="sample-html w-full lg:w-auto min-w-[140px] px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-lg text-sm font-medium text-blue-700 transition-colors flex items-center justify-center gap-2">
                  <i data-lucide="file-text" class="w-4 h-4"></i>
                  Simple HTML
                </button>
                <button class="sample-html w-full lg:w-auto min-w-[140px] px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-lg text-sm font-medium text-purple-700 transition-colors flex items-center justify-center gap-2">
                  <i data-lucide="file-code" class="w-4 h-4"></i>
                  Complex HTML
                </button>
              </div>
            </div>
            <!-- Input/Output Area -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Left Column: Input -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold flex items-center gap-2">
                    <i data-lucide="file-input" class="w-5 h-5 text-blue-600"></i>
                    Input HTML
                  </h3>
                  <div class="flex gap-2">
                    <button id="clearInput" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      <i data-lucide="trash-2" class="w-4 h-4"></i>
                      Clear
                    </button>
                  </div>
                </div>
                <div class="relative">
                  <textarea id="htmlInput" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Paste your HTML here..."></textarea>
                </div>
                <div id="errorMessageMobile" class="hidden lg:hidden p-4 bg-red-50 text-red-700 rounded-lg text-sm"></div>
              </div>
              <!-- Right Column: Output (Desktop) -->
              <div class="space-y-4 hidden lg:block">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold flex items-center gap-2">
                    <i data-lucide="file-output" class="w-5 h-5 text-green-600"></i>
                    Markdown Output
                  </h3>
                  <div class="flex gap-2">
                    <button id="copyOutput" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      <i data-lucide="copy" class="w-4 h-4"></i>
                      Copy
                    </button>
                  </div>
                </div>
                <div class="relative">
                  <pre id="markdownOutput" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm overflow-auto bg-gray-50"></pre>
                </div>
              </div>
            </div>
            <div id="errorMessage" class="hidden p-4 bg-red-50 text-red-700 rounded-lg text-sm w-full mt-4 mx-auto"></div>
            <!-- Action Buttons (Mobile) -->
            <div class="flex gap-4 lg:hidden">
              <button id="convertBtnMobile" class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                <i data-lucide="wand-2" class="w-4 h-4"></i>
                Convert
              </button>
            </div>
            <!-- Output Area (Mobile) -->
            <div class="space-y-4 lg:hidden">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  <i data-lucide="file-output" class="w-5 h-5 text-green-600"></i>
                  Markdown Output
                </h3>
                <div class="flex gap-2">
                  <button id="copyOutputMobile" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                    Copy
                  </button>
                </div>
              </div>
              <div class="relative">
                <pre id="markdownOutputMobile" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm overflow-auto bg-gray-50"></pre>
              </div>
            </div>
            <!-- Action Buttons (Desktop) -->
            <div class="hidden lg:flex gap-4 justify-center">
              <button id="convertBtn" class="w-48 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                <i data-lucide="wand-2" class="w-4 h-4"></i>
                Convert
              </button>
            </div>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();
    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('HTML_TO_MARKDOWN_CONVERTER_DATA');
    });
    // Elements
    const htmlInput = document.getElementById('htmlInput');
    const markdownOutput = document.getElementById('markdownOutput');
    const markdownOutputMobile = document.getElementById('markdownOutputMobile');
    const convertBtn = document.getElementById('convertBtn');
    const convertBtnMobile = document.getElementById('convertBtnMobile');
    const clearInput = document.getElementById('clearInput');
    const copyOutput = document.getElementById('copyOutput');
    const copyOutputMobile = document.getElementById('copyOutputMobile');
    const errorMessage = document.getElementById('errorMessage');
    const errorMessageMobile = document.getElementById('errorMessageMobile');
    const headingStyle = document.getElementById('headingStyle');
    const bulletListMarker = document.getElementById('bulletListMarker');
    const codeBlockStyle = document.getElementById('codeBlockStyle');
    const emDelimiter = document.getElementById('emDelimiter');
    const linkStyle = document.getElementById('linkStyle');
    const sampleHtmlButtons = document.querySelectorAll('.sample-html');
    // Sample HTML data
    const sampleHtml = {
      simple: `<h1>Hello World</h1>\n<p>This is a <strong>simple</strong> HTML example.</p>`,
      complex: `<div>\n  <h2>Features</h2>\n  <ul>\n    <li><a href=\"#\">Fast</a></li>\n    <li><em>Flexible</em></li>\n    <li><strong>Powerful</strong></li>\n  </ul>\n  <pre><code>console.log('Code block!');</code></pre>\n  <blockquote>\n    <p>Blockquote example.</p>\n  </blockquote>\n</div>`
    };
    // Convert HTML to Markdown
    function convertHTML() {
      errorMessage.classList.add('hidden');
      errorMessageMobile.classList.add('hidden');
      try {
        const options = {
          headingStyle: headingStyle.value,
          bulletListMarker: bulletListMarker.value,
          codeBlockStyle: codeBlockStyle.value,
          emDelimiter: emDelimiter.value,
          strongDelimiter: '**',
          linkStyle: linkStyle.value,
        };
        const turndownService = new TurndownService(options);
        const html = htmlInput.value;
        const markdown = turndownService.turndown(html);
        markdownOutput.textContent = markdown;
        markdownOutputMobile.textContent = markdown;
        errorMessage.classList.add('hidden');
        errorMessageMobile.classList.add('hidden');
        // Auto scroll to output on mobile
        if (window.innerWidth < 1024) {
          const outputSection = markdownOutputMobile.parentElement.parentElement;
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
    convertBtn && convertBtn.addEventListener('click', convertHTML);
    convertBtnMobile && convertBtnMobile.addEventListener('click', convertHTML);
    clearInput.addEventListener('click', () => {
      htmlInput.value = '';
      markdownOutput.textContent = '';
      markdownOutputMobile.textContent = '';
      errorMessage.classList.add('hidden');
      errorMessageMobile.classList.add('hidden');
    });
    copyOutput.addEventListener('click', () => {
      const text = markdownOutput.textContent;
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
      const text = markdownOutputMobile.textContent;
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
    sampleHtmlButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const sample = index === 0 ? sampleHtml.simple : sampleHtml.complex;
        htmlInput.value = sample;
        convertHTML();
      });
    });
    htmlInput.addEventListener('input', () => {
      markdownOutput.textContent = '';
      markdownOutputMobile.textContent = '';
      errorMessage.classList.add('hidden');
      errorMessageMobile.classList.add('hidden');
    });
  </script>
{{< /rawhtml >}}
