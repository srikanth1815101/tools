---
id: "screenshot-to-pdf"
title: "Image to PDF Converter - Free Online Tool | CSRGO"
name: "Image to PDF Converter"
description: "Convert images to PDF format"
url: "/tools/image-to-pdf-converter/"
category: "image-tools"
icon: "file"
color: "bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400"
keywords:
  - "image to pdf converter"
  - "image to pdf converter online"
  - "free image to pdf converter"
hero:
  icon: "file"
  iconBg: "gradient-bg"
  title: "Image to PDF Converter"
  subtitle: "Combine your images into a single PDF file online. Free, fast, and privacy-friendly."
  features:
    - icon: "image"
      color: "text-blue-500"
      label: "Multiple Images"
    - icon: "layers"
      color: "text-purple-500"
      label: "Reorder & Preview"
    - icon: "globe"
      color: "text-green-500"
      label: "Browser-based"
whatIs:
  title: "What is Image to PDF Converter?"
  content: "Image to PDF Converter is a free online tool that allows you to combine multiple images into a single PDF document. Simply upload your images, arrange them in your preferred order, and download the resulting PDF. All processing is done in your browser for maximum privacy."
whyUse:
  title: "Why Use Image to PDF Converter?"
  items:
    - icon: "image"
      title: "Combine Images"
      desc: "Merge multiple images into a single, easy-to-share PDF file."
    - icon: "layers"
      title: "Reorder & Preview"
      desc: "Drag to reorder your images and preview the result before converting."
    - icon: "shield"
      title: "Privacy First"
      desc: "All processing is done locally in your browser. Your images are never uploaded."
    - icon: "zap"
      title: "Instant Conversion"
      desc: "Create and download your PDF instantly, no signup or installation required."
howToUse:
  title: "How to Use Image to PDF Converter"
  steps:
    - icon: "upload"
      title: "Upload Images"
      desc: "Click the upload area or drag and drop your images."
    - icon: "settings"
      title: "Reorder & Preview"
      desc: "Arrange your images in the desired order and preview them."
    - icon: "file-text"
      title: "Convert to PDF"
      desc: "Click \"Convert to PDF\" to generate your PDF document."
    - icon: "download"
      title: "Download PDF"
      desc: "Download your combined PDF file instantly."
features:
  - "Combine multiple images into a single PDF"
  - "Drag-and-drop upload and easy reordering"
  - "Preview images before conversion"
  - "All processing is done in your browser for privacy"
  - "No file size or image count limits (browser memory applies)"
  - "Download PDF instantly, no signup required"
  - "Supports PNG, JPG, JPEG, BMP, GIF, WebP formats"
  - "Modern, mobile-friendly interface"
