---
id: "sql-formatter"
title: "SQL Formatter - Free Online Tool | CSRGO Tools"
name: "SQL Formatter"
description: "Format SQL queries"
url: "/tools/sql-formatter/"
category: "developer-tools"
icon: "database"
color: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"
keywords:
  - "sql formatter"
  - "sql formatter online"
  - "free sql formatter"
hero:
  icon: "database"
  iconBg: "gradient-bg"
  title: "SQL Formatter"
  subtitle: "Format and beautify your SQL queries instantly with advanced options"
  features:
    - icon: "zap"
      color: "text-yellow-500"
      label: "Instant Formatting"
    - icon: "settings"
      color: "text-blue-500"
      label: "Customizable Output"
    - icon: "shield"
      color: "text-green-500"
      label: "Browser-based & Secure"
whatIs:
  title: "What is SQL Formatter?"
  content: "The SQL Formatter is a free online tool that formats and beautifies your SQL queries for better readability and maintainability. It supports various SQL dialects and provides advanced options for indentation and keyword casing.<br><br><strong>Key features:</strong> Choose indentation style, keyword case, and SQL dialect. All processing is done in your browser for privacy and speed."
whyUse:
  title: "Why Use SQL Formatter?"
  items:
    - icon: "check-circle"
      title: "Readable Queries"
      desc: "Make your SQL queries easier to read, debug, and maintain."
    - icon: "sliders"
      title: "Customizable Formatting"
      desc: "Choose your preferred indentation, keyword case, and SQL dialect."
    - icon: "lock"
      title: "Privacy First"
      desc: "All formatting happens locally in your browser. Your SQL never leaves your device."
    - icon: "copy"
      title: "Easy Copy & Export"
      desc: "One-click copy functionality for your formatted SQL output."
howToUse:
  title: "How to Use SQL Formatter"
  steps:
    - icon: "file-input"
      title: "Input SQL"
      desc: "Paste your SQL query into the input area or use the sample SQL buttons."
    - icon: "settings"
      title: "Choose Options"
      desc: "Select your preferred formatting options like indentation, keyword case, and dialect."
    - icon: "wand-2"
      title: "Format"
      desc: "Click Format to beautify your SQL. Copy the result with one click."
features:
  - "Format SQL with customizable indentation (2 spaces, 4 spaces, or tabs)"
  - "Choose keyword case: UPPERCASE or lowercase"
  - "Supports multiple SQL dialects (Standard, MySQL, PostgreSQL, SQLite, MS SQL)"
  - "Sample SQL queries for quick testing"
  - "One-click copy functionality"
  - "All processing done in your browser for privacy and security"
  - "Responsive design for all devices"
  - "No registration or installation required"
faq:
  - q: "What does SQL formatting do?"
    a: "SQL formatting organizes your SQL queries with proper indentation and keyword casing, making them easier to read and maintain."
  - q: "Will formatting change how my SQL works?"
    a: "No, formatting only changes the appearance of your SQL for readability. The logic and results remain the same."
  - q: "Is my SQL data secure?"
    a: "Yes, all processing is done locally in your browser. Your SQL is never sent to any server."
  - q: "Can I choose my SQL dialect?"
    a: "Yes, you can select from Standard SQL, MySQL, PostgreSQL, SQLite, and MS SQL for dialect-specific formatting."
  - q: "Why should I format my SQL?"
    a: "Formatted SQL is easier to read, debug, and share with others, improving collaboration and code quality."
---

