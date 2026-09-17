const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, '..', 'frontend', 'public', 'shyara.png');
const htmlPath = path.join(__dirname, '..', 'frontend', 'public', 'invoice-generator.html');

// Read image and convert to base64
const imgBuffer = fs.readFileSync(imgPath);
const base64Img = imgBuffer.toString('base64');
const logoDataUri = `data:image/png;base64,${base64Img}`;

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GST Invoice Generator - Shyara Tech Solution</title>
    <!-- Premium Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <script>
        function handleLogoError() {
            document.getElementById('logo-img').style.display = 'none';
            document.getElementById('logo-fallback').style.display = 'block';
        }
    </script>

    <style>
        /* Define local Tan Paradiso font fallback */
        @font-face {
            font-family: 'Tan Paradiso';
            src: local('Tan Paradiso'), 
                 local('TanParadiso'), 
                 url('TAN-PARADISO.ttf') format('truetype'),
                 url('TAN-PARADISO.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
        }

        :root {
            --primary: #1e293b;
            --accent: #b45309; /* Deep orange/brown */
            --border: #d1d5db;
            --text-dark: #1f2937;
            --text-muted: #4b5563;
            --bg-page: #f3f4f6;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-page);
            color: var(--text-dark);
            min-height: 100vh;
            display: flex;
        }

        /* App Layout Container */
        .app-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            min-height: 100vh;
        }

        /* Control Panel (Left Side) */
        .control-panel {
            width: 420px;
            background: white;
            border-right: 1px solid #e5e7eb;
            padding: 24px;
            overflow-y: auto;
            max-height: 100vh;
            flex-shrink: 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        /* Preview Area (Right Side) */
        .preview-area {
            flex: 1;
            padding: 40px;
            overflow-y: auto;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            background-color: #d1d5db;
        }

        /* Form styling */
        .panel-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .panel-subtitle {
            font-size: 13px;
            color: var(--text-muted);
            margin-bottom: 24px;
            line-height: 1.5;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-row {
            display: flex;
            gap: 12px;
        }

        .form-row .form-group {
            flex: 1;
        }

        label {
            display: block;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--text-muted);
            margin-bottom: 4px;
        }

        input, select, textarea {
            width: 100%;
            padding: 9px 12px;
            font-size: 13px;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            color: var(--text-dark);
            outline: none;
        }

        input:focus, select:focus, textarea:focus {
            border-color: var(--accent);
            box-shadow: 0 0 0 3px rgba(180, 83, 9, 0.15);
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            padding: 12px 24px;
            background: var(--accent);
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .btn:hover {
            background: #92400e;
        }

        .section-divider {
            height: 1px;
            background: #e5e7eb;
            margin: 15px 0;
        }

        .section-header {
            font-size: 11px;
            font-weight: 700;
            color: var(--accent);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }

        /* A4 Page Container */
        .invoice-sheet {
            width: 210mm;
            height: 297mm;
            background: white;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
            padding: 20mm 15mm;
            position: relative;
            box-sizing: border-box;
        }

        /* Top Header */
        .invoice-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
        }

        .logo-container img {
            height: 48px;
            width: auto;
            display: block;
        }

        .logo-placeholder {
            font-family: 'Tan Paradiso', 'Cinzel', 'Playfair Display', serif;
            font-size: 36px;
            color: #000;
            font-weight: 700;
            line-height: 1;
        }

        .meta-container {
            text-align: right;
        }

        .meta-item {
            margin-bottom: 10px;
        }

        .meta-label {
            font-size: 9px;
            font-weight: 700;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 2px;
        }

        .meta-val {
            font-size: 13px;
            font-weight: 700;
            color: #1f2937;
        }

        /* Document Title */
        .tax-invoice-title {
            font-family: 'Playfair Display', 'Cinzel', serif;
            font-size: 24px;
            font-weight: 700;
            text-transform: uppercase;
            color: #000;
            margin-bottom: 18px;
            border-bottom: 1.5px solid #000;
            padding-bottom: 6px;
            letter-spacing: 0.5px;
        }

        /* Billing Information */
        .billing-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 25px;
            gap: 15px;
        }

        .billing-card {
            width: 50%;
            border: 1px solid var(--border);
            padding: 12px 14px;
            background-color: #fafafa;
        }

        .billing-card-header {
            font-size: 9px;
            font-weight: 700;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
        }

        .billing-card-body {
            font-size: 11px;
            line-height: 1.5;
            color: #1f2937;
        }

        .billing-card-name {
            font-size: 11.5px;
            font-weight: 700;
            color: #000;
            margin-bottom: 4px;
            text-transform: uppercase;
        }

        /* Orange/Brown Styled Table */
        .invoice-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        .invoice-table th {
            background-color: var(--accent);
            color: white;
            font-size: 9.5px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 8px 10px;
            text-align: left;
            border: 1px solid var(--accent);
        }

        .invoice-table th.right {
            text-align: right;
        }

        .invoice-table th.center {
            text-align: center;
        }

        .invoice-table td {
            padding: 12px 10px;
            font-size: 11px;
            border-bottom: 1px solid var(--border);
            color: #1f2937;
            vertical-align: top;
            line-height: 1.4;
        }

        .invoice-table td.right {
            text-align: right;
        }

        .invoice-table td.center {
            text-align: center;
        }

        .item-name {
            font-weight: 600;
            color: #000;
            margin-bottom: 3px;
        }

        /* Totals Block */
        .totals-block {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
        }

        .totals-table {
            width: 45%;
            border-collapse: collapse;
        }

        .totals-table td {
            padding: 6px 4px;
            font-size: 11.5px;
            color: #4b5563;
        }

        .totals-table td.val {
            text-align: right;
            font-weight: 600;
            color: #000;
        }

        .totals-table tr.grand-row td {
            background-color: var(--accent);
            color: white;
            font-size: 13px;
            font-weight: 700;
            padding: 8px 10px;
        }

        .totals-table tr.grand-row td.val {
            color: white;
        }

        /* Footer elements positioned absolutely at the bottom of the A4 page */
        .invoice-footer-container {
            position: absolute;
            bottom: 28mm;
            left: 15mm;
            right: 15mm;
        }

        .footer-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            border-top: 1px solid var(--border);
            padding-top: 15px;
            margin-bottom: 15px;
        }

        .terms-col {
            width: 100%;
            font-size: 9.5px;
            color: #4b5563;
            line-height: 1.45;
        }

        .terms-title {
            font-weight: 700;
            color: #000;
            margin-bottom: 5px;
            text-transform: uppercase;
        }

        .sign-col {
            width: 38%;
            text-align: right;
            font-size: 9.5px;
        }

        .sign-company {
            font-weight: 700;
            color: #000;
            margin-bottom: 45px;
            text-transform: uppercase;
            line-height: 1.3;
        }

        .sign-line {
            border-top: 1px solid var(--border);
            padding-top: 4px;
            font-weight: 600;
            color: #4b5563;
            display: inline-block;
            width: 100%;
        }

        .disclaimer-bar {
            text-align: center;
            font-size: 8.5px;
            color: #9ca3af;
            border-top: 1px solid #f3f4f6;
            padding-top: 8px;
            line-height: 1.4;
        }

        /* Printing Specific overrides */
        @media print {
            body {
                background: white;
                color: black;
            }
            .control-panel {
                display: none !important;
            }
            .preview-area {
                padding: 0;
                background: white;
            }
            .invoice-sheet {
                box-shadow: none;
                margin: 0;
                padding: 20mm 15mm;
                width: 210mm;
                height: 297mm;
                page-break-after: avoid;
                page-break-inside: avoid;
            }
            @page {
                size: A4;
                margin: 0; /* Prevents chrome headers/footers */
            }
        }
    </style>