faq:
  - q: "What image formats are supported?"
    a: "You can upload PNG, JPG, JPEG, BMP, GIF, and WebP images."
  - q: "Is there a limit to the number of images I can combine?"
    a: "There is no hard limit, but very large numbers of images may be limited by your browser memory."
  - q: "Are my images uploaded to a server?"
    a: "No, all processing is done locally in your browser. Your images never leave your device."
  - q: "Can I reorder the images before creating the PDF?"
    a: "Yes, you can drag to reorder your images before converting to PDF."
  - q: "Is this tool free to use?"
    a: "Yes, Image to PDF Converter is completely free and requires no signup."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-8">
            <!-- Upload Area -->
            <div id="dropZone" class="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-blue-500 transition-colors mb-6">
              <div class="flex flex-col items-center gap-4">
                <div class="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  <i data-lucide="upload" class="w-8 h-8 text-blue-500"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Drop your images here</h3>
                  <p class="text-gray-500 mt-1">or click to browse (PNG, JPG, JPEG, BMP, GIF, WebP)</p>
                </div>
                <input type="file" id="fileInput" accept="image/*" multiple class="hidden">
              </div>
            </div>

            <!-- Preview and Reorder Area -->
            <div id="previewArea" class="hidden">
              <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                <i data-lucide="image" class="w-5 h-5 text-indigo-600"></i>
                Images Preview & Order
              </h3>
              <div id="screenshotsList" class="flex flex-wrap gap-4 mb-6"></div>
              <div class="flex flex-col md:flex-row gap-4">
                <button id="convertBtn" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg">
                  <i data-lucide="file-text" class="w-5 h-5"></i>
                  Convert to PDF
                </button>
                <button id="clearBtn" class="w-full bg-gray-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                  <i data-lucide="x" class="w-5 h-5"></i>
                  Clear All
                </button>
              </div>
            </div>

            <!-- Result Area -->
            <div id="resultArea" class="hidden">
              <div class="text-center mb-6">
                <div id="pdfProgress" class="hidden">
                  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div id="progressBar" class="bg-blue-600 h-2.5 rounded-full" style="width: 0%"></div>
                  </div>
                  <p id="progressText" class="text-gray-600">Creating PDF... 0%</p>
                </div>
                <div id="pdfReady" class="hidden">
                  <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <i data-lucide="check-circle" class="w-8 h-8 text-green-600"></i>
                  </div>
                  <p class="text-lg font-medium text-gray-900">PDF Ready!</p>
                </div>
              </div>
              <div class="flex justify-center">
                <button id="downloadBtn" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors flex items-center justify-center gap-2">
                  <i data-lucide="download" class="w-5 h-5 inline-block mr-2"></i>
                  Download PDF
                </button>
              </div>
            </div>

          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('IMAGE_TO_PDF_CONVERTER_DATA');
    });

    // Elements
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const previewArea = document.getElementById('previewArea');
    const screenshotsList = document.getElementById('screenshotsList');
    const convertBtn = document.getElementById('convertBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultArea = document.getElementById('resultArea');
    const downloadBtn = document.getElementById('downloadBtn');

    let screenshots = [];
    let pdfBlobUrl = null;

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
      const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
      if (imageFiles.length === 0) {
        alert('Please select image files');
        return;
      }
      let loaded = 0;
      imageFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          screenshots.push({ src: e.target.result, name: file.name });
          loaded++;
          if (loaded === imageFiles.length) {
            showPreview();
          }
        };
        reader.readAsDataURL(file);
      });
    }

    function showPreview() {
      if (screenshots.length === 0) {
        previewArea.classList.add('hidden');
        return;
      }
      screenshotsList.innerHTML = screenshots.map((img, idx) => `
        <div class="relative group">
          <img src="${img.src}" alt="Screenshot ${idx + 1}" class="w-32 h-32 object-contain rounded-lg border border-gray-200 shadow-sm">
          <div class="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onclick="window.moveScreenshot(${idx}, -1)" class="p-1 bg-white rounded hover:bg-blue-100 shadow"><i data-lucide='arrow-up' class='w-4 h-4 text-blue-600'></i></button>
            <button onclick="window.moveScreenshot(${idx}, 1)" class="p-1 bg-white rounded hover:bg-blue-100 shadow"><i data-lucide='arrow-down' class='w-4 h-4 text-blue-600'></i></button>
            <button onclick="window.removeScreenshot(${idx})" class="p-1 bg-white rounded hover:bg-red-100 shadow"><i data-lucide='trash-2' class='w-4 h-4 text-red-600'></i></button>
          </div>
          <div class="absolute bottom-1 left-1 bg-white bg-opacity-80 text-xs px-2 py-1 rounded shadow">${idx + 1}</div>
        </div>
      `).join('');
      previewArea.classList.remove('hidden');
      lucide.createIcons();
      // Auto-scroll to preview area
      setTimeout(() => {
        previewArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }

    // Reorder and remove functions
    window.moveScreenshot = function(idx, dir) {
      if ((dir === -1 && idx === 0) || (dir === 1 && idx === screenshots.length - 1)) return;
      const temp = screenshots[idx];
      screenshots[idx] = screenshots[idx + dir];
      screenshots[idx + dir] = temp;
      showPreview();
    };
    window.removeScreenshot = function(idx) {
      screenshots.splice(idx, 1);
      showPreview();
    };

    // Convert to PDF
    convertBtn.addEventListener('click', async () => {
      if (screenshots.length === 0) return;
      
      // Show loading spinner and disable button
      convertBtn.disabled = true;
      const originalBtnHTML = convertBtn.innerHTML;
      convertBtn.innerHTML = '<svg class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>Creating PDF...';
      
      // Show progress area and hide ready message
      const pdfProgress = document.getElementById('pdfProgress');
      const pdfReady = document.getElementById('pdfReady');
      pdfProgress.classList.remove('hidden');
      pdfReady.classList.add('hidden');
      
      // Reset progress
      document.getElementById('progressBar').style.width = '0%';
      document.getElementById('progressText').textContent = 'Creating PDF... 0%';
      
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
      
      // Process images with delay to show progress
      for (let i = 0; i < screenshots.length; i++) {
        const img = screenshots[i];
        const imgProps = pdf.getImageProperties(img.src);
        
        // Calculate dimensions to fit A4
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        let width = imgProps.width;
        let height = imgProps.height;
        
        // Scale to fit page
        const ratio = Math.min(pageWidth / width, pageHeight / height, 1);
        width *= ratio;
        height *= ratio;
        const x = (pageWidth - width) / 2;
        const y = (pageHeight - height) / 2;
        
        // Add image to PDF
        pdf.addImage(img.src, 'PNG', x, y, width, height);
        if (i < screenshots.length - 1) pdf.addPage();
        
        // Update progress
        const progress = Math.round(((i + 1) / screenshots.length) * 100);
        document.getElementById('progressBar').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `Creating PDF... ${progress}%`;
        
        // Add a small delay to make progress visible
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Create blob and show download
      const pdfBlob = pdf.output('blob');
      pdfBlobUrl = URL.createObjectURL(pdfBlob);
      
      // Show completion message
      pdfProgress.classList.add('hidden');
      pdfReady.classList.remove('hidden');
      resultArea.classList.remove('hidden');
      resultArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Restore button
      convertBtn.disabled = false;
      convertBtn.innerHTML = originalBtnHTML;
      
      // Reinitialize Lucide icons for the check mark
      lucide.createIcons();
    });

    // Download PDF
    downloadBtn.addEventListener('click', () => {
      if (!pdfBlobUrl) return;
      const link = document.createElement('a');
      link.href = pdfBlobUrl;
      link.download = 'screenshots.pdf';
      link.click();
    });

    // Clear all
    clearBtn.addEventListener('click', () => {
      screenshots = [];
      pdfBlobUrl = null;
      previewArea.classList.add('hidden');
      resultArea.classList.add('hidden');
      screenshotsList.innerHTML = '';
    });
  </script>
{{< /rawhtml >}}
