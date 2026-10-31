---
id: "discount-calculator"
title: "Discount Calculator - Free Online Tool | CSRGO Tools"
name: "Discount Calculator"
description: "Calculate discounts"
url: "/tools/discount-calculator/"
category: "math-calculators"
icon: "tag"
color: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
keywords:
  - "discount calculator"
  - "discount calculator online"
  - "free discount calculator"
hero:
  icon: "tag"
  iconBg: "gradient-bg"
  title: "Discount Calculator"
  subtitle: "Quickly calculate discount amounts and final prices for any product or service"
  features:
    - icon: "tag"
      color: "text-blue-500"
      label: "Discount Calculation"
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Results"
    - icon: "globe"
      color: "text-green-500"
      label: "Browser-based"
whatIs:
  title: "What is Discount Calculator?"
  content: "The Discount Calculator is a free online tool that helps you quickly find the discount amount and final price after applying a discount percentage. Perfect for shopping, sales, and budgeting.<br><br><strong>Simple and fast:</strong> Enter the original price and discount percentage, and get the result instantly. Copy the result with one click for use anywhere."
whyUse:
  title: "Why Use Discount Calculator?"
  items:
    - icon: "tag"
      title: "Save Money"
      desc: "See exactly how much you save on any purchase."
    - icon: "zap"
      title: "Instant Results"
      desc: "Calculate discounts and final prices instantly—no signup or installation required."
    - icon: "globe"
      title: "Universal Use"
      desc: "Great for shopping, sales, and budgeting."
    - icon: "copy"
      title: "One-Click Copy"
      desc: "Copy your result to the clipboard for use anywhere."
howToUse:
  title: "How to Use Discount Calculator"
  steps:
    - icon: "edit"
      title: "Enter Price & Discount"
      desc: "Type the original price and the discount percentage."
    - icon: "percent"
      title: "Calculate"
      desc: "Click Calculate to see the discount amount and final price."
    - icon: "copy"
      title: "Copy Result"
      desc: "Copy the result to your clipboard with one click."
features:
  - "Calculate discount amount and final price instantly"
  - "Works with any price and discount percentage"
  - "Responsive design for all devices"
  - "No server-side processing—everything runs in your browser"
  - "Copy your result with one click"
  - "Perfect for shopping, sales, and budgeting"
faq:
  - q: "What can I use this calculator for?"
    a: "You can use it to calculate discounts on products, services, or any purchase."
  - q: "Does it work with decimals?"
    a: "Yes, you can enter decimal values for both the price and the discount percentage."
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
            <form id="discountForm" class="flex flex-col md:flex-row gap-4 items-end">
              <div class="flex-1 w-full">
                <label class="block text-sm font-medium text-gray-700 mb-1">Original Price</label>
                <input type="number" id="priceInput" class="w-full border rounded-lg px-3 py-2" placeholder="Enter original price" required>
              </div>
              <div class="flex-1 w-full">
                <label class="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
                <input type="number" id="discountInput" class="w-full border rounded-lg px-3 py-2" placeholder="Enter discount percentage" required>
              </div>
              <button type="submit" id="calcBtn" class="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg">
                <i data-lucide="percent" class="w-5 h-5"></i>
                Calculate
              </button>
            </form>

            <!-- Result Area -->
            <div id="resultArea" class="hidden">
              <label class="block text-sm font-medium text-gray-700 mb-2">Result</label>
              <div class="border rounded-lg p-4 bg-gray-50 min-h-[60px] break-words text-lg font-semibold flex flex-col md:flex-row md:items-center md:gap-8">
                <div class="flex-1 space-y-2">
                  <div class="flex items-center gap-2 text-blue-700">
                    <i data-lucide="tag" class="w-5 h-5"></i>
                    <span>Discount Amount:</span>
                    <span class="font-bold text-xl">?<span id="discountValue">0</span></span>
                  </div>
                  <div class="flex items-center gap-2 text-green-700">
                    <i data-lucide="shopping-cart" class="w-5 h-5"></i>
                    <span>Final Price:</span>
                    <span class="font-bold">?<span id="finalPriceValue">0</span></span>
                  </div>
                </div>
              </div>
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
      renderToolSections('DISCOUNT_CALCULATOR_DATA');
    });

    // Discount Calculator functionality
    const form = document.getElementById('discountForm');
    const priceInput = document.getElementById('priceInput');
    const discountInput = document.getElementById('discountInput');
    const resultArea = document.getElementById('resultArea');
    const discountValue = document.getElementById('discountValue');
    const finalPriceValue = document.getElementById('finalPriceValue');
    const copyBtn = document.getElementById('copyBtn');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      errorMsg.classList.add('hidden');
      const price = parseFloat(priceInput.value);
      const discount = parseFloat(discountInput.value);
      if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0) {
        errorMsg.textContent = 'Please enter valid numbers for both fields.';
        errorMsg.classList.remove('hidden');
        resultArea.classList.add('hidden');
        return;
      }
      const discountAmt = price * (discount / 100);
      const finalPrice = price - discountAmt;
      discountValue.textContent = discountAmt.toFixed(2);
      finalPriceValue.textContent = finalPrice.toFixed(2);
      resultArea.classList.remove('hidden');
    });

    copyBtn.addEventListener('click', () => {
      const resultString = `Discount Amount: ?${discountValue.textContent} | Final Price: ?${finalPriceValue.textContent}`;
      if (!discountValue.textContent) return;
      navigator.clipboard.writeText(resultString).then(() => {
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
