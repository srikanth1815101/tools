---
id: "tip-calculator"
title: "Tip Calculator - Free Online Tool | CSRGO Tools"
name: "Tip Calculator"
description: "Calculate tips and splits"
url: "/tools/tip-calculator/"
category: "math-calculators"
icon: "hand-platter"
color: "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
keywords:
  - "tip calculator"
  - "tip calculator online"
  - "free tip calculator"
hero:
  icon: "hand-platter"
  iconBg: "gradient-bg"
  title: "Tip Calculator"
  subtitle: "Calculate tips and split bills easily with our free online tool"
  features:
    - icon: "calculator"
      color: "text-blue-500"
      label: "Quick Calculation"
    - icon: "users"
      color: "text-yellow-500"
      label: "Split Bills"
    - icon: "globe"
      color: "text-green-500"
      label: "Browser-based"
whatIs:
  title: "What is Tip Calculator?"
  content: "The Tip Calculator is a free online tool that helps you calculate tips and split bills among multiple people. Whether you're dining out with friends or calculating service charges, this tool makes it easy to determine the exact amount each person should pay.<br><br><strong>Simple and fast:</strong> Enter your bill amount, select a tip percentage, and specify the number of people. Get instant results for the tip amount, total bill, and amount per person."
whyUse:
  title: "Why Use Tip Calculator?"
  items:
    - icon: "calculator"
      title: "Quick Calculations"
      desc: "Calculate tips and split bills instantly with just a few clicks."
    - icon: "users"
      title: "Split Bills"
      desc: "Easily divide the total amount among any number of people."
    - icon: "globe"
      title: "Universal Use"
      desc: "Perfect for restaurants, cafes, and any service where tipping is customary."
    - icon: "copy"
      title: "Easy Sharing"
      desc: "Copy and share results with your group instantly."
howToUse:
  title: "How to Use Tip Calculator"
  steps:
    - icon: "edit"
      title: "Enter Bill Amount"
      desc: "Type in the total bill amount."
    - icon: "percent"
      title: "Select Tip"
      desc: "Choose a tip percentage or enter a custom amount."
    - icon: "users"
      title: "Add People"
      desc: "Specify how many people are splitting the bill."
    - icon: "calculator"
      title: "Get Results"
      desc: "View the tip amount, total bill, and amount per person."
features:
  - "Calculate tips for any bill amount"
  - "Choose from preset tip percentages or enter custom amounts"
  - "Split bills among any number of people"
  - "View detailed breakdown of amounts"
  - "Copy results with one click"
  - "Works offline after loading"
  - "Responsive design for all devices"
