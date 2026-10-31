---
id: "image-cropper"
title: "Image Cropper - Free Online Tool | CSRGO"
name: "Image Cropper"
description: "Crop images to desired size"
url: "/tools/image-cropper/"
category: "image-tools"
icon: "crop"
color: "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
keywords:
  - "image cropper"
  - "image cropper online"
  - "free image cropper"
hero:
  icon: "crop"
  iconBg: "gradient-bg"
  title: "Image Cropper"
  subtitle: "Crop your images with precision. Free online tool with aspect ratio control and custom dimensions."
  features:
    - icon: "ruler"
      color: "text-blue-500"
      label: "Custom Dimensions"
    - icon: "ratio"
      color: "text-purple-500"
      label: "Aspect Ratio Control"
    - icon: "globe"
      color: "text-green-500"
      label: "Browser-based"
whatIs:
  title: "What is Image Cropper?"
  content: "The Image Cropper is a free online tool that allows you to crop your images with precision and control. It's perfect for adjusting image compositions, creating profile pictures, or preparing images for social media.<br><br><strong>Crop options:</strong> You can crop images freely or maintain specific aspect ratios (1:1, 16:9, 9:16, 4:3, 3:4). Set custom dimensions in pixels, preview the cropped result in real-time, and download the cropped image instantly. All processing is done in your browser for privacy and speed."
whyUse:
  title: "Why Use Image Cropper?"
  items:
    - icon: "ruler"
      title: "Precise Control"
      desc: "Crop images with pixel-perfect precision using our intuitive cropping interface."
    - icon: "ratio"
      title: "Aspect Ratio Options"
      desc: "Choose from common aspect ratios or set custom dimensions for your specific needs."
    - icon: "eye"
      title: "Real-time Preview"
      desc: "See your cropped image instantly before downloading, ensuring perfect results."
    - icon: "shield"
      title: "Privacy First"
      desc: "All image processing happens in your browser. Your images are never uploaded to our servers."
howToUse:
  title: "How to Use Image Cropper"
  steps:
    - icon: "upload"
      title: "Upload Your Image"
      desc: "Click the upload area or drag and drop your image file into the designated zone."
    - icon: "settings"
      title: "Set Crop Options"
      desc: "Choose your desired aspect ratio or set custom dimensions. Use the cropping interface to adjust the crop area."
    - icon: "download"
      title: "Download Cropped Image"
      desc: "Preview your cropped image and download it instantly in PNG format."
features:
  - "Crop images with pixel-perfect precision"
  - "Choose from common aspect ratios (1:1, 16:9, 9:16, 4:3, 3:4)"
  - "Set custom dimensions in pixels"
  - "Real-time preview of cropped result"
  - "Drag and drop image upload"
  - "Instant download in PNG format"
  - "All processing done in your browser"
  - "No image quality loss"
