---
id: "image-to-base64"
title: "Image to Base64 Converter - Free Online Tool | CSRGO"
name: "Convert Image to Base64"
description: "Convert images to Base64 string"
url: "/tools/convert-image-to-base64/"
category: "image-tools"
icon: "file-code"
color: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
keywords:
  - "convert image to base64"
  - "convert image to base64 online"
  - "free convert image to base64"
hero:
  icon: "file-code"
  iconBg: "gradient-bg"
  title: "Image to Base64 Converter"
  subtitle: "Convert your images to Base64 format online. Free tool for encoding images to Base64 strings."
  features:
    - icon: "shield"
      color: "text-green-500"
      label: "Secure Conversion"
    - icon: "sliders"
      color: "text-purple-500"
      label: "Format Options"
    - icon: "globe"
      color: "text-blue-500"
      label: "Browser-based"
whatIs:
  title: "What is Image to Base64 Converter?"
  content: "The Image to Base64 Converter is a free online tool that allows you to convert your images into Base64 encoded strings. Base64 encoding is a way to represent binary data (like images) in an ASCII string format, making it easy to embed images directly in HTML, CSS, or JSON files.<br><br><strong>Conversion options:</strong> You can choose the output format (JPEG, PNG, or WebP), adjust quality settings for lossy formats, and get the Base64 string instantly. The tool also provides options to copy the Base64 string to clipboard or download it as a text file. All processing is done in your browser for privacy and speed."
whyUse:
  title: "Why Use Image to Base64 Converter?"
  items:
    - icon: "code"
      title: "Easy Integration"
      desc: "Embed images directly in your code without needing separate image files."
    - icon: "sliders"
      title: "Format Control"
      desc: "Choose between JPEG, PNG, and WebP formats with quality control for optimal results."
    - icon: "clipboard"
      title: "Quick Copy"
      desc: "One-click copy functionality to easily use the Base64 string in your projects."
    - icon: "shield"
      title: "Privacy First"
      desc: "All conversion happens in your browser. Your images are never uploaded to our servers."
howToUse:
  title: "How to Use Image to Base64 Converter"
  steps:
    - icon: "upload"
      title: "Upload Your Image"
      desc: "Click the upload area or drag and drop your image file into the designated zone."
    - icon: "settings"
      title: "Set Conversion Options"
      desc: "Choose your desired output format (JPEG, PNG, or WebP) and adjust quality if needed."
    - icon: "code"
      title: "Get Base64 String"
      desc: "Click \"Convert to Base64\" to generate the encoded string. Copy or download the result."
features:
  - "Convert images to Base64 from multiple formats"
  - "Choose output format (JPEG, PNG, WebP)"
  - "Adjust quality settings for lossy formats"
  - "One-click copy to clipboard"
  - "Download Base64 string as text file"
  - "Real-time preview of original image"
  - "Drag and drop image upload"
  - "All processing done in your browser"
