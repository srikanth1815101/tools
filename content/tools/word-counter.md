---
id: "word-counter"
title: "Word Counter - Free Online Tool | CSRGO"
name: "Word Counter"
description: "Count words in your text"
url: "/tools/word-counter/"
category: "text-tools"
icon: "whole-word"
color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
keywords:
  - "word counter"
  - "word counter online"
  - "free word counter"
hero:
  icon: "whole-word"
  iconBg: "gradient-bg"
  title: "Word Counter"
  subtitle: "Count words, characters, sentences, and paragraphs in your text. Get detailed statistics and reading time estimates."
  features:
    - icon: "zap"
      color: "text-blue-500"
      label: "Real-time Analysis"
    - icon: "chart-bar"
      color: "text-purple-500"
      label: "Detailed Stats"
    - icon: "globe"
      color: "text-green-500"
      label: "Browser-based"
whatIs:
  title: "What is Word Counter?"
  content: "The Word Counter is a free online tool that helps you analyze text by counting various elements such as words, characters, sentences, and paragraphs. It's particularly useful for writers, students, and professionals who need to meet specific length requirements or analyze their content.<br><br><strong>Analysis features:</strong> Our word counter provides detailed statistics about your text, including word count, character count, sentence count, paragraph count, reading time, speaking time, and unique words count. All processing is done in your browser for privacy and speed."
whyUse:
  title: "Why Use Word Counter?"
  items:
    - icon: "zap"
      title: "Real-time Analysis"
      desc: "Get instant feedback as you type or paste your text, with all statistics updating automatically."
    - icon: "chart-bar"
      title: "Comprehensive Stats"
      desc: "Track multiple metrics including words, characters, sentences, paragraphs, and reading time."
    - icon: "clock"
      title: "Time Estimates"
      desc: "Calculate reading and speaking time based on standard rates for better content planning."
    - icon: "shield"
      title: "Privacy First"
      desc: "All text analysis happens in your browser. Your content never leaves your device."
howToUse:
  title: "How to Use Word Counter"
  steps:
    - icon: "edit"
      title: "Enter Your Text"
      desc: "Type or paste your text into the input box. The counter updates automatically as you type."
    - icon: "chart-bar"
      title: "View Statistics"
      desc: "Watch the statistics update in real-time, showing word count, character count, and more."
    - icon: "copy"
      title: "Copy Text"
      desc: "Use the copy button to easily copy your text to the clipboard."
    - icon: "trash-2"
      title: "Clear Text"
      desc: "Use the clear button to reset the counter and start over."
features:
  - "Real-time word, character, sentence, and paragraph counting"
  - "Reading time estimation based on average reading speed"
  - "Speaking time calculation for presentation planning"
  - "Unique words analysis for vocabulary assessment"
  - "Copy and clear functionality for easy text management"
  - "Mobile-responsive design for use on any device"
  - "No data storage or server processing"
  - "Instant updates as you type or paste text"
