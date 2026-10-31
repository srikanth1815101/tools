---
id: "bmi-calculator"
title: "BMI Calculator - Free Online Tool | CSRGO Tools"
name: "BMI Calculator"
description: "Calculate Body Mass Index"
url: "/tools/bmi-calculator/"
category: "math-calculators"
icon: "activity"
color: "bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400"
keywords:
  - "bmi calculator"
  - "bmi calculator online"
  - "free bmi calculator"
hero:
  icon: "activity"
  iconBg: "gradient-bg"
  title: "BMI Calculator"
  subtitle: "Calculate your Body Mass Index (BMI) instantly and see your health category"
  features:
    - icon: "activity"
      color: "text-blue-500"
      label: "BMI Calculation"
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Results"
    - icon: "globe"
      color: "text-green-500"
      label: "Browser-based"
whatIs:
  title: "What is BMI Calculator?"
  content: "The BMI Calculator is a free online tool that helps you find your Body Mass Index (BMI) using your height and weight. BMI is a widely used indicator of healthy body weight and can help you understand your health status.<br><br><strong>Simple and fast:</strong> Enter your height and weight, and get your BMI value and category instantly. Copy the result with one click for use anywhere."
whyUse:
  title: "Why Use BMI Calculator?"
  items:
    - icon: "activity"
      title: "Health Awareness"
      desc: "Quickly check if your weight is in a healthy range for your height."
    - icon: "zap"
      title: "Instant Results"
      desc: "Calculate your BMI instantly—no signup or installation required."
    - icon: "globe"
      title: "Universal Use"
      desc: "Great for fitness, health tracking, and personal wellness."
    - icon: "copy"
      title: "One-Click Copy"
      desc: "Copy your result to the clipboard for use anywhere."
howToUse:
  title: "How to Use BMI Calculator"
  steps:
    - icon: "edit"
      title: "Enter Height & Weight"
      desc: "Type your height in centimeters and weight in kilograms."
    - icon: "activity"
      title: "Calculate"
      desc: "Click Calculate to see your BMI and health category."
    - icon: "copy"
      title: "Copy Result"
      desc: "Copy the result to your clipboard with one click."
features:
  - "Calculate your BMI using height and weight"
  - "Shows your BMI value and health category"
  - "Responsive design for all devices"
  - "No server-side processing—everything runs in your browser"
  - "Copy your result with one click"
  - "Great for fitness, health, and wellness tracking"
faq:
  - q: "What is BMI?"
    a: "BMI (Body Mass Index) is a number calculated from your height and weight. It is used to categorize underweight, normal weight, overweight, and obesity."
  - q: "How is BMI calculated?"
    a: "BMI is calculated as weight (kg) divided by height (m) squared. For example, 70kg and 170cm: 70 / (1.7 * 1.7) = 24.22."
  - q: "Is BMI accurate for everyone?"
    a: "BMI is a general guideline and may not be accurate for athletes, children, or the elderly. Always consult a healthcare professional for personalized advice."
  - q: "Is my data safe?"
    a: "All calculations are done in your browser. No data is sent to any server."
  - q: "Can I use this on my phone?"
    a: "Yes, the tool is fully responsive and works on all modern devices."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-6">
            <!-- Input Area -->
            <form id="bmiForm" class="flex flex-col md:flex-row gap-4 items-end">
              <div class="flex-1 w-full">
                <label class="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                <input type="number" id="heightInput" class="w-full border rounded-lg px-3 py-2" placeholder="Enter height in cm" required>
              </div>
              <div class="flex-1 w-full">
                <label class="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                <input type="number" id="weightInput" class="w-full border rounded-lg px-3 py-2" placeholder="Enter weight in kg" required>
              </div>
              <button type="submit" id="calcBtn" class="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg">
                <i data-lucide="activity" class="w-5 h-5"></i>
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
      renderToolSections('BMI_CALCULATOR_DATA');
    });

    // BMI Calculator functionality
    const form = document.getElementById('bmiForm');
    const heightInput = document.getElementById('heightInput');
    const weightInput = document.getElementById('weightInput');
    const resultArea = document.getElementById('resultArea');
    const resultText = document.getElementById('resultText');
    const copyBtn = document.getElementById('copyBtn');
    const errorMsg = document.getElementById('errorMsg');

    function getBMICategory(bmi) {
      if (bmi < 18.5) return 'Underweight';
      if (bmi < 25) return 'Normal weight';
      if (bmi < 30) return 'Overweight';
      return 'Obesity';
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      errorMsg.classList.add('hidden');
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);
      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        errorMsg.textContent = 'Please enter valid positive numbers for both fields.';
        errorMsg.classList.remove('hidden');
        resultArea.classList.add('hidden');
        return;
      }
      const heightM = height / 100;
      const bmi = weight / (heightM * heightM);
      const category = getBMICategory(bmi);
      resultText.textContent = `BMI: ${bmi.toFixed(2)} (${category})`;
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
