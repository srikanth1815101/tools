---
id: "speed-converter"
title: "Speed Converter - Free Online Tool | CSRGO Tools"
name: "Speed Converter"
description: "Convert between speed units"
url: "/tools/speed-converter/"
category: "unit-converters"
icon: "gauge"
color: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
keywords:
  - "speed converter"
  - "speed converter online"
  - "free speed converter"
hero:
  icon: "gauge"
  iconBg: "gradient-bg"
  title: "Speed Converter"
  subtitle: "Convert between different units of speed with precision and ease"
  features:
    - icon: "calculator"
      color: "text-blue-500"
      label: "Precise Conversion"
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Results"
    - icon: "globe"
      color: "text-green-500"
      label: "Multiple Units"
whatIs:
  title: "What is Speed Converter?"
  content: "The Speed Converter is a free online tool that allows you to convert between different units of speed measurement. Whether you need to convert kilometers per hour to miles per hour, meters per second to knots, or any other speed unit, this tool provides accurate and instant conversions.<br><br><strong>Supported units:</strong> The converter supports a wide range of speed units including metric (km/h, m/s), imperial (mph, ft/s), nautical (knots), and other common speed measurements, making it perfect for various applications from everyday calculations to professional use."
whyUse:
  title: "Why Use Speed Converter?"
  items:
    - icon: "calculator"
      title: "Precise Calculations"
      desc: "Get accurate conversions between different units of speed with high precision."
    - icon: "zap"
      title: "Instant Results"
      desc: "Convert measurements instantly without any delay or complex calculations."
    - icon: "globe"
      title: "Multiple Units"
      desc: "Support for various speed units makes it versatile for international use."
    - icon: "smartphone"
      title: "Mobile Friendly"
      desc: "Use the converter on any device - desktop, tablet, or mobile phone."
howToUse:
  title: "How to Use Speed Converter"
  steps:
    - icon: "type"
      title: "Enter Value"
      desc: "Type the speed value you want to convert in the input field."
    - icon: "list"
      title: "Select Units"
      desc: "Choose the source unit and target unit from the dropdown menus."
    - icon: "calculator"
      title: "Get Result"
      desc: "View the converted value instantly as you type or change units."
features:
  - "Convert between metric and imperial units"
  - "Support for km/h, m/s, mph, ft/s, knots"
  - "Real-time conversion as you type"
  - "Mobile-friendly interface"
  - "No installation required"
  - "Free to use"
  - "Accurate calculations"
  - "Common speed presets"
faq:
  - q: "What units of speed are supported?"
    a: "The converter supports various speed units including kilometers per hour (km/h), meters per second (m/s), miles per hour (mph), feet per second (ft/s), and knots."
  - q: "How accurate are the conversions?"
    a: "The conversions are highly accurate, using standard conversion factors for precise calculations."
  - q: "Can I use this tool on mobile devices?"
    a: "Yes, the Speed Converter is fully responsive and works perfectly on all devices including mobile phones and tablets."
  - q: "Is there a limit to the values I can convert?"
    a: "No, you can convert any speed value, from very slow to very fast measurements."
  - q: "Do I need to install anything?"
    a: "No, this is a web-based tool that works directly in your browser without any installation required."
---

