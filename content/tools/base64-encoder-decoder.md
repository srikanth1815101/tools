---
id: "base64-encoder"
title: "Base64 Encoder & Decoder - Free Online Tool | CSRGO Tools"
name: "Base64 Encoder & Decoder"
description: "Encode or decode Base64"
url: "/tools/base64-encoder-decoder/"
category: "developer-tools"
icon: "file-code"
color: "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
keywords:
  - "base64 encoder & decoder"
  - "base64 encoder & decoder online"
  - "free base64 encoder & decoder"
hero:
  icon: "file-code"
  iconBg: "gradient-bg"
  title: "Base64 Encoder & Decoder"
  subtitle: "Encode or decode Base64 text instantly and securely online"
  features:
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Conversion"
    - icon: "copy"
      color: "text-blue-500"
      label: "One-Click Copy"
    - icon: "shield"
      color: "text-green-500"
      label: "Privacy-First"
whatIs:
  title: "What is Base64 Encoder & Decoder?"
  content: "The Base64 Encoder & Decoder is a free online tool that lets you encode text or files to Base64 and decode Base64 back to text. Base64 is a common encoding for safely transmitting data as text, especially in web and email applications."
whyUse:
  title: "Why Use Base64 Encoder & Decoder?"
  items:
    - icon: "check-circle"
      title: "Fast & Easy"
      desc: "Encode or decode Base64 in real time with a single click."
    - icon: "settings"
      title: "Customizable"
      desc: "Choose encoding (UTF-8 or ASCII) for compatibility."
    - icon: "lock"
      title: "Privacy-First"
      desc: "All processing is done in your browser. Your data never leaves your device."
    - icon: "smartphone"
      title: "Mobile Friendly"
      desc: "Works beautifully on all devices, including phones and tablets."
howToUse:
  title: "How to Use Base64 Encoder & Decoder"
  steps:
    - icon: "file-input"
      title: "Input"
      desc: "Paste your text or Base64 string into the input area."
    - icon: "settings"
      title: "Choose Mode"
      desc: "Select Encode or Decode, and pick your character encoding."
    - icon: "wand-2"
      title: "Convert"
      desc: "Conversion happens instantly as you type or paste."
    - icon: "copy"
      title: "Copy Output"
      desc: "Copy the result with one click for use anywhere."
features:
  - "Encode text to Base64 or decode Base64 to text"
  - "Supports UTF-8 and ASCII encodings"
  - "Instant conversion as you type"
  - "One-click copy and clear buttons"
  - "Sample text for quick testing"
  - "Responsive design for desktop and mobile"
  - "All processing done in your browser for privacy"