</head>
<body>
    <div class="app-container">
        <!-- Control Panel (Hidden during Print) -->
        <div class="control-panel no-print">
            <div class="panel-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent)">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Invoice Builder
            </div>
            <div class="panel-subtitle">
                Enter details below. Calculations are performed in reverse automatically from the total inclusive price (GST 18%).
            </div>

            <div class="section-header">Invoice Details</div>
            <div class="form-row">
                <div class="form-group">
                    <label for="inp-ref">Reference No (6-digit)</label>
                    <input type="text" id="inp-ref" value="000014" maxlength="6" oninput="updateInvoice()">
                </div>
                <div class="form-group">
                    <label for="inp-date">Invoice Date</label>
                    <input type="date" id="inp-date" onchange="updateInvoice()">
                </div>
            </div>

            <div class="section-divider"></div>

            <div class="section-header">Billed To (Customer)</div>
            <div class="form-group">
                <label for="inp-cust-name">Customer Name</label>
                <input type="text" id="inp-cust-name" value="Shashwat Cafe Private Limited" oninput="updateInvoice()">
            </div>
            <div class="form-group">
                <label for="inp-cust-state">Place of Supply (State)</label>
                <select id="inp-cust-state" onchange="updateInvoice()">
                    <option value="Bihar" selected>Bihar (State Code: 10)</option>
                    <option value="Uttar Pradesh">Uttar Pradesh (State Code: 09)</option>
                    <option value="Delhi">Delhi (State Code: 07)</option>
                    <option value="Maharashtra">Maharashtra (State Code: 27)</option>
                    <option value="Karnataka">Karnataka (State Code: 29)</option>
                    <option value="West Bengal">West Bengal (State Code: 19)</option>
                    <option value="Other">Other State (IGST 18%)</option>
                </select>
            </div>
            <div class="form-group">
                <label for="inp-cust-mobile">Customer Mobile</label>
                <input type="text" id="inp-cust-mobile" value="+91 98765 43210" oninput="updateInvoice()">
            </div>

            <div class="section-divider"></div>

            <div class="section-header">Services & Total Charges</div>
            <div class="form-group">
                <label for="inp-service-desc">Description of Service</label>
                <input type="text" id="inp-service-desc" value="Video Design Service" oninput="updateInvoice()">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="inp-sac">SAC Code</label>
                    <input type="text" id="inp-sac" value="999613" oninput="updateInvoice()">
                </div>
                <div class="form-group">
                    <label for="inp-amount">Total Price (GST Incl. &inru;)</label>
                    <input type="number" id="inp-amount" value="2999" min="0" step="1" oninput="updateInvoice()">
                </div>
            </div>


            <div style="margin-top: 30px;">
                <button class="btn" onclick="window.print()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 6 2 18 2 18 9"></polyline>
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                        <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                    Print or Save as PDF
                </button>
            </div>
        </div>

        <!-- Preview Area containing A4 Sheet -->
        <div class="preview-area">
            <div class="invoice-sheet" id="print-area">
                <!-- Content Area -->
                <div>
                    <!-- Header -->
                    <div class="invoice-header">
                        <div class="logo-container">
                            <div class="logo-placeholder">Shyara</div>
                        </div>
                        <div class="meta-container">
                            <div class="meta-item">
                                <div class="meta-label">INVOICE NUMBER</div>
                                <div class="meta-val" id="inv-num">BX-26-000014</div>
                            </div>
                            <div class="meta-item">
                                <div class="meta-label">INVOICE DATE</div>
                                <div class="meta-val" id="inv-date">6 Jul 2026</div>
                            </div>
                        </div>
                    </div>

                    <!-- Tax Invoice Serif Title -->
                    <div class="tax-invoice-title">Tax Invoice</div>

                    <!-- Symmetrical Billing Cards -->
                    <div class="billing-row">
                        <div class="billing-card">
                            <div class="billing-card-header">BILL FROM</div>
                            <div class="billing-card-body">
                                <div class="billing-card-name">SHYARA TECH SOLUTION (OPC) PRIVATE LIMITED</div>
                                Jai Hanuman Colony, Bazar Samiti, Mahendru,<br>
                                Sampatchak, Patna-800006<br>
                                State: Bihar<br>
                                GSTIN: 10ABSCS1802N1Z8
                            </div>
                        </div>
                        <div class="billing-card">
                            <div class="billing-card-header">BILL TO</div>
                            <div class="billing-card-body">
                                <div class="billing-card-name" id="cust-name">Shashwat Cafe Private Limited</div>
                                Mobile: <span id="cust-mobile">+91 98765 43210</span>
                            </div>
                        </div>
                    </div>

                    <!-- Table -->
                    <table class="invoice-table">
                        <thead>
                            <tr>
                                <th style="width: 50%;">Description / Services</th>
                                <th style="width: 15%;" class="center">SAC Code</th>
                                <th style="width: 10%;" class="center">QTY</th>
                                <th style="width: 25%;" class="right">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="item-name" id="item-desc">Video Design Service</div>
                                </td>
                                <td class="center" id="item-sac">999613</td>
                                <td class="center">1</td>
                                <td class="right" id="item-total">Rs. 2999</td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Totals Block -->
                    <div class="totals-block">
                        <table class="totals-table">
                            <tr>
                                <td>Taxable Value</td>
                                <td class="val" id="tot-taxable">Rs. 2541.53</td>
                            </tr>
                            <tr>
                                <td>GST (18%)</td>
                                <td class="val" id="tot-gst">Rs. 457.47</td>
                            </tr>
                            <tr class="grand-row">
                                <td>Total (incl. taxes)</td>
                                <td class="val" id="tot-grand">Rs. 2999</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <!-- Footer elements positioned absolutely at the bottom of the A4 page -->
                <div class="invoice-footer-container">
                    <div class="footer-row">
                        <div class="terms-col">
                            <div class="terms-title">Declarations & Terms</div>
                            <p>Supply of online information and database access or retrieval services (OIDAR).</p>
                            <p>Tax payable under reverse charge: No.</p>
                            <p>All disputes are subject to Patna jurisdiction.</p>
                        </div>
                    </div>

                    <!-- Disclaimer -->
                    <div class="disclaimer-bar">
                        This is a computer-generated invoice and does not require a physical signature.<br>
                        SHYARA TECH SOLUTION (OPC) PRIVATE LIMITED | CIN: U62011BR2025OPC080949
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Calculations Script -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Default dates
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            
            // Set invoice date to today
            document.getElementById('inp-date').value = \`\${year}-\${month}-\${day}\`;

            updateInvoice();
        });

        function formatDisplayDate(dateStr) {
            if (!dateStr) return '';
            const dateObj = new Date(dateStr);
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
            return dateObj.toLocaleDateString('en-US', options).replace(/,/g, ''); // formatting as '6 Jul 2026'
        }

        function formatCurrency(value) {
            return new Intl.NumberFormat('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(value);
        }

        function updateInvoice() {
            // Get inputs
            const refNo = document.getElementById('inp-ref').value.padStart(6, '0');
            const dateVal = document.getElementById('inp-date').value;
            const custName = document.getElementById('inp-cust-name').value;
            const custMobile = document.getElementById('inp-cust-mobile').value;
            const serviceDesc = document.getElementById('inp-service-desc').value;
            const sacCode = document.getElementById('inp-sac').value;
            const totalPrice = parseFloat(document.getElementById('inp-amount').value) || 0;

            // Invoice number format
            let yy = '26';
            if (dateVal) {
                const dateObj = new Date(dateVal);
                yy = String(dateObj.getFullYear()).substr(-2);
            }
            document.getElementById('inv-num').innerText = \`SD-\${yy}-\${refNo}\`;

            // Format dates
            document.getElementById('inv-date').innerText = formatDisplayDate(dateVal);

            // Billed To Details
            document.getElementById('cust-name').innerText = custName || 'Recipient Name';
            document.getElementById('cust-mobile').innerText = custMobile || 'N/A';

            // Calculations (GST 18% inclusive reverse-calculation)
            const taxableValue = totalPrice / 1.18;
            const totalGst = totalPrice - taxableValue;

            // Populate table & totals
            document.getElementById('item-desc').innerText = serviceDesc || 'Services';
            document.getElementById('item-sac').innerText = sacCode || '999613';
            document.getElementById('item-total').innerText = \`Rs. \${totalPrice}\`;

            document.getElementById('tot-taxable').innerText = \`Rs. \${formatCurrency(taxableValue)}\`;
            document.getElementById('tot-gst').innerText = \`Rs. \${formatCurrency(totalGst)}\`;
            document.getElementById('tot-grand').innerText = \`Rs. \${totalPrice}\`;
        }
    </script>
</body>
</html>`;

fs.writeFileSync(htmlPath, htmlTemplate, 'utf8');
console.log('Successfully generated the final refined invoice builder page!');