faq:
  - q: "What is Base64 encoding?"
    a: "Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It's commonly used to embed images in HTML, CSS, or JSON files."
  - q: "What image formats are supported?"
    a: "You can convert images from any common format (JPG, PNG, WebP, GIF, etc.) and output them as Base64 encoded JPEG, PNG, or WebP."
  - q: "Why would I need to convert images to Base64?"
    a: "Base64 encoding is useful for embedding images directly in code, reducing HTTP requests, and including images in JSON data or CSS files."
  - q: "Is there a file size limit?"
    a: "No, there are no file size limitations. However, very large images might take longer to process."
  - q: "Are my images secure?"
    a: "Yes, all conversion is done locally in your browser. Your images are never uploaded to our servers."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <!-- Upload Area -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 mb-6">
          <div id="dropZone" class="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-blue-500 transition-colors">
            <div class="flex flex-col items-center gap-4">
              <div class="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                <i data-lucide="upload" class="w-8 h-8 text-blue-500"></i>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Drop your image here</h3>
                <p class="text-gray-500 mt-1">or click to browse</p>
              </div>
              <input type="file" id="fileInput" accept="image/*" class="hidden">
            </div>
          </div>
        </div>

        <!-- Preview and Options Area -->
        <div id="previewArea" class="bg-white rounded-2xl shadow-sm p-6 mb-6 hidden">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Original Image -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Original Image</h3>
              <div class="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <img id="originalImage" class="w-full h-full object-contain" alt="Original image">
              </div>
            </div>
            <!-- Conversion Options -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Conversion Options</h3>
              <div class="space-y-6">
                <!-- Format Selection -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Output Format</label>
                  <select id="outputFormat" class="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <option value="image/jpeg">JPEG</option>
                    <option value="image/png">PNG</option>
                    <option value="image/webp">WebP</option>
                  </select>
                </div>
                <!-- Quality Slider (for JPEG and WebP) -->
                <div id="qualityContainer">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Quality</label>
                  <div class="flex items-center gap-4">
                    <input type="range" id="quality" min="0" max="100" value="90" class="w-full">
                    <span id="qualityValue" class="text-sm font-medium text-gray-600">90%</span>
                  </div>
                </div>
                <!-- Action Buttons -->
                <div class="flex flex-wrap gap-4">
                  <button id="convertBtn" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <i data-lucide="code" class="w-5 h-5 inline-block mr-2"></i>
                    Convert to Base64
                  </button>
                  <button id="clearBtn" class="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    <i data-lucide="x" class="w-5 h-5 inline-block mr-2"></i>
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Base64 Result -->
        <div id="resultArea" class="bg-white rounded-2xl shadow-sm p-6 mb-6 hidden">
          <h3 class="text-lg font-semibold mb-4">Base64 Result</h3>
          <div class="relative">
            <textarea id="base64Result" class="w-full h-48 p-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-blue-500 font-mono text-sm" readonly></textarea>
            <button id="copyBtn" class="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700">
              <i data-lucide="copy" class="w-5 h-5"></i>
            </button>
          </div>
          <div class="mt-4 flex justify-center">
            <button id="downloadBtn" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors flex items-center justify-center gap-2">
              <i data-lucide="download" class="w-5 h-5 inline-block mr-2"></i>
              Download Base64
            </button>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('CONVERT_IMAGE_TO_BASE64_DATA');
    });

    // Elements
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const originalImageEl = document.getElementById('originalImage');
    const previewArea = document.getElementById('previewArea');
    const outputFormat = document.getElementById('outputFormat');
    const quality = document.getElementById('quality');
    const qualityValue = document.getElementById('qualityValue');
    const qualityContainer = document.getElementById('qualityContainer');
    const convertBtn = document.getElementById('convertBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultArea = document.getElementById('resultArea');
    const base64Result = document.getElementById('base64Result');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    let originalImage = null;

    // Handle file selection
    function handleFileSelect(file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        originalImage = e.target.result;
        originalImageEl.src = originalImage;
        previewArea.classList.remove('hidden');
        convertBtn.classList.remove('hidden');
        clearBtn.classList.remove('hidden');

        // Scroll to preview area
        previewArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      reader.readAsDataURL(file);
    }

    // Event Listeners
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('border-blue-500');
    });
    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('border-blue-500');
    });
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('border-blue-500');
      const file = e.dataTransfer.files[0];
      if (file) handleFileSelect(file);
    });
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) handleFileSelect(file);
    });

    // Format change handler
    outputFormat.addEventListener('change', () => {
      const format = outputFormat.value;
      if (format === 'image/png') {
        qualityContainer.classList.add('hidden');
      } else {
        qualityContainer.classList.remove('hidden');
      }
    });

    // Quality slider handler
    quality.addEventListener('input', () => {
      qualityValue.textContent = `${quality.value}%`;
    });

    // Convert button
    convertBtn.addEventListener('click', () => {
      if (!originalImage) return;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        const format = outputFormat.value;
        const qualityValue = format === 'image/png' ? undefined : parseInt(quality.value) / 100;
        
        const base64 = canvas.toDataURL(format, qualityValue);
        base64Result.value = base64;
        resultArea.classList.remove('hidden');
        resultArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      
      img.src = originalImage;
    });

    // Copy button
    copyBtn.addEventListener('click', () => {
      base64Result.select();
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

    // Download button
    downloadBtn.addEventListener('click', () => {
      const base64 = base64Result.value;
      if (!base64) return;
      
      const link = document.createElement('a');
      link.download = 'image-base64.txt';
      link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(base64);
      link.click();
    });

    // Clear button
    clearBtn.addEventListener('click', () => {
      originalImage = null;
      originalImageEl.src = '';
      previewArea.classList.add('hidden');
      resultArea.classList.add('hidden');
      convertBtn.classList.add('hidden');
      clearBtn.classList.add('hidden');
      fileInput.value = '';
      base64Result.value = '';
    });
  </script>
{{< /rawhtml >}}
