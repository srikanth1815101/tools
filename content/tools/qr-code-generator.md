---
id: "qr-generator"
title: "QR Code Generator - Free Online Tool | CSRGO"
name: "QR Code Generator"
description: "Generate QR codes for any content"
url: "/tools/qr-code-generator/"
category: "image-tools"
icon: "qr-code"
color: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
keywords:
  - "qr code generator"
  - "qr code generator online"
  - "free qr code generator"
hero:
  icon: "qr-code"
  iconBg: "gradient-bg"
  title: "QR Code Generator"
  subtitle: "Create QR codes for URLs, text, contact information, and more with size and error correction options"
  features:
    - icon: "shield"
      color: "text-green-500"
      label: "Secure Generation"
    - icon: "zap"
      color: "text-purple-500"
      label: "Instant Results"
    - icon: "globe"
      color: "text-blue-500"
      label: "Browser-based"
whatIs:
  title: "What is QR Code Generator?"
  content: "The QR Code Generator is a free online tool that allows you to create QR codes for various purposes. QR (Quick Response) codes are two-dimensional barcodes that can store different types of information such as URLs, text, contact details, and more.<br><br><strong>Options:</strong> You can adjust the size and error correction level of your QR code. All QR codes are generated with a black foreground and white background for maximum compatibility and scan reliability."
whyUse:
  title: "Why Use QR Code Generator?"
  items:
    - icon: "shield"
      title: "Error Correction"
      desc: "Choose from multiple error correction levels to ensure your QR code remains scannable even if partially damaged."
    - icon: "ruler"
      title: "Custom Size"
      desc: "Set the size of your QR code to fit your needs, from 50px to 1000px."
    - icon: "globe"
      title: "Universal Compatibility"
      desc: "Generated QR codes are compatible with all modern QR code scanners and mobile devices."
    - icon: "zap"
      title: "Instant Generation"
      desc: "Create and download QR codes instantly without any software installation required."
howToUse:
  title: "How to Use QR Code Generator"
  steps:
    - icon: "edit"
      title: "Enter Content"
      desc: "Type or paste the text, URL, or other content you want to encode in the QR code."
    - icon: "settings"
      title: "Set Size & Error Correction"
      desc: "Adjust the size and error correction level to match your needs."
    - icon: "wand-2"
      title: "Generate QR Code"
      desc: "Click the \"Generate QR Code\" button to create your QR code."
    - icon: "download"
      title: "Download"
      desc: "Download your QR code as a PNG image for use in your projects."
features:
  - "Generate QR codes for URLs, text, contact information, and more"
  - "Customize QR code size from 50px to 1000px"
  - "Choose from multiple error correction levels (L, M, Q, H)"
  - "All QR codes are black on white for maximum compatibility"
  - "Instant preview of generated QR code"
  - "Download QR code as PNG image"
  - "All processing done in your browser for privacy and security"
  - "No software installation required"
