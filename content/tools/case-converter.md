---
id: "case-converter"
title: "Case Converter - Free Online Tool | CSRGO Tools"
name: "Case Converter"
description: "Convert text between different cases"
url: "/tools/case-converter/"
category: "text-tools"
icon: "type"
color: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
keywords:
  - "case converter"
  - "case converter online"
  - "free case converter"
hero:
  icon: "type"
  iconBg: "gradient-bg"
  title: "Case Converter"
  subtitle: "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, and more. Free online case conversion tool for text formatting."
  features:
    - icon: "zap"
      color: "text-blue-500"
      label: "Instant Conversion"
    - icon: "type"
      color: "text-purple-500"
      label: "Multiple Formats"
    - icon: "globe"
      color: "text-green-500"
      label: "Browser-based"
whatIs:
  title: "What is a Case Converter?"
  content: |-
      <p>A case converter is a text formatting tool that transforms text into different capitalization styles. It's particularly useful for:</p>
              <ul class="list-disc pl-6 mt-4 space-y-2">
                <li>Converting text to UPPERCASE for emphasis or headings</li>
                <li>Transforming text to lowercase for consistent formatting</li>
                <li>Creating Title Case for proper nouns and titles</li>
                <li>Applying Sentence case for proper sentence structure</li>
                <li>Generating alternating case for creative text styling</li>
                <li>Inverting case for special formatting needs</li>
              </ul>
whyUse:
  title: "Why Use Our Case Converter?"
  items:
    - icon: "zap"
      title: "Instant Conversion"
      desc: "Get immediate results with our fast and efficient case conversion tool."
    - icon: "type"
      title: "Multiple Formats"
      desc: "Choose from various case styles including UPPERCASE, lowercase, Title Case, and more."
    - icon: "shield"
      title: "Privacy Focused"
      desc: "Your text is processed locally in your browser - we never store or transmit your content."
    - icon: "globe"
      title: "Accessible Anywhere"
      desc: "Use our tool on any device with a web browser - no installation required."
howToUse:
  title: "How to Use"
  steps:
    - icon: "type"
      title: "Enter Your Text"
      desc: "Type or paste your text into the input area."
    - icon: "wand-2"
      title: "Choose Case Style"
      desc: "Select your desired case conversion style from the available options."
    - icon: "copy"
      title: "Copy Result"
      desc: "Click the copy button to copy the converted text to your clipboard."
features:
  - "Convert text to UPPERCASE"
  - "Transform text to lowercase"
  - "Create Title Case formatting"
  - "Apply Sentence case structure"
  - "Generate alternating case text"
  - "Invert text case"
  - "Instant conversion"
  - "Copy to clipboard functionality"
  - "Clear text option"
  - "Mobile-friendly interface"
faq:
  - q: "What types of case conversion are available?"
    a: "Our tool offers six different case conversion options: UPPERCASE, lowercase, Title Case, Sentence case, alternating case, and inverse case."
  - q: "Is my text safe when using this tool?"
    a: "Yes, your text is completely safe. All processing happens locally in your browser, and we never store or transmit your content."
  - q: "Can I use this tool on mobile devices?"
    a: "Yes, our case converter is fully responsive and works on any device with a web browser, including smartphones and tablets."
  - q: "How do I copy the converted text?"
    a: "Simply click the \"Copy\" button after converting your text, and it will be copied to your clipboard automatically."
  - q: "Is there a limit to how much text I can convert?"
    a: "There is no strict limit, but for optimal performance, we recommend converting text under 100,000 characters at a time."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-8">
            <!-- Text Input Area -->
            <div class="space-y-4">
              <div class="flex flex-col gap-2 items-start md:flex-row md:items-center md:justify-between">
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  <i data-lucide="type" class="w-5 h-5 text-blue-600"></i>
                  Enter Your Text
                </h3>
                <div class="flex gap-2">
                  <button id="clearBtn" class="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                    Clear
                  </button>
                  <button id="copyBtn" class="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-1">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                    Copy
                  </button>
                </div>
              </div>
              <textarea id="textInput" class="w-full h-64 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none resize-none" placeholder="Type or paste your text here..."></textarea>
            </div>

            <!-- Case Conversion Options -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <button class="case-btn px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2" data-case="upper">
                <i data-lucide="type" class="w-5 h-5"></i>
                UPPERCASE
              </button>
              <button class="case-btn px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2" data-case="lower">
                <i data-lucide="type" class="w-5 h-5"></i>
                lowercase
              </button>
              <button class="case-btn px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2" data-case="title">
                <i data-lucide="type" class="w-5 h-5"></i>
                Title Case
              </button>
              <button class="case-btn px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2" data-case="sentence">
                <i data-lucide="type" class="w-5 h-5"></i>
                Sentence case
              </button>
              <button class="case-btn px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2" data-case="alternating">
                <i data-lucide="type" class="w-5 h-5"></i>
                AlTeRnAtInG cAsE
              </button>
              <button class="case-btn px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2" data-case="inverse">
                <i data-lucide="type" class="w-5 h-5"></i>
                InVeRsE cAsE
              </button>
            </div>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('CASE_CONVERTER_DATA');
    });

    // Elements
    const textInput = document.getElementById('textInput');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const caseButtons = document.querySelectorAll('.case-btn');

    // Case conversion functions
    const caseConverters = {
      upper: text => text.toUpperCase(),
      lower: text => text.toLowerCase(),
      title: text => text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()),
      sentence: text => text.toLowerCase().replace(/(^\w|\.\s+\w)/g, c => c.toUpperCase()),
      alternating: text => text.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join(''),
      inverse: text => text.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('')
    };

    // Convert text based on selected case
    function convertCase(caseType) {
      const text = textInput.value;
      if (!text) return;

      // Show processing state
      const button = document.querySelector(`[data-case="${caseType}"]`);
      const originalContent = button.innerHTML;
      button.disabled = true;
      button.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Processing...';
      lucide.createIcons();

      // Process text
      const convertedText = caseConverters[caseType](text);
      textInput.value = convertedText;

      // Reset button state after a short delay
      setTimeout(() => {
        button.disabled = false;
        button.innerHTML = originalContent;
        lucide.createIcons();
      }, 500);
    }

    // Event listeners
    caseButtons.forEach(button => {
      button.addEventListener('click', () => convertCase(button.dataset.case));
    });
    
    clearBtn.addEventListener('click', () => {
      textInput.value = '';
    });
    
    copyBtn.addEventListener('click', () => {
      textInput.select();
      document.execCommand('copy');
      
      // Show copied feedback
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Copied';
      lucide.createIcons();
      
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        lucide.createIcons();
      }, 2000);
    });
  </script>
{{< /rawhtml >}}
