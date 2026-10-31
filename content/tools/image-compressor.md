---
id: "image-compressor"
title: "Image Compressor - Free Online Tool | CSRGO Tools"
name: "Image Compressor"
description: "Compress images without losing quality"
url: "/tools/image-compressor/"
category: "image-tools"
icon: "image-upscale"
color: "bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"
keywords:
  - "image compressor"
  - "image compressor online"
  - "free image compressor"
hero:
  icon: "image-upscale"
  iconBg: "gradient-bg"
  title: "Image Compressor"
  subtitle: "Compress your images without losing quality. Reduce file size while maintaining visual clarity."
  features:
    - icon: "shield"
      color: "text-green-500"
      label: "Secure Compression"
    - icon: "sliders"
      color: "text-purple-500"
      label: "Quality Control"
    - icon: "globe"
      color: "text-blue-500"
      label: "Browser-based"
whatIs:
  title: "What is Image Compressor?"
  content: "The Image Compressor is a free online tool that helps you reduce the file size of your images while maintaining acceptable quality. It's perfect for optimizing images for web use, email attachments, or storage purposes.<br><br><strong>Compression options:</strong> You can control the compression level using the quality slider, resize the image dimensions, choose the output format (JPEG, PNG, or WebP), and maintain aspect ratio. The tool shows you the compression ratio and file size savings in real-time, helping you find the perfect balance between quality and file size."
whyUse:
  title: "Why Use Image Compressor?"
  items:
    - icon: "shield"
      title: "Optimize File Size"
      desc: "Reduce image file sizes without significant quality loss, perfect for web optimization and faster loading times."
    - icon: "sliders"
      title: "Quality Control"
      desc: "Fine-tune compression settings to find the perfect balance between file size and image quality."
    - icon: "scaling"
      title: "Resize & Format"
      desc: "Resize images to specific dimensions and convert to different formats (JPEG, PNG, WebP) in one step."
    - icon: "chart-bar"
      title: "Real-time Stats"
      desc: "See compression ratio and file size savings instantly to make informed decisions."
howToUse:
  title: "How to Use Image Compressor"
  steps:
    - icon: "upload"
      title: "Upload Your Image"
      desc: "Click the upload area or drag and drop your image file into the designated zone."
    - icon: "settings"
      title: "Adjust Settings"
      desc: "Set your desired quality level, dimensions, and output format. Preview the compression results in real-time."
    - icon: "download"
      title: "Download Compressed Image"
      desc: "Review the compression stats and download your optimized image with one click."
features:
  - "Compress images while maintaining acceptable quality"
  - "Adjust compression level with quality slider"
  - "Resize images to specific dimensions"
  - "Choose output format (JPEG, PNG, WebP)"
  - "Maintain aspect ratio while resizing"
  - "Real-time compression statistics"
  - "Instant preview and one-click download"
  - "All processing is done in your browser for privacy and security"
faq:
  - q: "What image formats are supported?"
    a: "You can compress images in various formats including JPG, PNG, WebP, GIF, and more."
  - q: "Will compression affect image quality?"
    a: "The tool allows you to control the compression level. Higher quality settings maintain more detail but result in larger file sizes."
  - q: "Can I resize images while compressing?"
    a: "Yes, you can set custom dimensions and maintain aspect ratio while compressing your images."
  - q: "What output formats are available?"
    a: "You can save compressed images in JPEG, PNG, or WebP format, depending on your needs."
  - q: "Is my image data secure?"
    a: "Yes, all compression is done locally in your browser. Your images are never uploaded to our servers."
---