faq:
  - q: "What is error correction in QR codes?"
    a: "Error correction allows QR codes to remain scannable even if they are partially damaged or obscured. Higher error correction levels (H) provide better recovery but require more space, while lower levels (L) use less space but are more vulnerable to damage."
  - q: "What types of content can I encode in a QR code?"
    a: "You can encode various types of content including URLs, plain text, contact information (vCard), email addresses, phone numbers, SMS messages, and more."
  - q: "Can I customize the colors of my QR code?"
    a: "No, this tool generates QR codes with a black foreground and white background only. This ensures the highest level of compatibility and scan reliability."
  - q: "What size should I make my QR code?"
    a: "The size depends on your use case. For digital use, 200-300px is usually sufficient. For printing, you may want to use a larger size (500px+) to ensure good quality."
  - q: "Are my QR codes secure?"
    a: "Yes, all QR code generation is done locally in your browser. Your data is never sent to our servers, ensuring complete privacy and security."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-8">
            <!-- Input and Options -->
            <div class="flex flex-col gap-6">
              <div>
                <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                  <i data-lucide="qr-code" class="w-5 h-5 text-blue-600"></i>
                  QR Code Content
                </h3>
                <div class="flex flex-col md:flex-row gap-4">
                  <div class="flex-1">
                    <textarea id="qrInput" rows="4" class="w-full rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-lg p-4" placeholder="Enter text or URL to generate QR code..."></textarea>
                    <div class="mt-4 flex flex-col gap-2">
                      <input id="qrTextAbove" type="text" class="w-full rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-base p-2" placeholder="Text above QR code (optional)">
                      <input id="qrTextBelow" type="text" class="w-full rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-base p-2" placeholder="Text below QR code (optional)">
                    </div>
                  </div>
                  <div class="flex flex-col gap-4 md:w-64">
                    <div>
                      <label for="qrSize" class="block text-sm font-medium text-gray-700 mb-2">Size (pixels)</label>
                      <input type="number" id="qrSize" value="200" min="50" max="1000" class="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    </div>
                    <div>
                      <label for="qrErrorCorrection" class="block text-sm font-medium text-gray-700 mb-2">Error Correction</label>
                      <select id="qrErrorCorrection" class="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                        <option value="L">Low (7%)</option>
                        <option value="M">Medium (15%)</option>
                        <option value="Q">Quartile (25%)</option>
                        <option value="H">High (30%)</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="mt-6 flex">
                  <button id="generateBtn" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg">
                    <i data-lucide="wand-2" class="w-5 h-5"></i>
                    Generate QR Code
                  </button>
                </div>
              </div>
              <!-- QR Code Display and Download -->
              <div id="previewSection" class="hidden">
                <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                  <i data-lucide="image" class="w-5 h-5 text-indigo-600"></i>
                  QR Code Preview
                </h3>
                <div id="qrcode" class="flex justify-center items-center bg-gray-50 rounded-lg p-4 min-h-[200px] mb-4">
                  <!-- QR code will be generated here -->
                </div>
                <div id="downloadArea" class="hidden">
                  <button id="downloadBtn" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg">
                    <i data-lucide="download" class="w-5 h-5"></i>
                    Download QR Code
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
      renderToolSections('QR_CODE_GENERATOR_DATA');
    });

    // Elements
    const qrInput = document.getElementById('qrInput');
    const qrTextAbove = document.getElementById('qrTextAbove');
    const qrTextBelow = document.getElementById('qrTextBelow');
    const qrSize = document.getElementById('qrSize');
    const qrErrorCorrection = document.getElementById('qrErrorCorrection');
    const generateBtn = document.getElementById('generateBtn');
    const qrcodeDiv = document.getElementById('qrcode');
    const downloadArea = document.getElementById('downloadArea');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewSection = document.getElementById('previewSection');

    let qrCode = null; // To store the QRCode object
    let previewCanvas = null; // To store the preview canvas for download

    // Generate QR Code
    function generateQRCode() {
        const text = qrInput.value.trim();
        const textAbove = qrTextAbove.value.trim();
        const textBelow = qrTextBelow.value.trim();
        const size = parseInt(qrSize.value);
        const errorCorrection = qrErrorCorrection.value;
        const font = '16px Inter, Arial, sans-serif';
        const padding = 16;

        if (!text) {
            alert('Please enter text or a URL to generate a QR code.');
            return;
        }

        // Clear previous QR code
        qrcodeDiv.innerHTML = '';
        downloadArea.classList.add('hidden');

        // Create a temporary div to generate QR code with qrcodejs
        const tempDiv = document.createElement('div');
        document.body.appendChild(tempDiv);
        try {
            qrCode = new QRCode(tempDiv, {
                text: text,
                width: size,
                height: size,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel[errorCorrection]
            });
            setTimeout(() => {
                // Get QR code image data
                let qrImg = tempDiv.querySelector('canvas') || tempDiv.querySelector('img');
                if (!qrImg) {
                    alert('Could not generate QR code image.');
                    document.body.removeChild(tempDiv);
                    return;
                }
                // Draw to canvas for preview
                // --- Calculate text wrapping and dynamic height ---
                function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
                    if (!text) return 0;
                    const words = text.split(' ');
                    let line = '';
                    let lines = [];
                    for (let n = 0; n < words.length; n++) {
                        let testLine = line + words[n] + ' ';
                        let metrics = ctx.measureText(testLine);
                        let testWidth = metrics.width;
                        if (testWidth > maxWidth && n > 0) {
                            lines.push(line);
                            line = words[n] + ' ';
                        } else {
                            line = testLine;
                        }
                    }
                    lines.push(line);
                    for (let i = 0; i < lines.length; i++) {
                        ctx.fillText(lines[i].trim(), x, y + i * lineHeight);
                    }
                    return lines.length * lineHeight;
                }
                // ---
                let maxTextWidth = size + padding * 1.5; // a bit wider than QR
                let lineHeight = 20;
                // Measure above/below text height
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                ctx.font = font;
                let aboveLines = textAbove ? Math.ceil(ctx.measureText(textAbove).width / maxTextWidth) : 0;
                let belowLines = textBelow ? Math.ceil(ctx.measureText(textBelow).width / maxTextWidth) : 0;
                let aboveHeight = textAbove ? aboveLines * lineHeight : 0;
                let belowHeight = textBelow ? belowLines * lineHeight : 0;
                // Add extra spacing between text and QR
                let textQRGap = textAbove ? 12 : 0;
                let qrTextGap = textBelow ? 12 : 0;
                let totalHeight = aboveHeight + textQRGap + size + qrTextGap + belowHeight + padding * 2;
                let totalWidth = size + padding * 2;
                canvas.width = totalWidth;
                canvas.height = totalHeight;
                // Fill white background
                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                // Draw text above (wrapped)
                ctx.font = font;
                ctx.fillStyle = '#222';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                let aboveY = padding;
                if (textAbove) {
                    aboveHeight = wrapText(ctx, textAbove, totalWidth / 2, aboveY, maxTextWidth, lineHeight);
                }
                // Draw QR code
                let qrImage = new window.Image();
                qrImage.onload = function() {
                    let qrY = padding + aboveHeight + (textAbove ? textQRGap : 0);
                    ctx.drawImage(qrImage, padding, qrY, size, size);
                    // Draw text below (wrapped)
                    if (textBelow) {
                        let belowY = qrY + size + qrTextGap;
                        wrapText(ctx, textBelow, totalWidth / 2, belowY, maxTextWidth, lineHeight);
                    }
                    // Show preview
                    qrcodeDiv.innerHTML = '';
                    canvas.style.maxWidth = '100%';
                    canvas.style.height = 'auto';
                    qrcodeDiv.appendChild(canvas);
                    previewCanvas = canvas;
                    // Show download button
                    downloadArea.classList.remove('hidden');
                };
                if (qrImg.tagName.toLowerCase() === 'canvas') {
                    qrImage.src = qrImg.toDataURL('image/png');
                } else {
                    qrImage.src = qrImg.src;
                }
                document.body.removeChild(tempDiv);
            }, 100);
            // Show preview section and scroll to it
            previewSection.classList.remove('hidden');
            previewSection.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            console.error('QR code generation error:', error);
            alert('Error generating QR code: ' + error.message);
            document.body.removeChild(tempDiv);
        }
    }

    // Download QR Code
    function downloadQRCode() {
        if (!previewCanvas) {
            alert('Please generate a QR code first.');
            return;
        }
        const jpgUrl = previewCanvas.toDataURL('image/jpeg', 0.95);
        const link = document.createElement('a');
        link.download = 'qrcode.jpg';
        link.href = jpgUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Event Listeners
    generateBtn.addEventListener('click', generateQRCode);
    downloadBtn.addEventListener('click', downloadQRCode);

    // Optional: Generate on Enter key press in textarea
    qrInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent newline
            generateQRCode();
        }
    });
  </script>
{{< /rawhtml >}}