faq:
  - q: "How accurate is the word count?"
    a: "Our word counter is highly accurate, counting words based on standard word separation rules. It handles various text formats and special characters correctly."
  - q: "Does the tool count spaces as characters?"
    a: "Yes, the character count includes spaces. This is useful for applications that have character limits including spaces."
  - q: "How is reading time calculated?"
    a: "Reading time is calculated based on an average reading speed of 200 words per minute, which is the standard reading speed for adults."
  - q: "Is my text saved or stored?"
    a: "No, your text is processed entirely in your browser and is never sent to our servers. This ensures complete privacy."
  - q: "Can I use this tool on mobile devices?"
    a: "Yes, our word counter is fully responsive and works perfectly on all devices, including smartphones and tablets."
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

            <!-- Statistics Cards -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <!-- Words -->
              <div class="bg-blue-50 rounded-xl p-4">
                <div class="flex items-center gap-2 mb-1">
                  <i data-lucide="whole-word" class="w-5 h-5 text-blue-600"></i>
                  <span class="text-sm font-medium text-blue-600">Words</span>
                </div>
                <div id="wordCount" class="text-2xl font-bold text-gray-900">0</div>
              </div>
              <!-- Characters -->
              <div class="bg-green-50 rounded-xl p-4">
                <div class="flex items-center gap-2 mb-1">
                  <i data-lucide="case-sensitive" class="w-5 h-5 text-green-600"></i>
                  <span class="text-sm font-medium text-green-600">Characters</span>
                </div>
                <div id="charCount" class="text-2xl font-bold text-gray-900">0</div>
              </div>
              <!-- Sentences -->
              <div class="bg-purple-50 rounded-xl p-4">
                <div class="flex items-center gap-2 mb-1">
                  <i data-lucide="message-square" class="w-5 h-5 text-purple-600"></i>
                  <span class="text-sm font-medium text-purple-600">Sentences</span>
                </div>
                <div id="sentenceCount" class="text-2xl font-bold text-gray-900">0</div>
              </div>
              <!-- Paragraphs -->
              <div class="bg-orange-50 rounded-xl p-4">
                <div class="flex items-center gap-2 mb-1">
                  <i data-lucide="align-left" class="w-5 h-5 text-orange-600"></i>
                  <span class="text-sm font-medium text-orange-600">Paragraphs</span>
                </div>
                <div id="paragraphCount" class="text-2xl font-bold text-gray-900">0</div>
              </div>
            </div>

            <!-- Additional Statistics -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <!-- Reading Time -->
              <div class="bg-gray-50 rounded-xl p-4">
                <div class="flex items-center gap-2 mb-1">
                  <i data-lucide="clock" class="w-5 h-5 text-gray-600"></i>
                  <span class="text-sm font-medium text-gray-600">Reading Time</span>
                </div>
                <div id="readingTime" class="text-lg font-semibold text-gray-900">0 min</div>
              </div>
              <!-- Speaking Time -->
              <div class="bg-gray-50 rounded-xl p-4">
                <div class="flex items-center gap-2 mb-1">
                  <i data-lucide="mic" class="w-5 h-5 text-gray-600"></i>
                  <span class="text-sm font-medium text-gray-600">Speaking Time</span>
                </div>
                <div id="speakingTime" class="text-lg font-semibold text-gray-900">0 min</div>
              </div>
              <!-- Unique Words -->
              <div class="bg-gray-50 rounded-xl p-4">
                <div class="flex items-center gap-2 mb-1">
                  <i data-lucide="hash" class="w-5 h-5 text-gray-600"></i>
                  <span class="text-sm font-medium text-gray-600">Unique Words</span>
                </div>
                <div id="uniqueWords" class="text-lg font-semibold text-gray-900">0</div>
              </div>
            </div>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('WORD_COUNTER_DATA');
    });

    // Elements
    const textInput = document.getElementById('textInput');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const wordCount = document.getElementById('wordCount');
    const charCount = document.getElementById('charCount');
    const sentenceCount = document.getElementById('sentenceCount');
    const paragraphCount = document.getElementById('paragraphCount');
    const readingTime = document.getElementById('readingTime');
    const speakingTime = document.getElementById('speakingTime');
    const uniqueWords = document.getElementById('uniqueWords');

    // Constants
    const WORDS_PER_MINUTE = 200;
    const SPEAKING_WORDS_PER_MINUTE = 130;

    // Update statistics
    function updateStats() {
      const text = textInput.value;
      
      // Word count
      const words = text.trim() ? text.trim().split(/\s+/) : [];
      wordCount.textContent = words.length;
      
      // Character count
      charCount.textContent = text.length;
      
      // Sentence count
      const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
      sentenceCount.textContent = sentences.length;
      
      // Paragraph count
      const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
      paragraphCount.textContent = paragraphs.length;
      
      // Reading time
      const readingMinutes = Math.ceil(words.length / WORDS_PER_MINUTE);
      readingTime.textContent = `${readingMinutes} min`;
      
      // Speaking time
      const speakingMinutes = Math.ceil(words.length / SPEAKING_WORDS_PER_MINUTE);
      speakingTime.textContent = `${speakingMinutes} min`;
      
      // Unique words
      const uniqueWordsSet = new Set(words.map(w => w.toLowerCase()));
      uniqueWords.textContent = uniqueWordsSet.size;
    }

    // Event listeners
    textInput.addEventListener('input', updateStats);
    
    clearBtn.addEventListener('click', () => {
      textInput.value = '';
      updateStats();
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

    // Initial stats update
    updateStats();
  </script>
{{< /rawhtml >}}