{{< rawhtml >}}
<!-- Converter Tool Section -->
    <!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-4 sm:p-6 md:p-8">
          <div class="grid grid-cols-1 gap-6">
            <!-- Input Section -->
            <div class="space-y-4">
              <label class="block text-sm font-medium text-gray-700">From</label>
              <div class="flex flex-col sm:flex-row gap-3">
                <input type="number" id="fromValue" class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" placeholder="Enter value">
                <select id="fromUnit" class="w-full sm:w-48 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
                  <option value="kmh">Kilometers per hour (km/h)</option>
                  <option value="ms">Meters per second (m/s)</option>
                  <option value="mph">Miles per hour (mph)</option>
                  <option value="fts">Feet per second (ft/s)</option>
                  <option value="knots">Knots (kn)</option>
                  <option value="mach">Mach (M)</option>
                </select>
              </div>
            </div>

            <!-- Output Section -->
            <div class="space-y-4">
              <label class="block text-sm font-medium text-gray-700">To</label>
              <div class="flex flex-col sm:flex-row gap-3">
                <input type="number" id="toValue" class="w-full rounded-lg border border-gray-300 px-4 py-2 bg-gray-50" readonly>
                <select id="toUnit" class="w-full sm:w-48 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
                  <option value="kmh">Kilometers per hour (km/h)</option>
                  <option value="ms">Meters per second (m/s)</option>
                  <option value="mph">Miles per hour (mph)</option>
                  <option value="fts">Feet per second (ft/s)</option>
                  <option value="knots">Knots (kn)</option>
                  <option value="mach">Mach (M)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Quick Conversion Buttons -->
          <div class="mt-8">
            <h3 class="text-sm font-medium text-gray-700 mb-4">Common Speed Conversions</h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <button class="quick-convert px-3 sm:px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors" data-from="kmh" data-to="mph">km/h ? mph</button>
              <button class="quick-convert px-3 sm:px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors" data-from="mph" data-to="kmh">mph ? km/h</button>
              <button class="quick-convert px-3 sm:px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors" data-from="ms" data-to="kmh">m/s ? km/h</button>
              <button class="quick-convert px-3 sm:px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors" data-from="knots" data-to="kmh">knots ? km/h</button>
            </div>
          </div>

          <!-- Speed Reference Table -->
          <div class="mt-8">
            <h3 class="text-sm font-medium text-gray-700 mb-4">Common Speed References</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="px-4 py-2 text-left font-medium text-gray-700">Speed</th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700">km/h</th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700">mph</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-4 py-2">Walking pace</td>
                    <td class="px-4 py-2">5</td>
                    <td class="px-4 py-2">3.1</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2">Running pace</td>
                    <td class="px-4 py-2">12</td>
                    <td class="px-4 py-2">7.5</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2">City speed limit</td>
                    <td class="px-4 py-2">50</td>
                    <td class="px-4 py-2">31</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2">Highway speed limit</td>
                    <td class="px-4 py-2">120</td>
                    <td class="px-4 py-2">75</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('SPEED_CONVERTER_DATA');
    });

    // Conversion factors (to m/s)
    const conversionFactors = {
      kmh: 0.277778,  // km/h to m/s
      ms: 1,          // m/s to m/s
      mph: 0.44704,   // mph to m/s
      fts: 0.3048,    // ft/s to m/s
      knots: 0.514444, // knots to m/s
      mach: 340.3     // mach to m/s (at sea level)
    };

    // Elements
    const fromValue = document.getElementById('fromValue');
    const fromUnit = document.getElementById('fromUnit');
    const toValue = document.getElementById('toValue');
    const toUnit = document.getElementById('toUnit');
    const quickConvertButtons = document.querySelectorAll('.quick-convert');

    // Convert function
    function convert() {
      const value = parseFloat(fromValue.value);
      if (isNaN(value)) {
        toValue.value = '';
        return;
      }

      // Convert to m/s first, then to target unit
      const metersPerSecond = value * conversionFactors[fromUnit.value];
      const result = metersPerSecond / conversionFactors[toUnit.value];
      
      // Format result to avoid scientific notation and limit decimal places
      toValue.value = result.toFixed(6).replace(/\.?0+$/, '');
    }

    // Event listeners
    fromValue.addEventListener('input', convert);
    fromUnit.addEventListener('change', convert);
    toUnit.addEventListener('change', convert);

    // Quick conversion buttons
    quickConvertButtons.forEach(button => {
      button.addEventListener('click', () => {
        fromUnit.value = button.dataset.from;
        toUnit.value = button.dataset.to;
        convert();
      });
    });

    // Initialize with default values
    fromValue.value = '1';
    convert();
  </script>
{{< /rawhtml >}}