{{< rawhtml >}}
<!-- Image Compressor Section -->
    <!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-8">
            <!-- Upload Area -->
            <div id="dropZone" class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-500 transition-colors">
              <div class="space-y-4">
                <div class="flex justify-center">
                  <div class="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                    <i data-lucide="upload" class="w-8 h-8 text-blue-600"></i>
                  </div>
                </div>
                <div>
                  <p class="text-lg font-medium text-gray-700">Drag and drop your image here</p>
                  <p class="text-sm text-gray-500 mt-1">or click to browse files</p>
                </div>
                <input type="file" id="fileInput" class="hidden" accept="image/*">
              </div>
            </div>

            <!-- Preview Area -->
            <div id="previewArea" class="hidden">
              <div class="flex flex-col md:flex-row gap-6">
                <div class="flex-1" id="originalImageSection">
                  <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
                    <i data-lucide="image" class="w-5 h-5 text-blue-600"></i>
                    Original Image
                  </h3>
                  <div class="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                    <img id="originalPreview" class="w-full h-full object-contain" alt="Original image preview">
                  </div>
                  <div class="mt-2 text-sm text-gray-600" id="originalInfo"></div>
                </div>
                <div class="flex-1 flex flex-col gap-4">
                  <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
                    <i data-lucide="settings" class="w-5 h-5 text-indigo-600"></i>
                    Compression Options
                  </h3>
                  <form id="compressionOptions" class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Quality</label>
                      <div class="flex items-center gap-4">
                        <input type="range" id="quality" min="1" max="100" value="80" class="flex-1">
                        <span id="qualityValue" class="text-sm text-gray-600 w-12 text-right">80%</span>
                      </div>
                    </div>

                    <div class="flex gap-4">
                      <div class="flex-1">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Max Width (px)</label>
                        <input type="number" id="maxWidth" class="w-full border rounded-lg px-3 py-2" min="1" placeholder="Original">
                      </div>
                      <div class="flex-1">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Max Height (px)</label>
                        <input type="number" id="maxHeight" class="w-full border rounded-lg px-3 py-2" min="1" placeholder="Original">
                      </div>
                    </div>

                    <div class="flex items-center gap-2">
                      <input type="checkbox" id="maintainAspect" class="rounded text-blue-600" checked>
                      <label for="maintainAspect" class="text-sm text-gray-600">Maintain aspect ratio</label>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Output Format</label>
                      <select id="outputFormat" class="w-full border rounded-lg px-3 py-2">
                        <option value="jpeg">JPEG</option>
                        <option value="png">PNG</option>
                        <option value="webp">WebP</option>
                      </select>
                    </div>

                    <button type="button" id="compressBtn" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg mt-2">
                      <i data-lucide="image-upscale" class="w-5 h-5"></i>
                      Compress Image
                    </button>
                  </form>
                </div>
              </div>
              <div id="compressedResult" class="hidden mt-8">
                <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
                  <i data-lucide="image" class="w-5 h-5 text-green-600"></i>
                  Compressed Image Preview
                </h3>
                <div class="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-sm mb-6" id="compressedPreviewSection">
                  <img id="compressedPreview" class="w-full h-full object-contain" alt="Compressed image preview">
                </div>
                <div class="flex justify-center gap-4">
                  <button id="downloadBtn" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg">
                    <i data-lucide="download" class="w-5 h-5"></i>
                    Download Compressed Image
                  </button>
                  <button id="clearBtn" class="bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-gray-300 transition-all flex items-center gap-2">
                    <i data-lucide="x" class="w-5 h-5"></i>
                    Clear
                  </button>
                </div>
                <div class="mt-4 text-center text-sm text-gray-600" id="compressionInfo"></div>
              </div>
            </div>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('IMAGE_COMPRESSOR_DATA');
    });

    // Image Compressor Logic
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const previewArea = document.getElementById('previewArea');
    const originalPreview = document.getElementById('originalPreview');
    const originalInfo = document.getElementById('originalInfo');
    const compressBtn = document.getElementById('compressBtn');
    const compressedResult = document.getElementById('compressedResult');
    const compressedPreview = document.getElementById('compressedPreview');
    const compressionInfo = document.getElementById('compressionInfo');
    const downloadBtn = document.getElementById('downloadBtn');
    const clearBtn = document.getElementById('clearBtn');
    const quality = document.getElementById('quality');
    const qualityValue = document.getElementById('qualityValue');
    const maxWidth = document.getElementById('maxWidth');
    const maxHeight = document.getElementById('maxHeight');
    const maintainAspect = document.getElementById('maintainAspect');
    const outputFormat = document.getElementById('outputFormat');

    let originalImage = null;
    let originalWidth = 0;
    let originalHeight = 0;
    let originalSize = 0;

    // Format file size
    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Drag and drop events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, () => dropZone.classList.add('drop-zone-active'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, () => dropZone.classList.remove('drop-zone-active'), false);
    });

    dropZone.addEventListener('drop', handleDrop, false);
    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);

    function handleDrop(e) {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleFiles(files);
    }

    function handleFileSelect(e) {
      const files = e.target.files;
      handleFiles(files);
    }

    function handleFiles(files) {
      if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
          originalSize = file.size;
          const reader = new FileReader();
          reader.onload = function(e) {
            originalPreview.src = e.target.result;
            previewArea.classList.remove('hidden');
            compressedResult.classList.add('hidden');
            
            // Load image for compression
            originalImage = new Image();
            originalImage.onload = function() {
              originalWidth = originalImage.width;
              originalHeight = originalImage.height;
              
              // Set max dimensions
              maxWidth.value = originalWidth;
              maxHeight.value = originalHeight;
              
              // Update original image info
              originalInfo.textContent = `Dimensions: ${originalWidth}x${originalHeight}px | Size: ${formatFileSize(originalSize)}`;
            };
            originalImage.src = e.target.result;
            // Scroll to original image section
            setTimeout(() => {
              document.getElementById('originalImageSection').scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
          };
          reader.readAsDataURL(file);
        }
      }
    }

    // Quality slider
    quality.addEventListener('input', () => {
      qualityValue.textContent = quality.value + '%';
    });

    // Maintain aspect ratio
    maintainAspect.addEventListener('change', () => {
      if (maintainAspect.checked) {
        const aspectRatio = originalWidth / originalHeight;
        if (maxWidth.value) {
          maxHeight.value = Math.round(maxWidth.value / aspectRatio);
        } else if (maxHeight.value) {
          maxWidth.value = Math.round(maxHeight.value * aspectRatio);
        }
      }
    });

    maxWidth.addEventListener('input', () => {
      if (maintainAspect.checked && maxWidth.value) {
        const aspectRatio = originalWidth / originalHeight;
        maxHeight.value = Math.round(maxWidth.value / aspectRatio);
      }
    });

    maxHeight.addEventListener('input', () => {
      if (maintainAspect.checked && maxHeight.value) {
        const aspectRatio = originalWidth / originalHeight;
        maxWidth.value = Math.round(maxHeight.value * aspectRatio);
      }
    });

    // Compress image
    compressBtn.addEventListener('click', () => {
      if (!originalImage) {
        console.error('No image loaded');
        return;
      }

      try {
        // Calculate target dimensions
        let targetWidth = parseInt(maxWidth.value) || originalWidth;
        let targetHeight = parseInt(maxHeight.value) || originalHeight;

        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');

        // Fill with white background for JPEG
        if (outputFormat.value === 'jpeg') {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Draw image
        ctx.drawImage(originalImage, 0, 0, targetWidth, targetHeight);

        // Convert to selected format
        const mimeType = `image/${outputFormat.value}`;
        const qualityValue = parseInt(quality.value) / 100;
        const compressedData = canvas.toDataURL(mimeType, qualityValue);

        // Update preview
        compressedPreview.src = compressedData;
        compressedResult.classList.remove('hidden');

        // Calculate compression info
        const base64str = compressedData.split(',')[1];
        const compressedSize = Math.round((base64str.length * 3) / 4);
        const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
        
        compressionInfo.innerHTML = `
          <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div class="text-left">
              <div class="text-gray-500">Original Size:</div>
              <div class="font-medium">${formatFileSize(originalSize)}</div>
            </div>
            <div class="text-left">
              <div class="text-gray-500">Compressed Size:</div>
              <div class="font-medium">${formatFileSize(compressedSize)}</div>
            </div>
            <div class="text-left">
              <div class="text-gray-500">Compression Ratio:</div>
              <div class="font-medium text-green-600">${compressionRatio}%</div>
            </div>
            <div class="text-left">
              <div class="text-gray-500">New Dimensions:</div>
              <div class="font-medium">${targetWidth}x${targetHeight}px</div>
            </div>
          </div>
        `;

        // Scroll to compressed result section
        setTimeout(() => {
          compressedResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      } catch (error) {
        console.error('Compression error:', error);
        alert('Error compressing image. Please try again.');
      }
    });

    // Download
    downloadBtn.addEventListener('click', () => {
      const link = document.createElement('a');
      const extension = outputFormat.value;
      link.download = `compressed-image.${extension}`;
      link.href = compressedPreview.src;
      link.click();
    });

    // Clear
    clearBtn.addEventListener('click', () => {
      fileInput.value = '';
      previewArea.classList.add('hidden');
      compressedResult.classList.add('hidden');
      originalPreview.src = '';
      compressedPreview.src = '';
      originalImage = null;
      maxWidth.value = '';
      maxHeight.value = '';
      quality.value = 80;
      qualityValue.textContent = '80%';
      originalInfo.textContent = '';
      compressionInfo.textContent = '';
    });
  </script>
{{< /rawhtml >}}
