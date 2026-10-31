---
id: "url-encoder"
title: "URL Encoder & Decoder - Free Online Tool | CSRGO Tools"
name: "URL Encoder & Decoder"
description: "Encode or decode URLs"
url: "/tools/url-encoder-decoder/"
category: "text-tools"
icon: "link"
color: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
keywords:
  - "url encoder & decoder"
  - "url encoder & decoder online"
  - "free url encoder & decoder"
hero:
  icon: "link"
  iconBg: "gradient-bg"
  title: "URL Encoder & Decoder"
  subtitle: "Encode or decode URLs with special characters and symbols"
  features:
    - icon: "shield"
      color: "text-green-500"
      label: "Secure Processing"
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Results"
    - icon: "globe"
      color: "text-blue-500"
      label: "Browser-based"
whatIs:
  title: "What is URL Encoder & Decoder?"
  content: "The URL Encoder & Decoder is a free online tool that allows you to encode or decode URLs containing special characters and symbols. URL encoding is essential when working with web applications, as it ensures that special characters in URLs are properly transmitted and interpreted by browsers and servers.<br><br><strong>Key features:</strong> The tool provides instant encoding and decoding of URLs, supports all special characters, and includes options to copy or download the results. It's particularly useful for web developers, SEO specialists, and anyone working with URLs that contain non-ASCII characters or special symbols."
whyUse:
  title: "Why Use URL Encoder & Decoder?"
  items:
    - icon: "shield"
      title: "Web Compatibility"
      desc: "Ensure your URLs work correctly across all browsers and platforms by properly encoding special characters."
    - icon: "link"
      title: "URL Safety"
      desc: "Prevent URL parsing errors and ensure proper transmission of special characters in your web applications."
    - icon: "globe"
      title: "International Support"
      desc: "Handle URLs containing non-ASCII characters and international symbols with ease."
    - icon: "zap"
      title: "Instant Processing"
      desc: "Get immediate results with our browser-based processing, no server requests needed."
howToUse:
  title: "How to Use URL Encoder & Decoder"
  steps:
    - icon: "edit"
      title: "Enter Your URL"
      desc: "Type or paste your URL or text into the input field."
    - icon: "arrow-right"
      title: "Choose Action"
      desc: "Click \"Encode URL\" to convert special characters to URL-safe format, or \"Decode URL\" to convert encoded characters back to their original form."
    - icon: "copy"
      title: "Get Results"
      desc: "Copy the result to clipboard or download it as a text file."
features:
  - "Encode URLs with special characters and symbols"
  - "Decode encoded URLs back to their original form"
  - "Support for all URL-safe characters and international symbols"
  - "Instant processing with no server requests"
  - "Copy to clipboard functionality"
  - "Download results as text file"
  - "Clear and intuitive user interface"
  - "Mobile-responsive design"
faq:
  - q: "What is URL encoding?"
    a: "URL encoding is the process of converting special characters in a URL into a format that can be safely transmitted over the internet. It replaces unsafe ASCII characters with a \"%\" followed by two hexadecimal digits."
  - q: "When should I use URL encoding?"
    a: "You should use URL encoding when your URLs contain special characters, spaces, or non-ASCII characters. This is common in web applications, query parameters, and international URLs."
  - q: "Is this tool secure?"
    a: "Yes, all processing is done locally in your browser. Your URLs are never sent to any server, ensuring complete privacy and security."
  - q: "Can I encode/decode multiple URLs at once?"
    a: "Yes, you can paste multiple URLs or text into the input field, and the tool will process them all at once."
  - q: "What characters are encoded?"
    a: "The tool encodes all non-ASCII characters and special characters like spaces, &, ?, =, #, and other characters that have special meaning in URLs."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-6">
            <!-- Input Area -->
            <div class="space-y-4">
              <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Input Text</label>
                  <textarea id="inputText" rows="4" class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter text to encode or decode..."></textarea>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-4">
                <button id="encodeBtn" class="flex-1 min-w-[140px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap">
                  <i data-lucide="arrow-right" class="w-5 h-5 flex-shrink-0"></i>
                  <span>Encode URL</span>
                </button>
                <button id="decodeBtn" class="flex-1 min-w-[140px] bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap">
                  <i data-lucide="arrow-left" class="w-5 h-5 flex-shrink-0"></i>
                  <span>Decode URL</span>
                </button>
                <button id="clearBtn" class="flex-1 min-w-[140px] bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-3 rounded-xl font-medium hover:from-gray-700 hover:to-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap">
                  <i data-lucide="trash-2" class="w-5 h-5 flex-shrink-0"></i>
                  <span>Clear</span>
                </button>
              </div>
            </div>

            <!-- Output Area -->
            <div id="outputArea" class="hidden">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Result</label>
                  <div class="relative">
                    <textarea id="outputText" rows="4" class="w-full border rounded-lg px-3 py-2 bg-gray-50" readonly></textarea>
                    <button id="copyBtn" class="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors">
                      <i data-lucide="copy" class="w-5 h-5"></i>
                    </button>
                  </div>
                </div>
                <div class="flex justify-center">
                  <button id="downloadBtn" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg">
                    <i data-lucide="download" class="w-5 h-5"></i>
                    Download Result
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();
    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('URL_ENCODER_DECODER_DATA');
    });

    // URL Encoder/Decoder functionality
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encodeBtn = document.getElementById('encodeBtn');
    const decodeBtn = document.getElementById('decodeBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const outputArea = document.getElementById('outputArea');

    // Encode URL
    encodeBtn.addEventListener('click', () => {
      if (!inputText.value.trim()) return;
      try {
        const encoded = encodeURIComponent(inputText.value);
        outputText.value = encoded;
        outputArea.classList.remove('hidden');
        // Scroll to output
        outputArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch (error) {
        alert('Error encoding URL: ' + error.message);
      }
    });

    // Decode URL
    decodeBtn.addEventListener('click', () => {
      if (!inputText.value.trim()) return;
      try {
        const decoded = decodeURIComponent(inputText.value);
        outputText.value = decoded;
        outputArea.classList.remove('hidden');
        // Scroll to output
        outputArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch (error) {
        alert('Error decoding URL: ' + error.message);
      }
    });

    // Clear all
    clearBtn.addEventListener('click', () => {
      inputText.value = '';
      outputText.value = '';
      outputArea.classList.add('hidden');
    });

    // Copy to clipboard
    copyBtn.addEventListener('click', () => {
      outputText.select();
      document.execCommand('copy');
      // Visual feedback
      const originalIcon = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i>';
      lucide.createIcons();
      setTimeout(() => {
        copyBtn.innerHTML = originalIcon;
        lucide.createIcons();
      }, 2000);
    });

    // Download result
    downloadBtn.addEventListener('click', () => {
      if (!outputText.value) return;
      const blob = new Blob([outputText.value], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'url-encoded-decoded.txt';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
  </script>
{{< /rawhtml >}}