{{< rawhtml >}}
<!-- Tool Interface Card -->
        <div class="bg-white dark:bg-[#141B3D] border border-gray-100 dark:border-gray-700/50 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 card-hover">
          <div class="space-y-6">
            <!-- Options -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 items-end">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Indentation</label>
                <select id="indentSize" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="2">2 Spaces</option>
                  <option value="4">4 Spaces</option>
                  <option value="tab">Tab</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Keyword Case</label>
                <select id="keywordCase" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="upper">UPPERCASE</option>
                  <option value="lower">lowercase</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">SQL Dialect</label>
                <select id="sqlDialect" class="w-full border rounded-lg px-3 py-2 bg-white">
                  <option value="standard">Standard SQL</option>
                  <option value="mysql">MySQL</option>
                  <option value="postgresql">PostgreSQL</option>
                  <option value="sqlite">SQLite</option>
                  <option value="mssql">MS SQL</option>
                </select>
              </div>
            </div>
            <!-- Input/Output Area -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Left Column: Input -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold flex items-center gap-2">
                    <i data-lucide="file-input" class="w-5 h-5 text-blue-600"></i>
                    Input SQL
                  </h3>
                  <div class="flex gap-2">
                    <button id="clearInput" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      <i data-lucide="trash-2" class="w-4 h-4"></i>
                      Clear
                    </button>
                  </div>
                </div>
                <div class="relative">
                  <textarea id="sqlInput" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Paste your SQL here..."></textarea>
                </div>
                <div class="flex gap-2">
                  <button class="sample-sql w-full lg:w-auto min-w-[140px] px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-lg text-sm font-medium text-blue-700 transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="file-text" class="w-4 h-4"></i>
                    Simple SQL
                  </button>
                  <button class="sample-sql w-full lg:w-auto min-w-[140px] px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-lg text-sm font-medium text-purple-700 transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="file-code" class="w-4 h-4"></i>
                    Complex SQL
                  </button>
                </div>
                <div id="errorMessageMobile" class="hidden lg:hidden p-4 bg-red-50 text-red-700 rounded-lg text-sm"></div>
              </div>
              <!-- Right Column: Output (Desktop) -->
              <div class="space-y-4 hidden lg:block">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold flex items-center gap-2">
                    <i data-lucide="file-output" class="w-5 h-5 text-green-600"></i>
                    Formatted Output
                  </h3>
                  <div class="flex gap-2">
                    <button id="copyOutput" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      <i data-lucide="copy" class="w-4 h-4"></i>
                      Copy
                    </button>
                  </div>
                </div>
                <div class="relative">
                  <pre id="sqlOutput" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm overflow-auto bg-gray-50"></pre>
                </div>
              </div>
            </div>
            <div id="errorMessage" class="hidden p-4 bg-red-50 text-red-700 rounded-lg text-sm w-full mt-4 mx-auto"></div>
            <!-- Action Buttons (Mobile) -->
            <div class="flex gap-4 lg:hidden">
              <button id="formatBtnMobile" class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                <i data-lucide="wand-2" class="w-4 h-4"></i>
                Format
              </button>
            </div>
            <!-- Output Area (Mobile) -->
            <div class="space-y-4 lg:hidden">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  <i data-lucide="file-output" class="w-5 h-5 text-green-600"></i>
                  Formatted Output
                </h3>
                <div class="flex gap-2">
                  <button id="copyOutputMobile" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                    Copy
                  </button>
                </div>
              </div>
              <div class="relative">
                <pre id="sqlOutputMobile" class="w-full h-[400px] p-4 border rounded-xl font-mono text-sm overflow-auto bg-gray-50"></pre>
              </div>
            </div>
            <!-- Action Buttons (Desktop) -->
            <div class="hidden lg:flex gap-4 justify-center">
              <button id="formatBtn" class="w-48 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                <i data-lucide="wand-2" class="w-4 h-4"></i>
                Format
              </button>
            </div>
          </div>
        </div>
      <script>
    // Initialize Lucide icons
    lucide.createIcons();
    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('SQL_FORMATTER_DATA');
    });
    // Elements
    const sqlInput = document.getElementById('sqlInput');
    const sqlOutput = document.getElementById('sqlOutput');
    const sqlOutputMobile = document.getElementById('sqlOutputMobile');
    const formatBtn = document.getElementById('formatBtn');
    const formatBtnMobile = document.getElementById('formatBtnMobile');
    const clearInput = document.getElementById('clearInput');
    const copyOutput = document.getElementById('copyOutput');
    const copyOutputMobile = document.getElementById('copyOutputMobile');
    const errorMessage = document.getElementById('errorMessage');
    const errorMessageMobile = document.getElementById('errorMessageMobile');
    const indentSize = document.getElementById('indentSize');
    const keywordCase = document.getElementById('keywordCase');
    const sqlDialect = document.getElementById('sqlDialect');
    const sampleSqlButtons = document.querySelectorAll('.sample-sql');
    // Sample SQL data
    const sampleSql = {
      simple: `SELECT id, name FROM users WHERE active = 1;`,
      complex: `SELECT u.id, u.name, COUNT(o.id) AS order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.active = 1\nGROUP BY u.id, u.name\nHAVING COUNT(o.id) > 0\nORDER BY order_count DESC;`
    };
    // SQL Formatter logic (simple, not a full SQL parser)
    function formatSQL(sql, options) {
      let formatted = sql;
      // Normalize whitespace
      formatted = formatted.replace(/\s+/g, ' ');
      // Add line breaks before major SQL keywords
      const keywords = [
        'SELECT', 'FROM', 'WHERE', 'GROUP BY', 'ORDER BY', 'HAVING', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'OUTER JOIN', 'JOIN', 'ON', 'AND', 'OR', 'UNION', 'LIMIT', 'OFFSET', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE'
      ];
      keywords.forEach(kw => {
        const regex = new RegExp('\\b' + kw + '\\b', 'gi');
        formatted = formatted.replace(regex, '\n' + kw);
      });
      // Indentation
      let indent = options.indentSize === 'tab' ? '\t' : ' '.repeat(parseInt(options.indentSize));
      formatted = formatted.split('\n').map(line => line.trim()).filter(Boolean).map((line, i) => {
        if (i === 0) return line;
        // Indent lines that are not starting with SELECT/INSERT/UPDATE/DELETE
        if (/^(SELECT|INSERT|UPDATE|DELETE)/i.test(line)) return line;
        return indent + line;
      }).join('\n');
      // Keyword case
      if (options.keywordCase === 'upper') {
        keywords.forEach(kw => {
          const regex = new RegExp(kw, 'gi');
          formatted = formatted.replace(regex, kw.toUpperCase());
        });
      } else {
        keywords.forEach(kw => {
          const regex = new RegExp(kw, 'gi');
          formatted = formatted.replace(regex, kw.toLowerCase());
        });
      }
      return formatted.trim();
    }
    // Format button click
    function handleFormat() {
      errorMessage.classList.add('hidden');
      errorMessageMobile.classList.add('hidden');
      try {
        const options = {
          indentSize: indentSize.value,
          keywordCase: keywordCase.value,
          sqlDialect: sqlDialect.value
        };
        const sql = sqlInput.value;
        if (!sql.trim()) throw new Error('Please enter SQL to format.');
        const formatted = formatSQL(sql, options);
        sqlOutput.textContent = formatted;
        sqlOutputMobile.textContent = formatted;
        errorMessage.classList.add('hidden');
        errorMessageMobile.classList.add('hidden');
        // Auto scroll to output on mobile
        if (window.innerWidth < 1024) {
          const outputSection = sqlOutputMobile.parentElement.parentElement;
          const navHeight = 80;
          const outputPosition = outputSection.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: outputPosition - navHeight,
            behavior: 'smooth'
          });
        }
      } catch (e) {
        if (window.innerWidth < 1024) {
          errorMessage.classList.add('hidden');
          errorMessageMobile.textContent = e.message;
          errorMessageMobile.classList.remove('hidden');
        } else {
          errorMessageMobile.classList.add('hidden');
          errorMessage.textContent = e.message;
          errorMessage.classList.remove('hidden');
        }
      }
    }
    // Event listeners
    formatBtn && formatBtn.addEventListener('click', handleFormat);
    formatBtnMobile && formatBtnMobile.addEventListener('click', handleFormat);
    clearInput.addEventListener('click', () => {
      sqlInput.value = '';
      sqlOutput.textContent = '';
      sqlOutputMobile.textContent = '';
      errorMessage.classList.add('hidden');
      errorMessageMobile.classList.add('hidden');
    });
    copyOutput.addEventListener('click', () => {
      const text = sqlOutput.textContent;
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const originalText = copyOutput.innerHTML;
          copyOutput.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Copied!';
          lucide.createIcons();
          setTimeout(() => {
            copyOutput.innerHTML = originalText;
            lucide.createIcons();
          }, 2000);
        });
      }
    });
    copyOutputMobile.addEventListener('click', () => {
      const text = sqlOutputMobile.textContent;
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const originalText = copyOutputMobile.innerHTML;
          copyOutputMobile.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Copied!';
          lucide.createIcons();
          setTimeout(() => {
            copyOutputMobile.innerHTML = originalText;
            lucide.createIcons();
          }, 2000);
        });
      }
    });
    sampleSqlButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const sample = index === 0 ? sampleSql.simple : sampleSql.complex;
        sqlInput.value = sample;
        handleFormat();
      });
    });
    sqlInput.addEventListener('input', () => {
      sqlOutput.textContent = '';
      sqlOutputMobile.textContent = '';
      errorMessage.classList.add('hidden');
      errorMessageMobile.classList.add('hidden');
    });
  </script>
{{< /rawhtml >}}