faq:
  - q: "What is Base64 encoding?"
    a: "Base64 encoding converts binary data into a text string using only ASCII characters. It is commonly used for data transmission in web and email applications."
  - q: "Is my data secure?"
    a: "Yes, all encoding and decoding is done locally in your browser. Your data is never uploaded or stored."
  - q: "What encodings are supported?"
    a: "You can choose between UTF-8 and ASCII for maximum compatibility."
  - q: "Can I use this tool on my phone or tablet?"
    a: "Yes! The tool is fully responsive and works on all modern devices."
  - q: "Does this tool support files?"
    a: "This tool is for text only. For files, use a dedicated Base64 file encoder/decoder."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover flex flex-col gap-8">
          <!-- Options -->
          <div class="flex flex-col md:flex-row md:items-end gap-4 mb-2">
            <div class="flex-1 flex flex-col gap-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Mode</label>
              <select id="mode" class="w-full border rounded-lg px-3 py-2 bg-white">
                <option value="encode">Encode (Text ? Base64)</option>
                <option value="decode">Decode (Base64 ? Text)</option>
              </select>
            </div>
            <div class="flex-1 flex flex-col gap-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Character Encoding</label>
              <select id="encoding" class="w-full border rounded-lg px-3 py-2 bg-white">
                <option value="utf-8">UTF-8</option>
                <option value="ascii">ASCII</option>
              </select>
            </div>
            <div class="flex flex-row gap-2 md:gap-2 md:justify-end w-full md:w-auto mt-2 md:mt-0">
              <button class="sample-btn w-full md:w-auto min-w-[140px] px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-lg text-sm font-medium text-blue-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                <i data-lucide="file-text" class="w-4 h-4"></i>
                Sample Text
              </button>
              <button id="clearBtn" class="w-full md:w-auto min-w-[100px] text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg bg-white items-center justify-center">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
                Clear
              </button>
            </div>
          </div>
          <!-- Input/Output Area -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Input -->
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  <i data-lucide="file-input" class="w-5 h-5 text-blue-600"></i>
                  <span id="inputLabel">Input Text</span>
                </h3>
                <button id="copyInput" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  <i data-lucide="copy" class="w-4 h-4"></i>
                  Copy
                </button>
              </div>
              <textarea id="inputArea" class="w-full h-[200px] md:h-[300px] p-4 border rounded-xl font-mono text-sm bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Paste your text or Base64 here..."></textarea>
              <div id="errorMessageInput" class="hidden p-2 bg-red-50 text-red-700 rounded-lg text-xs"></div>
            </div>
            <!-- Output -->
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  <i data-lucide="file-output" class="w-5 h-5 text-green-600"></i>
                  <span id="outputLabel">Base64 Output</span>
                </h3>
                <button id="copyOutput" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  <i data-lucide="copy" class="w-4 h-4"></i>
                  Copy
                </button>
              </div>
              <textarea id="outputArea" class="w-full h-[200px] md:h-[300px] p-4 border rounded-xl font-mono text-sm bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Output will appear here..." readonly></textarea>
              <div id="errorMessageOutput" class="hidden p-2 bg-red-50 text-red-700 rounded-lg text-xs"></div>
            </div>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();
    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('BASE64_ENCODER_DECODER_DATA');
    });
    // Elements
    const mode = document.getElementById('mode');
    const encoding = document.getElementById('encoding');
    const inputArea = document.getElementById('inputArea');
    const outputArea = document.getElementById('outputArea');
    const inputLabel = document.getElementById('inputLabel');
    const outputLabel = document.getElementById('outputLabel');
    const copyInput = document.getElementById('copyInput');
    const copyOutput = document.getElementById('copyOutput');
    const clearBtn = document.getElementById('clearBtn');
    const sampleBtn = document.querySelector('.sample-btn');
    const errorMessageInput = document.getElementById('errorMessageInput');
    const errorMessageOutput = document.getElementById('errorMessageOutput');
    // Sample text
    const sampleText = 'CSRGO Tools: Free online utilities!';
    // Encoding/decoding helpers
    function encodeBase64(str, enc) {
      try {
        if (enc === 'utf-8') {
          return btoa(unescape(encodeURIComponent(str)));
        } else {
          // ASCII
          return btoa(str);
        }
      } catch (e) {
        throw new Error('Input cannot be encoded as Base64.');
      }
    }
    function decodeBase64(str, enc) {
      try {
        if (enc === 'utf-8') {
          return decodeURIComponent(escape(atob(str)));
        } else {
          // ASCII
          return atob(str);
        }
      } catch (e) {
        throw new Error('Input is not valid Base64 or cannot be decoded.');
      }
    }
    // Main conversion logic
    function convert() {
      errorMessageInput.classList.add('hidden');
      errorMessageOutput.classList.add('hidden');
      try {
        if (mode.value === 'encode') {
          outputArea.value = encodeBase64(inputArea.value, encoding.value);
        } else {
          outputArea.value = decodeBase64(inputArea.value, encoding.value);
        }
      } catch (e) {
        if (mode.value === 'encode') {
          errorMessageInput.textContent = e.message;
          errorMessageInput.classList.remove('hidden');
        } else {
          errorMessageOutput.textContent = e.message;
          errorMessageOutput.classList.remove('hidden');
        }
        outputArea.value = '';
      }
    }
    // Event listeners
    mode.addEventListener('change', () => {
      if (mode.value === 'encode') {
        inputLabel.textContent = 'Input Text';
        outputLabel.textContent = 'Base64 Output';
        inputArea.placeholder = 'Paste your text here...';
        outputArea.placeholder = 'Base64 output will appear here...';
      } else {
        inputLabel.textContent = 'Input Base64';
        outputLabel.textContent = 'Decoded Output';
        inputArea.placeholder = 'Paste your Base64 here...';
        outputArea.placeholder = 'Decoded output will appear here...';
      }
      inputArea.value = '';
      outputArea.value = '';
      errorMessageInput.classList.add('hidden');
      errorMessageOutput.classList.add('hidden');
    });
    encoding.addEventListener('change', convert);
    inputArea.addEventListener('input', convert);
    sampleBtn.addEventListener('click', () => {
      inputArea.value = sampleText;
      convert();
    });
    clearBtn.addEventListener('click', () => {
      inputArea.value = '';
      outputArea.value = '';
      errorMessageInput.classList.add('hidden');
      errorMessageOutput.classList.add('hidden');
    });
    copyInput.addEventListener('click', () => {
      if (inputArea.value) {
        navigator.clipboard.writeText(inputArea.value);
        copyInput.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Copied!';
        lucide.createIcons();
        setTimeout(() => {
          copyInput.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i> Copy';
          lucide.createIcons();
        }, 1500);
      }
    });
    copyOutput.addEventListener('click', () => {
      if (outputArea.value) {
        navigator.clipboard.writeText(outputArea.value);
        copyOutput.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Copied!';
        lucide.createIcons();
        setTimeout(() => {
          copyOutput.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i> Copy';
          lucide.createIcons();
        }, 1500);
      }
    });
    // Initial render
    convert();
  </script>
{{< /rawhtml >}}
