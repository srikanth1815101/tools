---
id: "percentage-calculator"
title: "Percentage Calculator - Free Online Tool | CSRGO Tools"
name: "Percentage Calculator"
description: "Calculate percentages"
url: "/tools/percentage-calculator/"
category: "math-calculators"
icon: "percent"
color: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
keywords:
  - "percentage calculator"
  - "percentage calculator online"
  - "free percentage calculator"
hero:
  icon: "percent"
  iconBg: "gradient-bg"
  title: "Percentage Calculator"
  subtitle: "Quickly calculate percentages for any value, right in your browser"
  features:
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Calculation"
    - icon: "percent"
      color: "text-blue-500"
      label: "Flexible Input"
    - icon: "globe"
      color: "text-green-500"
      label: "Browser-based"
whatIs:
  title: "What is Percentage Calculator?"
  content: "The Percentage Calculator is a free online tool that helps you quickly find the percentage of any value. Whether you need to calculate discounts, markups, or just solve math homework, this tool makes it easy and fast.<br><br><strong>Simple and effective:</strong> Enter your value and the percentage you want to calculate, and get the result instantly. Copy the result with one click for use anywhere."
whyUse:
  title: "Why Use Percentage Calculator?"
  items:
    - icon: "zap"
      title: "Fast & Easy"
      desc: "Calculate percentages instantly—no signup or installation required."
    - icon: "percent"
      title: "Flexible Input"
      desc: "Works for any value and any percentage, including decimals."
    - icon: "globe"
      title: "Universal Use"
      desc: "Great for shopping, finance, school, and everyday math."
    - icon: "copy"
      title: "One-Click Copy"
      desc: "Copy your result to the clipboard for use anywhere."
howToUse:
  title: "How to Use Percentage Calculator"
  steps:
    - icon: "edit"
      title: "Enter Value & Percentage"
      desc: "Type your value and the percentage you want to calculate."
    - icon: "percent"
      title: "Calculate"
      desc: "Click Calculate to see the result instantly."
    - icon: "copy"
      title: "Copy Result"
      desc: "Copy the result to your clipboard with one click."
features:
  - "Calculate the percentage of any value instantly"
  - "Works with whole numbers and decimals"
  - "Responsive design for all devices"
  - "No server-side processing—everything runs in your browser"
  - "Copy your result with one click"
  - "Perfect for shopping, finance, and schoolwork"
faq:
  - q: "What can I use this calculator for?"
    a: "You can use it to calculate discounts, markups, tips, grades, and any other percentage-based math."
  - q: "Does it work with decimals?"
    a: "Yes, you can enter decimal values for both the value and the percentage."
  - q: "Is my data safe?"
    a: "All calculations are done in your browser. No data is sent to any server."
  - q: "Can I use this on my phone?"
    a: "Yes, the tool is fully responsive and works on all modern devices."
  - q: "Is there a limit to the values I can enter?"
    a: "There is no strict limit, but extremely large or small numbers may be rounded for display."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-6">
            <!-- Input Area -->
            <form id="percentageForm" class="flex flex-col md:flex-row gap-4 items-end">
              <div class="flex-1 w-full">
                <label class="block text-sm font-medium text-gray-700 mb-1">Value</label>
                <input type="number" id="valueInput" class="w-full border rounded-lg px-3 py-2" placeholder="Enter value" required>
              </div>
              <div class="flex-1 w-full">
                <label class="block text-sm font-medium text-gray-700 mb-1">Percentage (%)</label>
                <input type="number" id="percentInput" class="w-full border rounded-lg px-3 py-2" placeholder="Enter percentage" required>
              </div>
              <button type="submit" id="calcBtn" class="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg">
                <i data-lucide="percent" class="w-5 h-5"></i>
                Calculate
              </button>
            </form>

            <!-- Result Area -->
            <div id="resultArea" class="hidden">
              <label class="block text-sm font-medium text-gray-700 mb-2">Result</label>
              <div class="border rounded-lg p-4 bg-gray-50 min-h-[60px] break-words text-lg font-semibold" id="resultText"></div>
              <div class="flex flex-wrap gap-4 mt-4">
                <button id="copyBtn" class="flex-1 min-w-[140px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap">
                  <i data-lucide="copy" class="w-5 h-5 flex-shrink-0"></i>
                  <span>Copy Result</span>
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
      renderToolSections('PERCENTAGE_CALCULATOR_DATA');
    });

    // Percentage Calculator functionality
    const form = document.getElementById('percentageForm');
    const valueInput = document.getElementById('valueInput');
    const percentInput = document.getElementById('percentInput');
    const resultArea = document.getElementById('resultArea');
    const resultText = document.getElementById('resultText');
    const copyBtn = document.getElementById('copyBtn');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      errorMsg.classList.add('hidden');
      const value = parseFloat(valueInput.value);
      const percent = parseFloat(percentInput.value);
      if (isNaN(value) || isNaN(percent)) {
        errorMsg.textContent = 'Please enter valid numbers for both fields.';
        errorMsg.classList.remove('hidden');
        resultArea.classList.add('hidden');
        return;
      }
      const result = (value * percent) / 100;
      resultText.textContent = `${percent}% of ${value} = ${result}`;
      resultArea.classList.remove('hidden');
    });

    copyBtn.addEventListener('click', () => {
      if (!resultText.textContent) return;
      navigator.clipboard.writeText(resultText.textContent).then(() => {
        const originalIcon = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i><span>Copied!</span>';
        lucide.createIcons();
        setTimeout(() => {
          copyBtn.innerHTML = originalIcon;
          lucide.createIcons();
        }, 2000);
      });
    });
  </script>
{{< /rawhtml >}}
