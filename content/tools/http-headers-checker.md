---
id: "http-headers-checker"
title: "HTTP Headers Checker - Free Online Tool | CSRGO Tools"
name: "HTTP Headers Checker"
description: "Inspect HTTP response headers for any web URL"
url: "/tools/http-headers-checker/"
category: "developer-tools"
icon: "globe"
color: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"
keywords:
  - "http headers checker"
  - "check http headers"
hero:
  icon: "globe"
  iconBg: "gradient-bg"
  title: "HTTP Headers Checker"
  subtitle: "Inspect HTTP response headers and status codes for any URL"
---

{{< rawhtml >}}
<div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
  <div class="space-y-6">
    <form id="headersForm" class="flex flex-col md:flex-row gap-4 items-end">
      <div class="flex-1 w-full">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Enter URL</label>
        <input type="url" id="urlInput" placeholder="https://example.com" class="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 text-gray-900 dark:text-white" required>
      </div>
      <button type="submit" id="checkBtn" class="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg">
        <i data-lucide="search" class="w-5 h-5"></i>
        <span>Check Headers</span>
      </button>
    </form>
    <div id="resultsArea" class="hidden space-y-4">
      <h3 class="font-bold text-lg text-gray-900 dark:text-white">Response Headers</h3>
      <pre id="headersOutput" class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-sm font-mono overflow-x-auto text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700"></pre>
    </div>
  </div>
</div>
<script>
  if (window.lucide) lucide.createIcons();
  const form = document.getElementById('headersForm');
  const urlInput = document.getElementById('urlInput');
  const resultsArea = document.getElementById('resultsArea');
  const headersOutput = document.getElementById('headersOutput');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const targetUrl = urlInput.value.trim();
      if (!targetUrl) return;
      headersOutput.textContent = 'Fetching headers...';
      resultsArea.classList.remove('hidden');
      try {
        const res = await fetch(targetUrl, { method: 'HEAD', mode: 'cors' });
        let out = `Status: ${res.status} ${res.statusText}\n\n`;
        res.headers.forEach((val, key) => {
          out += `${key}: ${val}\n`;
        });
        headersOutput.textContent = out || 'Headers received (empty list). Note: Cross-origin restrictions may hide certain headers in the browser.';
      } catch (err) {
        headersOutput.textContent = `Could not fetch headers directly due to CORS restrictions on "${targetUrl}". Tip: Test with CORS-friendly APIs or endpoints.`;
      }
    });
  }
</script>
{{< /rawhtml >}}
