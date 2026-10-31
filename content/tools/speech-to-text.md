---
id: "speech-to-text"
title: "Speech-to-Text - Free Online Tool | CSRGO Tools"
name: "Speech-to-Text"
description: "Convert speech to text"
url: "/tools/speech-to-text/"
category: "text-tools"
icon: "mic"
color: "bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400"
keywords:
  - "speech-to-text"
  - "speech-to-text online"
  - "free speech-to-text"
hero:
  icon: "mic"
  iconBg: "gradient-bg"
  title: "Speech-to-Text"
  subtitle: "Convert your speech to text instantly in your browser, supporting multiple languages"
  features:
    - icon: "mic"
      color: "text-blue-500"
      label: "Live Transcription"
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Results"
    - icon: "globe"
      color: "text-green-500"
      label: "Browser-based"
whatIs:
  title: "What is Speech-to-Text?"
  content: "Speech-to-Text is a free online tool that converts your spoken words into written text in real time. It uses your device's microphone and browser technology to transcribe speech instantly, supporting a wide range of languages.<br><br><strong>Easy to use:</strong> Just select your language, click the microphone, and start speaking. Copy or download your transcript with one click."
whyUse:
  title: "Why Use Speech-to-Text?"
  items:
    - icon: "mic"
      title: "Hands-Free Typing"
      desc: "Dictate notes, messages, or documents without touching your keyboard."
    - icon: "zap"
      title: "Fast & Accurate"
      desc: "Get instant, real-time transcription as you speak."
    - icon: "globe"
      title: "Multi-Language Support"
      desc: "Transcribe speech in many popular languages and dialects."
    - icon: "copy"
      title: "Easy Export"
      desc: "Copy or download your transcript for use anywhere."
howToUse:
  title: "How to Use Speech-to-Text"
  steps:
    - icon: "mic"
      title: "Select Language"
      desc: "Choose your preferred language for transcription."
    - icon: "wand-2"
      title: "Start Speaking"
      desc: "Click the microphone button and begin speaking clearly."
    - icon: "copy"
      title: "Copy or Download"
      desc: "Copy your transcript to the clipboard or download as a text file."
features:
  - "Live speech-to-text transcription in your browser"
  - "Supports multiple languages and dialects"
  - "No installation or signup required"
  - "Copy or download your transcript instantly"
  - "Responsive design for all devices"
  - "All processing is done locally for privacy and security"
faq:
  - q: "Which browsers support this tool?"
    a: "Speech-to-Text works best in Chrome, Edge, and some other Chromium-based browsers. It may not work in Firefox or Safari."
  - q: "Is my speech data sent to a server?"
    a: "No, all processing is done in your browser. Your speech is not sent to any server."
  - q: "Can I use this tool on mobile?"
    a: "Yes, the tool is fully responsive and works on most modern mobile browsers that support speech recognition."
  - q: "What languages are supported?"
    a: "The tool supports many popular languages and dialects. Select your language from the dropdown before starting."
  - q: "Is there a time or length limit?"
    a: "There is no strict limit, but browsers may stop recognition after a few minutes for security reasons."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-6">
            <!-- Controls Area -->
            <div class="flex flex-col md:flex-row gap-4 items-end">
              <div class="flex-1 w-full">
                <label class="block text-sm font-medium text-gray-700 mb-1">Language</label>
                <select id="languageSelect" class="w-full border rounded-lg px-3 py-2">
                  <option value="en-US">English (US)</option>
                  <option value="en-GB">English (UK)</option>
                  <option value="hi-IN">Hindi (India)</option>
                  <option value="es-ES">Spanish (Spain)</option>
                  <option value="fr-FR">French (France)</option>
                  <option value="de-DE">German</option>
                  <option value="zh-CN">Chinese (Mandarin)</option>
                  <option value="ja-JP">Japanese</option>
                  <option value="ru-RU">Russian</option>
                  <option value="ar-SA">Arabic</option>
                  <!-- Add more as needed -->
                </select>
              </div>
              <button id="micBtn" type="button" class="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg text-lg">
                <i data-lucide="mic" class="w-7 h-7"></i>
                <span id="micBtnText">Start Listening</span>
              </button>
            </div>

            <!-- Transcript Area -->
            <div id="transcriptArea" class="">
              <label class="block text-sm font-medium text-gray-700 mb-2">Transcript</label>
              <div class="border rounded-lg p-4 bg-gray-50 min-h-[100px] break-words" id="transcriptText" style="min-height:100px;"></div>
              <div class="flex flex-wrap gap-4 mt-4">
                <button id="copyBtn" class="flex-1 min-w-[140px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap">
                  <i data-lucide="copy" class="w-5 h-5 flex-shrink-0"></i>
                  <span>Copy Text</span>
                </button>
                <button id="downloadBtn" class="flex-1 min-w-[140px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap">
                  <i data-lucide="download" class="w-5 h-5 flex-shrink-0"></i>
                  <span>Download</span>
                </button>
              </div>
            </div>
            <div id="errorMsg" class="text-red-600 text-sm mt-2 hidden"></div>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();
    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('SPEECH_TO_TEXT_DATA');
    });

    // Speech-to-Text functionality
    const micBtn = document.getElementById('micBtn');
    const micBtnText = document.getElementById('micBtnText');
    const transcriptText = document.getElementById('transcriptText');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const languageSelect = document.getElementById('languageSelect');
    const errorMsg = document.getElementById('errorMsg');

    let recognition;
    let listening = false;
    let transcript = '';

    // Check for browser support
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      errorMsg.textContent = 'Sorry, your browser does not support Speech Recognition. Please use Chrome, Edge, or another supported browser.';
      errorMsg.classList.remove('hidden');
      micBtn.disabled = true;
    } else {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = languageSelect.value;

      languageSelect.addEventListener('change', () => {
        recognition.lang = languageSelect.value;
      });

      micBtn.addEventListener('click', () => {
        if (listening) {
          recognition.stop();
        } else {
          transcript = '';
          transcriptText.textContent = '';
          recognition.start();
        }
      });

      recognition.onstart = function() {
        listening = true;
        micBtn.classList.add('animate-pulse');
        micBtnText.textContent = 'Stop Listening';
        errorMsg.classList.add('hidden');
      };

      recognition.onend = function() {
        listening = false;
        micBtn.classList.remove('animate-pulse');
        micBtnText.textContent = 'Start Listening';
      };

      recognition.onerror = function(event) {
        errorMsg.textContent = 'Error: ' + event.error;
        errorMsg.classList.remove('hidden');
      };

      recognition.onresult = function(event) {
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            transcript += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }
        transcriptText.textContent = transcript + interim;
      };
    }

    copyBtn.addEventListener('click', () => {
      if (!transcriptText.textContent) return;
      navigator.clipboard.writeText(transcriptText.textContent).then(() => {
        const originalIcon = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i><span>Copied!</span>';
        lucide.createIcons();
        setTimeout(() => {
          copyBtn.innerHTML = originalIcon;
          lucide.createIcons();
        }, 2000);
      });
    });

    downloadBtn.addEventListener('click', () => {
      if (!transcriptText.textContent) return;
      const blob = new Blob([transcriptText.textContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'transcript.txt';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
  </script>
{{< /rawhtml >}}