faq:
  - q: "What image formats are supported?"
    a: "You can upload images in various formats including JPG, PNG, WebP, GIF, and more. The cropped output will be in PNG format."
  - q: "Can I set custom dimensions?"
    a: "Yes, you can enter specific width and height values in pixels, or use the aspect ratio presets for common dimensions."
  - q: "Will cropping affect image quality?"
    a: "No, the cropping process maintains the original image quality. The output is saved in lossless PNG format."
  - q: "Is there a file size limit?"
    a: "No, there are no file size limitations. However, very large images might take longer to process."
  - q: "Are my images secure?"
    a: "Yes, all processing is done locally in your browser. Your images are never uploaded to our servers."
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

        <!-- Preview and Crop Area -->
        <div id="previewArea" class="bg-white rounded-2xl shadow-sm p-6 mb-6 hidden">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Original Image -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Original Image</h3>
              <div class="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <img id="originalImage" class="w-full h-full object-contain" alt="Original image">
              </div>
            </div>
            <!-- Crop Options -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Crop Options</h3>
              <div class="space-y-6">
                <!-- Aspect Ratio -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Aspect Ratio</label>
                  <select id="aspectRatio" class="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <option value="NaN">Free</option>
                    <option value="1">1:1 (Square)</option>
                    <option value="1.7777777777777777">16:9 (Landscape)</option>
                    <option value="0.5625">9:16 (Portrait)</option>
                    <option value="1.3333333333333333">4:3 (Standard)</option>
                    <option value="0.75">3:4 (Portrait)</option>
                    <option value="2">2:1 (Panoramic)</option>
                    <option value="0.5">1:2 (Portrait)</option>
                    <option value="1.5">3:2 (Classic)</option>
                    <option value="0.6666666666666666">2:3 (Portrait)</option>
                    <option value="1.25">5:4 (Classic)</option>
                    <option value="0.8">4:5 (Portrait)</option>
                    <option value="1.91">21:9 (Ultrawide)</option>
                    <option value="0.5238095238095238">9:21 (Portrait)</option>
                    <option value="1.4142135623730951">v2:1 (A4)</option>
                    <option value="0.7071067811865475">1:v2 (A4 Portrait)</option>
                  </select>
                </div>
                <!-- Custom Dimensions -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Custom Dimensions (px)</label>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <input type="number" id="cropWidth" placeholder="Width" class="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    </div>
                    <div>
                      <input type="number" id="cropHeight" placeholder="Height" class="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    </div>
                  </div>
                </div>
                <!-- Action Buttons -->
                <div class="flex flex-wrap gap-4">
                  <button id="cropBtn" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <i data-lucide="crop" class="w-5 h-5 inline-block mr-2"></i>
                    Crop Image
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

        <!-- Cropped Preview -->
        <div id="croppedPreviewArea" class="bg-white rounded-2xl shadow-sm p-6 mb-6 hidden">
          <h3 class="text-lg font-semibold mb-4">Cropped Preview</h3>
          <div class="aspect-square bg-gray-50 rounded-lg overflow-hidden max-w-md mx-auto">
            <img id="croppedPreview" class="w-full h-full object-contain" alt="Cropped preview">
          </div>
          <div class="flex justify-center mt-6">
            <button id="downloadBtn" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <i data-lucide="download" class="w-5 h-5 inline-block mr-2"></i>
              Download
            </button>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('IMAGE_CROPPER_DATA');
    });

    // Image Cropper Implementation
    let cropper = null;
    let originalImage = null;
    let croppedImage = null;

    // Elements
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const originalImageEl = document.getElementById('originalImage');
    const croppedPreviewEl = document.getElementById('croppedPreview');
    const previewArea = document.getElementById('previewArea');
    const cropOptions = document.getElementById('cropOptions');
    const aspectRatio = document.getElementById('aspectRatio');
    const cropWidth = document.getElementById('cropWidth');
    const cropHeight = document.getElementById('cropHeight');
    const cropBtn = document.getElementById('cropBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const clearBtn = document.getElementById('clearBtn');

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
        cropBtn.classList.remove('hidden');
        clearBtn.classList.remove('hidden');

        // Scroll to preview area
        previewArea.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Initialize cropper
        if (cropper) {
          cropper.destroy();
        }
        cropper = new Cropper(originalImageEl, {
          aspectRatio: parseFloat(aspectRatio.value),
          viewMode: 1,
          dragMode: 'move',
          autoCropArea: 1,
          restore: false,
          guides: true,
          center: true,
          highlight: true,
          cropBoxMovable: true,
          cropBoxResizable: true,
          toggleDragModeOnDblclick: false,
          // Enhanced mobile support
          responsive: true,
          touchDragZoom: true,
          zoomable: true,
          zoomOnTouch: true,
          zoomOnWheel: true,
          // Improved handles visibility
          cropBoxMovable: true,
          cropBoxResizable: true,
          handles: 'all',
          // Custom styles for better visibility
          ready: function() {
            // Add custom styles for better handle visibility
            const style = document.createElement('style');
            style.textContent = `
              .cropper-point {
                background-color: #fff !important;
                border: 2px solid #0ea5e9 !important;
                width: 16px !important;
                height: 16px !important;
                opacity: 1 !important;
              }
              .cropper-line {
                background-color: #0ea5e9 !important;
                opacity: 0.5 !important;
              }
              .cropper-view-box {
                outline: 2px solid #0ea5e9 !important;
              }
              .cropper-bg {
                background-color: rgba(0, 0, 0, 0.5) !important;
              }
            `;
            document.head.appendChild(style);
          }
        });
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

    // Aspect ratio change
    aspectRatio.addEventListener('change', () => {
      if (cropper) {
        cropper.setAspectRatio(parseFloat(aspectRatio.value));
      }
    });

    // Custom dimensions
    cropWidth.addEventListener('change', () => {
      if (cropper && cropWidth.value) {
        const ratio = parseFloat(aspectRatio.value);
        if (ratio) {
          cropHeight.value = Math.round(cropWidth.value / ratio);
        }
      }
    });
    cropHeight.addEventListener('change', () => {
      if (cropper && cropHeight.value) {
        const ratio = parseFloat(aspectRatio.value);
        if (ratio) {
          cropWidth.value = Math.round(cropHeight.value * ratio);
        }
      }
    });

    // Crop button
    cropBtn.addEventListener('click', () => {
      if (!cropper) return;
      
      const canvas = cropper.getCroppedCanvas({
        width: cropWidth.value ? parseInt(cropWidth.value) : undefined,
        height: cropHeight.value ? parseInt(cropHeight.value) : undefined,
      });
      
      if (canvas) {
        croppedImage = canvas.toDataURL('image/png');
        croppedPreviewEl.src = croppedImage;
        document.getElementById('croppedPreviewArea').classList.remove('hidden');
        document.getElementById('croppedPreviewArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    // Download button
    downloadBtn.addEventListener('click', () => {
      if (!croppedImage) return;
      
      const link = document.createElement('a');
      link.download = 'cropped-image.png';
      link.href = croppedImage;
      link.click();
    });

    // Clear button
    clearBtn.addEventListener('click', () => {
      if (cropper) {
        cropper.destroy();
        cropper = null;
      }
      originalImage = null;
      croppedImage = null;
      originalImageEl.src = '';
      croppedPreviewEl.src = '';
      previewArea.classList.add('hidden');
      document.getElementById('croppedPreviewArea').classList.add('hidden');
      cropBtn.classList.add('hidden');
      downloadBtn.classList.add('hidden');
      clearBtn.classList.add('hidden');
      fileInput.value = '';
    });
  </script>
{{< /rawhtml >}}