faq:
  - q: "How do I calculate the tip?"
    a: "Enter your bill amount, select a tip percentage (or enter a custom percentage), and specify the number of people. The tool will calculate the tip amount, total bill, and amount per person."
  - q: "Can I use custom tip percentages?"
    a: "Yes, you can either select from preset percentages (5%, 10%, 15%, 20%) or enter any custom percentage you prefer."
  - q: "Is this tool free to use?"
    a: "Yes, the Tip Calculator is completely free to use with no hidden charges or subscriptions."
  - q: "Can I use this on my phone?"
    a: "Yes, the tool is fully responsive and works on all modern devices, including smartphones and tablets."
  - q: "Do I need an internet connection?"
    a: "You only need an internet connection to load the tool initially. Once loaded, it works offline as all calculations are done in your browser."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-6">
            <!-- Input Area -->
            <form id="tipForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Bill Amount</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input type="number" id="billAmount" class="w-full border rounded-lg pl-8 pr-3 py-2" placeholder="0.00" min="0" step="0.01" required>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
                  <input type="number" id="numPeople" class="w-full border rounded-lg px-3 py-2" placeholder="1" min="1" value="1" required>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tip Percentage</label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button type="button" class="tip-btn bg-gray-100 hover:bg-blue-50 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all" data-tip="5">5%</button>
                  <button type="button" class="tip-btn bg-gray-100 hover:bg-blue-50 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all" data-tip="10">10%</button>
                  <button type="button" class="tip-btn bg-gray-100 hover:bg-blue-50 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all" data-tip="15">15%</button>
                  <button type="button" class="tip-btn bg-gray-100 hover:bg-blue-50 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all" data-tip="20">20%</button>
                </div>
                <div class="mt-3">
                  <input type="number" id="customTip" class="w-full border rounded-lg px-3 py-2" placeholder="Custom tip percentage" min="0" max="100">
                </div>
              </div>

              <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg">
                <i data-lucide="calculator" class="w-5 h-5"></i>
                Calculate Tip
              </button>
            </form>

            <!-- Result Area -->
            <div id="resultArea" class="hidden space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border rounded-lg p-4 bg-gray-50">
                  <div class="text-sm text-gray-600 mb-1">Tip Amount</div>
                  <div class="text-2xl font-semibold text-blue-700" id="tipAmount">$0.00</div>
                </div>
                <div class="border rounded-lg p-4 bg-gray-50">
                  <div class="text-sm text-gray-600 mb-1">Total Bill</div>
                  <div class="text-2xl font-semibold text-blue-700" id="totalBill">$0.00</div>
                </div>
              </div>
              <div class="border rounded-lg p-4 bg-gray-50">
                <div class="text-sm text-gray-600 mb-1">Amount Per Person</div>
                <div class="text-2xl font-semibold text-blue-700" id="perPerson">$0.00</div>
              </div>
              <div class="flex flex-wrap gap-4">
                <button id="copyBtn" class="flex-1 min-w-[140px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap">
                  <i data-lucide="copy" class="w-5 h-5 flex-shrink-0"></i>
                  <span>Copy Results</span>
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
      renderToolSections('TIP_CALCULATOR_DATA');
    });

    // Tip Calculator functionality
    const form = document.getElementById('tipForm');
    const billAmount = document.getElementById('billAmount');
    const numPeople = document.getElementById('numPeople');
    const customTip = document.getElementById('customTip');
    const tipBtns = document.querySelectorAll('.tip-btn');
    const resultArea = document.getElementById('resultArea');
    const tipAmount = document.getElementById('tipAmount');
    const totalBill = document.getElementById('totalBill');
    const perPerson = document.getElementById('perPerson');
    const copyBtn = document.getElementById('copyBtn');
    const errorMsg = document.getElementById('errorMsg');

    let selectedTipPercentage = 0;

    // Handle tip percentage button clicks
    tipBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tipBtns.forEach(b => b.classList.remove('bg-blue-100', 'text-blue-700'));
        btn.classList.add('bg-blue-100', 'text-blue-700');
        selectedTipPercentage = parseFloat(btn.dataset.tip);
        customTip.value = '';
      });
    });

    // Handle custom tip input
    customTip.addEventListener('input', () => {
      tipBtns.forEach(btn => btn.classList.remove('bg-blue-100', 'text-blue-700'));
      selectedTipPercentage = parseFloat(customTip.value) || 0;
    });

    // Calculate and display results
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      errorMsg.classList.add('hidden');

      const bill = parseFloat(billAmount.value) || 0;
      const people = parseInt(numPeople.value) || 1;

      if (bill <= 0) {
        errorMsg.textContent = 'Please enter a valid bill amount.';
        errorMsg.classList.remove('hidden');
        resultArea.classList.add('hidden');
        return;
      }

      if (people < 1) {
        errorMsg.textContent = 'Number of people must be at least 1.';
        errorMsg.classList.remove('hidden');
        resultArea.classList.add('hidden');
        return;
      }

      const tip = (bill * selectedTipPercentage) / 100;
      const total = bill + tip;
      const perPersonAmount = total / people;

      tipAmount.textContent = `$${tip.toFixed(2)}`;
      totalBill.textContent = `$${total.toFixed(2)}`;
      perPerson.textContent = `$${perPersonAmount.toFixed(2)}`;
      resultArea.classList.remove('hidden');
    });

    // Copy results
    copyBtn.addEventListener('click', () => {
      const text = `Bill: $${billAmount.value}\nTip (${selectedTipPercentage}%): ${tipAmount.textContent}\nTotal: ${totalBill.textContent}\nPer Person: ${perPerson.textContent}`;
      navigator.clipboard.writeText(text).then(() => {
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
