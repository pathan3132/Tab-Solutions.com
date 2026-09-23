// ============ 1. GLOBAL SCOPE BOUND FUNCTIONS ============

// --- (A) NDA Modal Controls ---
window.openNdaModal = function() {
    const modal = document.getElementById('nda-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
};

window.closeNdaModal = function() {
    const modal = document.getElementById('nda-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
};

// --- (B) Strategy Call Booking Modal Controls ---
window.openBookingModal = function() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
};

window.closeBookingModal = function() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
};

window.confirmBooking = function() {
    const name = document.getElementById('book-name').value.trim();
    const time = document.getElementById('book-time').value;

    let message = `*15-Min Strategy Call Request — Tab Solution*\n\n`;
    message += `👤 *Client:* ${name || 'Business Owner'}\n`;
    message += `⏰ *Preferred Slot:* ${time}\n\n`;
    message += `_Please confirm the meeting invite link._`;

    const whatsappURL = `https://wa.me/918329962703?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    window.closeBookingModal();
};

// Close modals on clicking outside box
window.addEventListener('click', (e) => {
    const ndaModal = document.getElementById('nda-modal');
    const bookingModal = document.getElementById('booking-modal');
    if (e.target === ndaModal) window.closeNdaModal();
    if (e.target === bookingModal) window.closeBookingModal();
});

// --- (C) Language Toggle Engine (EN ⇄ हिंदी) ---
let currentLang = localStorage.getItem('tab_lang') || 'en';

const translations = {
    hi: {
        langBtn: "English",
        heroPill: "बिज़नेस सिस्टम्स & ऑटोमेशन स्टूडियो — औरंगाबाद",
        heroTitle: "मैनुअल एक्सेल और कागज़ों में समय बर्बाद करना बंद करें। <span class='text-brandPurple block shimmer-text'>अपने बिज़नेस को ऑटोमेट करें।</span>",
        heroDesc: "हम आपके कारखाने, ट्रांसपोर्ट या होलसेल बिज़नेस के लिए ऐसा कस्टम क्लाउड सिस्टम और WhatsApp ऑटोमेशन बनाते हैं जिससे स्टाफ पर आपकी निर्भरता 100% खत्म हो जाती है।",
        whyPill: "मैनुअल काम का असली नुकसान",
        whyTitle: "मजबूत सिस्टम के बिना <span class='text-brandPurple'>हर बिज़नेस बिखर जाता है।</span>",
        whyDesc: "अगर आपके या अकाउंटेंट के छुट्टी पर जाते ही काम रुक जाता है, तो आप बिज़नेस नहीं चला रहे — एक तनाव भरी नौकरी कर रहे हैं।",
        stopAskingPill: "स्टाफ पर निर्भरता खत्म",
        stopAskingTitle: "स्टाफ से पूछना बंद करें: <span class='text-brandPurple'>'आज का कलेक्शन कितना हुआ?'</span>",
        stopAskingDesc: "महीने के अंत तक रिपोर्ट का इंतज़ार न करें। 1 क्लिक में अपनी दुकान, फैक्ट्री और बैंक का 100% लाइव हिसाब अपने फोन पर देखें।"
    },
    en: {
        langBtn: "हिंदी में देखें",
        heroPill: "BUSINESS SYSTEMS & OPERATIONS STUDIO — AURANGABAD",
        heroTitle: "Stop wasting hours on manual spreadsheets. <span class='text-brandPurple block shimmer-text'>Automate your business.</span>",
        heroDesc: "We engineer bespoke cloud web software, Google Workspace automated ecosystems, and live accounting MIS dashboards that eliminate staff dependency and give you full business control.",
        whyPill: "THE HIDDEN COST OF MANUAL WORK",
        whyTitle: "Every business breaks without <span class='text-brandPurple'>solid systems.</span>",
        whyDesc: "If your business stops when you or your key staff take a holiday, you don't own a business — you own an exhausting job.",
        stopAskingPill: "ZERO STAFF DEPENDENCY",
        stopAskingTitle: "Stop asking: <span class='text-brandPurple'>\"आज का कलेक्शन कितना हुआ?\"</span>",
        stopAskingDesc: "Never wait for an accountant or manager to send you month-end files. Get 100% accurate, live financial & inventory reports directly on your phone in under 2 seconds."
    }
};

window.applyLanguage = function(lang) {
    const t = translations[lang];
    if (!t) return;

    const langTextEl = document.getElementById('lang-text');
    if (langTextEl) langTextEl.textContent = t.langBtn;

    const heroPill = document.querySelector('#hero-text .purple-pill');
    if (heroPill) heroPill.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-brandPurple"></span> ${t.heroPill}`;

    const heroH1 = document.querySelector('#hero-text h1');
    if (heroH1) heroH1.innerHTML = t.heroTitle;

    const heroP = document.querySelector('#hero-text p');
    if (heroP) heroP.textContent = t.heroDesc;

    const whyPill = document.querySelector('#why-us .purple-pill');
    if (whyPill) whyPill.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-amber-500"></i> ${t.whyPill}`;

    const whyH2 = document.querySelector('#why-us h2');
    if (whyH2) whyH2.innerHTML = t.whyTitle;

    const whyP = document.querySelector('#why-us p');
    if (whyP) whyP.textContent = t.whyDesc;

    const livePill = document.querySelector('#live-reports .purple-pill');
    if (livePill) livePill.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> ${t.stopAskingPill}`;

    const liveH2 = document.querySelector('#live-reports h2');
    if (liveH2) liveH2.innerHTML = t.stopAskingTitle;

    const liveP = document.querySelector('#live-reports p');
    if (liveP) liveP.textContent = t.stopAskingDesc;

    localStorage.setItem('tab_lang', lang);
};

window.toggleLanguage = function() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    window.applyLanguage(currentLang);
};

// --- (D) Live MIS Dashboard Simulator ---
const demoData = {
    sales: `
        <div class="flex justify-between items-center pb-3 border-b border-slate-800">
            <span class="text-slate-400 text-xs">Today's Total Inflow</span>
            <span class="text-emerald-400 font-bold text-lg">₹1,84,500</span>
        </div>
        <div class="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div><span class="text-slate-500 block">Cash Collection:</span> ₹62,000</div>
            <div><span class="text-slate-500 block">Bank UPI / NEFT:</span> ₹1,22,500</div>
            <div><span class="text-slate-500 block">Invoices Generated:</span> 34 Orders</div>
            <div><span class="text-slate-500 block">Avg Order Value:</span> ₹5,426</div>
        </div>
    `,
    stock: `
        <div class="flex justify-between items-center pb-3 border-b border-slate-800">
            <span class="text-slate-400 text-xs">Total Warehouse Valuation</span>
            <span class="text-blue-400 font-bold text-lg">₹42,80,000</span>
        </div>
        <div class="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div><span class="text-slate-500 block">Fast Moving SKUs:</span> 142 Items</div>
            <div><span class="text-slate-500 block">Low Stock Alert:</span> <span class="text-rose-400 font-bold">4 Items Reorder!</span></div>
            <div><span class="text-slate-500 block">Dead Stock Value:</span> ₹18,000 (Low)</div>
            <div><span class="text-slate-500 block">Dispatched Today:</span> 12 Shipments</div>
        </div>
    `,
    dues: `
        <div class="flex justify-between items-center pb-3 border-b border-slate-800">
            <span class="text-slate-400 text-xs">Total Market Outstanding</span>
            <span class="text-amber-400 font-bold text-lg">₹8,92,000</span>
        </div>
        <div class="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div><span class="text-slate-500 block">> 30 Days Overdue:</span> <span class="text-rose-400 font-bold">₹1,45,000</span></div>
            <div><span class="text-slate-500 block">Expected This Week:</span> ₹3,20,000</div>
            <div><span class="text-slate-500 block">Top Debtor:</span> Apex Traders (₹85k)</div>
            <div><span class="text-slate-500 block">WhatsApp Reminders:</span> Auto-Sent Today (18)</div>
        </div>
    `,
    pnl: `
        <div class="flex justify-between items-center pb-3 border-b border-slate-800">
            <span class="text-slate-400 text-xs">Estimated Net Profit (MTD)</span>
            <span class="text-emerald-400 font-bold text-lg">₹4,12,600 (22.4%)</span>
        </div>
        <div class="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div><span class="text-slate-500 block">Gross Revenue:</span> ₹18,40,000</div>
            <div><span class="text-slate-500 block">COGS / Raw Material:</span> ₹11,20,000</div>
            <div><span class="text-slate-500 block">Operating Expenses:</span> ₹3,07,400</div>
            <div><span class="text-slate-500 block">Cashflow Health:</span> <span class="text-emerald-400">Excellent 94%</span></div>
        </div>
    `
};

window.switchLiveDemo = function(type) {
    const contentEl = document.getElementById('demo-content');
    if (!contentEl) return;

    document.querySelectorAll('.demo-tab').forEach(tab => {
        tab.classList.remove('bg-brandPurple', 'text-white', 'shadow-md', 'shadow-purple-500/20');
        tab.classList.add('bg-slate-100', 'text-midSlate');
    });

    const activeTab = document.getElementById(`tab-${type}`);
    if (activeTab) {
        activeTab.classList.remove('bg-slate-100', 'text-midSlate');
        activeTab.classList.add('bg-brandPurple', 'text-white', 'shadow-md', 'shadow-purple-500/20');
    }

    contentEl.style.opacity = '0';
    setTimeout(() => {
        contentEl.innerHTML = demoData[type] || demoData.sales;
        contentEl.style.opacity = '1';
    }, 120);
};

// --- (E) WhatsApp Simulator ---
const waSimData = {
    dispatch: {
        title: "Datt Soap Dispatch Bot",
        messages: `
            <div class="p-3 bg-white rounded-xl shadow-sm rounded-tl-none max-w-[85%] border border-slate-200">
                <span class="text-[11px] font-bold text-darkSlate block">🚚 Order Dispatched — Batch #842</span>
                <span class="text-[10px] text-slate-600 block mt-1">Dear Mahaveer Traders, your shipment of <strong>120 Boxes (Premium Bath Soap)</strong> has been dispatched via All India Transport.</span>
                <div class="mt-2 p-2 bg-slate-100 rounded border border-slate-200 flex items-center justify-between">
                    <span class="text-[10px] text-brandPurple font-bold">📄 Invoice_INV-10492.pdf</span>
                    <i class="fa-solid fa-download text-slate-500 text-xs"></i>
                </div>
                <span class="text-[9px] text-slate-400 text-right block mt-1">11:42 AM ✔✔</span>
            </div>
        `
    },
    payment: {
        title: "GS Agro Recovery Bot",
        messages: `
            <div class="p-3 bg-white rounded-xl shadow-sm rounded-tl-none max-w-[85%] border border-slate-200">
                <span class="text-[11px] font-bold text-darkSlate block">💰 Payment Reminder — GS Pashukhadya</span>
                <span class="text-[10px] text-slate-600 block mt-1">Namaste Kisan Agro, your ledger statement has an outstanding balance of <strong>₹48,500</strong> overdue by 12 days.</span>
                <div class="mt-2 p-2 bg-emerald-50 rounded border border-emerald-200 text-[10px] text-emerald-800">
                    <strong>Quick UPI Pay:</strong> Click to pay directly with instant ledger credit.
                </div>
                <span class="text-[9px] text-slate-400 text-right block mt-1">02:15 PM ✔✔</span>
            </div>
        `
    },
    owner: {
        title: "Tab Executive MIS Bot",
        messages: `
            <div class="p-3 bg-[#DCF8C6] rounded-xl shadow-sm rounded-tr-none ml-auto max-w-[85%] border border-emerald-200">
                <span class="text-[11px] font-bold text-darkSlate block">📊 Daily Evening Brief for Founder</span>
                <span class="text-[10px] text-slate-700 block mt-1 leading-relaxed">
                    • <strong>Today's Sales:</strong> ₹2,14,000<br>
                    • <strong>Cash Collected:</strong> ₹85,000<br>
                    • <strong>Low Stock Alert:</strong> Raw Material Oil < 300L<br>
                    • <strong>Fleet Trips:</strong> 8 Active Trucks
                </span>
                <span class="text-[9px] text-slate-500 text-right block mt-1">08:00 PM ✔✔</span>
            </div>
        `
    }
};

window.triggerWaSim = function(type) {
    const chatBox = document.getElementById('sim-chat-box');
    const titleEl = document.getElementById('sim-chat-title');
    if (!chatBox || !titleEl) return;

    document.querySelectorAll('.sim-btn').forEach(b => {
        b.classList.remove('active', 'border-2', 'border-brandPurple', 'bg-brandPurpleLight/60');
        b.classList.add('border', 'border-subtleBorder', 'bg-white');
    });

    const activeBtn = document.getElementById(`sim-btn-${type}`);
    if (activeBtn) {
        activeBtn.classList.remove('border', 'border-subtleBorder', 'bg-white');
        activeBtn.classList.add('active', 'border-2', 'border-brandPurple', 'bg-brandPurpleLight/60');
    }

    titleEl.textContent = waSimData[type].title;
    chatBox.innerHTML = `
        <div class="text-center my-1"><span class="bg-white/80 px-2 py-0.5 rounded text-[9px] text-slate-500">TODAY</span></div>
        <div class="animate-pulse text-slate-400 text-center text-[10px]">Triggering automated system event...</div>
    `;

    setTimeout(() => {
        chatBox.innerHTML = `
            <div class="text-center my-1"><span class="bg-white/80 px-2 py-0.5 rounded text-[9px] text-slate-500">TODAY</span></div>
            ${waSimData[type].messages}
        `;
    }, 200);
};

// --- (F) Data-Flow Blueprint ---
const flowStages = {
    1: {
        title: "STAGE 01 — MULTI-DEVICE DATA CAPTURE",
        icon: "fa-mobile-screen",
        badge: "Zero Paperwork",
        desc: "Your warehouse operator, billing clerk, or site engineer inputs orders in 5 seconds on mobile or PC.",
        details: [
            "• Simple barcode / QR code scanning for batch stock",
            "• Mobile forms with instant price & party autofill",
            "• Automatic offline support (syncs when internet returns)"
        ]
    },
    2: {
        title: "STAGE 02 — CLOUD COMPUTATION & LOGIC ENGINE",
        icon: "fa-gears",
        badge: "0.2s Execution",
        desc: "Google Apps Script & Database engines instantly process formulas, inventory deductions, and credit limits.",
        details: [
            "• Deducts exact stock from warehouse inventory in real time",
            "• Verifies party overdue balance before allowing dispatch",
            "• Formats clean tax, discount, and freight calculations"
        ]
    },
    3: {
        title: "STAGE 03 — INSTANT WHATSAPP & ACCOUNTING ACTIONS",
        icon: "fa-bolt-lightning",
        badge: "Auto-Pilot Triggers",
        desc: "Automated systems trigger notifications and receipts without requiring human intervention.",
        details: [
            "• Sends automated PDF invoice directly to customer's WhatsApp",
            "• Syncs ledger entry to central accounting cloud database",
            "• Sends driver trip slip & transport LR automatically"
        ]
    },
    4: {
        title: "STAGE 04 — REAL-TIME OWNER EXECUTIVE MIS",
        icon: "fa-chart-pie",
        badge: "Live 24/7",
        desc: "The business owner opens their mobile dashboard to view net company performance instantly.",
        details: [
            "• Real-time cash collection, bank NEFT, and counter balances",
            "• Live low-stock alert triggered before inventory runs out",
            "• Exact MTD Profit & Loss statement updated in real time"
        ]
    }
};

window.switchFlowStage = function(stage) {
    const box = document.getElementById('flow-display-box');
    if (!box) return;

    document.querySelectorAll('.flow-tab').forEach((tab, index) => {
        if (index + 1 === stage) {
            tab.classList.add('active', 'border-2', 'border-brandPurple', 'bg-white', 'shadow-md');
            tab.classList.remove('border', 'border-subtleBorder', 'bg-white/70');
            tab.querySelector('span').classList.add('text-brandPurple');
            tab.querySelector('span').classList.remove('text-lightSlate');
        } else {
            tab.classList.remove('active', 'border-2', 'border-brandPurple', 'bg-white', 'shadow-md');
            tab.classList.add('border', 'border-subtleBorder', 'bg-white/70');
            tab.querySelector('span').classList.remove('text-brandPurple');
            tab.querySelector('span').classList.add('text-lightSlate');
        }
    });

    const data = flowStages[stage];
    box.style.opacity = '0';
    setTimeout(() => {
        box.innerHTML = `
            <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div class="flex items-center gap-2">
                    <i class="fa-solid ${data.icon} text-brandPurple text-lg"></i>
                    <span class="font-bold text-sm sm:text-base text-white">${data.title}</span>
                </div>
                <span class="text-[10px] bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">${data.badge}</span>
            </div>
            <p class="text-slate-300 text-xs sm:text-sm my-4 leading-relaxed">${data.desc}</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-[11px] text-slate-400">
                <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">${data.details[0]}</div>
                <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">${data.details[1]}</div>
                <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">${data.details[2]}</div>
            </div>
        `;
        box.style.opacity = '1';
    }, 120);
};

// --- (G) ROI Calculator ---
window.updateRoiCalc = function() {
    const turnoverSlider = document.getElementById('turnover-slider');
    const roiStaffSlider = document.getElementById('roi-staff-slider');
    const turnoverVal = document.getElementById('turnover-val');
    const roiStaffVal = document.getElementById('roi-staff-val');
    const roiSavings = document.getElementById('roi-savings');
    const roiPayback = document.getElementById('roi-payback');

    if (!turnoverSlider || !roiStaffSlider || !turnoverVal || !roiStaffVal || !roiSavings || !roiPayback) return;

    const turnoverLakhs = parseInt(turnoverSlider.value, 10);
    const staff = parseInt(roiStaffSlider.value, 10);

    turnoverVal.textContent = `₹${turnoverLakhs >= 100 ? (turnoverLakhs / 100).toFixed(2) + ' Crore' : turnoverLakhs + ',00,000'}`;
    roiStaffVal.textContent = `${staff} Staff Member${staff > 1 ? 's' : ''}`;

    const staffSavings = staff * 8000 * 12; 
    const leakageSavings = (turnoverLakhs * 100000) * 0.008 * 12;
    const totalAnnualSavings = staffSavings + leakageSavings;

    const monthlySavings = totalAnnualSavings / 12;
    const estPaybackDays = Math.max(12, Math.round((35000 / monthlySavings) * 30));

    roiSavings.textContent = `₹${Math.round(totalAnnualSavings).toLocaleString('en-IN')}`;
    roiPayback.textContent = `${estPaybackDays} Days`;
};

window.sendRoiToWa = function() {
    const turnoverVal = document.getElementById('turnover-val');
    const roiStaffVal = document.getElementById('roi-staff-val');
    const roiSavings = document.getElementById('roi-savings');

    const turnover = turnoverVal ? turnoverVal.textContent : '₹25,00,000';
    const staff = roiStaffVal ? roiStaffVal.textContent : '4 Staff';
    const savings = roiSavings ? roiSavings.textContent : '₹4,80,000';

    const message = `*Systems Architecture ROI Enquiry*\n\nHello Aftab, I calculated my business numbers on Tab Solution:\n• Monthly Turnover: ${turnover}\n• Staff Count: ${staff}\n• Est. Projected Savings: ${savings}/year\n\nI'd like to discuss building custom systems for our company.`;
    const whatsappURL = `https://wa.me/918329962703?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
};

// --- (H) 14-Day Sprint Roadmap ---
const sprintPhases = {
    1: {
        phase: "PHASE 01 (DAYS 01–03)",
        title: "OPERATIONAL AUDIT & LEAKAGE IDENTIFICATION",
        desc: "We study your current messy spreadsheets, physical registers, and department handoffs to identify bottlenecks and data leakages.",
        checklist: [
            "• Audit existing billing, cash, and inventory ledgers",
            "• Map key staff responsibilities and daily reporting flows",
            "• Draft the complete database entity relationship model"
        ]
    },
    2: {
        phase: "PHASE 02 (DAYS 04–08)",
        title: "PARALLEL CLOUD DATABASE & ENGINE ARCHITECTURE",
        desc: "We engineer your custom AppSheet, Google Apps Script backends, and databases on secure cloud infrastructure without disturbing your live business.",
        checklist: [
            "• Build automated inventory deduction and formula engines",
            "• Design role-based mobile entry screens for clerks & operators",
            "• Zero interruption to your ongoing daily business operations"
        ]
    },
    3: {
        phase: "PHASE 03 (DAYS 09–11)",
        title: "WHATSAPP CLOUD API & TRIGGER INTEGRATION",
        desc: "We configure automated PDF bill generation, WhatsApp notification triggers, and live executive MIS syncing.",
        checklist: [
            "• Connect WhatsApp API for automated bills and dues alerts",
            "• Real-time synchronization testing with 100+ test transactions",
            "• Executive mobile dashboard stress test and permission lock"
        ]
    },
    4: {
        phase: "PHASE 04 (DAYS 12–14)",
        title: "ON-SITE STAFF TRAINING & 100% PRODUCTION GO-LIVE",
        desc: "We train your operators in 15 minutes, perform live trial runs alongside your team, and switch over smoothly to 100% automated operations.",
        checklist: [
            "• Simple 15-minute hands-on training for non-technical staff",
            "• Live verification of daily collection, stock, and P&L records",
            "• Commencement of 30-day dedicated post-launch support"
        ]
    }
};

window.switchSprintPhase = function(phaseNum) {
    const box = document.getElementById('sprint-detail-box');
    if (!box) return;

    document.querySelectorAll('.sprint-tab').forEach((tab, idx) => {
        if (idx + 1 === phaseNum) {
            tab.classList.add('active', 'border-2', 'border-brandPurple', 'bg-brandPurpleLight/60');
            tab.classList.remove('border', 'border-subtleBorder', 'bg-slate-50', 'bg-white');
            tab.querySelector('span').classList.add('text-brandPurple');
            tab.querySelector('span').classList.remove('text-lightSlate');
        } else {
            tab.classList.remove('active', 'border-2', 'border-brandPurple', 'bg-brandPurpleLight/60');
            tab.classList.add('border', 'border-subtleBorder', 'bg-white');
            tab.querySelector('span').classList.remove('text-brandPurple');
            tab.querySelector('span').classList.add('text-lightSlate');
        }
    });

    const data = sprintPhases[phaseNum];
    box.style.opacity = '0';
    setTimeout(() => {
        box.innerHTML = `
            <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <span class="text-xs text-brandPurple font-bold">${data.phase}</span>
                <span class="text-[10px] bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">Zero Business Downtime</span>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-white mt-3 mb-2">${data.title}</h4>
            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">${data.desc}</p>
            <div class="space-y-1.5 text-xs text-slate-400 bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
                <div>${data.checklist[0]}</div>
                <div>${data.checklist[1]}</div>
                <div>${data.checklist[2]}</div>
            </div>
        `;
        box.style.opacity = '1';
    }, 120);
};

// --- (I) Industry Configurator ---
const industryPresets = {
    manufacturing: {
        timeline: "10–14 Business Days",
        modules: [
            "Batch Production Formula Costing Engine",
            "Raw Chemical & Material Stock Deduction",
            "Automated PDF Invoicing to Distributors",
            "WhatsApp Payment Overdue Recovery Bot",
            "Warehouse Low-Stock Reorder Alerts",
            "Live Daily Net Profit (P&L) Dashboard"
        ]
    },
    transport: {
        timeline: "8–12 Business Days",
        modules: [
            "1-Click Mobile LR Generation & Dispatch",
            "Driver Trip Advance & Fuel / Diesel Ledger",
            "Tyre Mileage & Vehicle Expense Tracker",
            "Automated Party Freight Invoicing & WhatsApp PDF",
            "Trip-Wise Net Profit & Fleet Analytics",
            "Multi-Branch Cash & Bank Collection Sync"
        ]
    },
    agro: {
        timeline: "8–12 Business Days",
        modules: [
            "Grain & Feed Formulation Rate-Cut Calculator",
            "Raw Grain Inward & Bag Inventory Tracker",
            "Dealer Credit Limit & Balance Statement",
            "Automated WhatsApp Ledger Summary to Dealers",
            "Production Wastage & Bagging Yield Monitor",
            "Daily Counter Collection & Bank Deposit MIS"
        ]
    },
    wholesale: {
        timeline: "7–10 Business Days",
        modules: [
            "Multi-Godown Stock Transfer & Sync",
            "Salesperson Mobile Order Booking Tool",
            "Automated Barcode Scan Billing on Phone",
            "Party Ledger Payment Reminder on WhatsApp",
            "Fast vs Dead Moving Inventory Analytics",
            "Owner Live Daily Evening Briefing Bot"
        ]
    }
};

window.selectIndustryPreset = function(presetKey) {
    const container = document.getElementById('preset-modules-container');
    const timelineEl = document.getElementById('config-timeline');
    if (!container || !timelineEl) return;

    document.querySelectorAll('.ind-preset-btn').forEach(btn => {
        btn.classList.remove('active', 'border-2', 'border-brandPurple', 'bg-brandPurpleLight/60', 'text-darkSlate');
        btn.classList.add('border', 'border-subtleBorder', 'bg-slate-50', 'text-midSlate');
    });

    const activeBtn = document.getElementById(`ind-btn-${presetKey}`);
    if (activeBtn) {
        activeBtn.classList.remove('border', 'border-subtleBorder', 'bg-slate-50', 'text-midSlate');
        activeBtn.classList.add('active', 'border-2', 'border-brandPurple', 'bg-brandPurpleLight/60', 'text-darkSlate');
    }

    const preset = industryPresets[presetKey];
    timelineEl.textContent = preset.timeline;

    container.innerHTML = preset.modules.map(mod => `
        <label class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-darkSlate cursor-pointer hover:border-brandPurple">
            <input type="checkbox" checked class="config-module-cb w-4 h-4 accent-purple-600 rounded">
            <span>${mod}</span>
        </label>
    `).join('');
};

window.sendConfigToWa = function() {
    const activeBtn = document.querySelector('.ind-preset-btn.active');
    const industryName = activeBtn ? activeBtn.textContent.trim() : 'Custom Business';
    const checkedModules = Array.from(document.querySelectorAll('.config-module-cb:checked'))
        .map(cb => "• " + cb.nextElementSibling.textContent.trim());

    let message = `*Configured Industry Blueprint — Tab Solution*\n\n`;
    message += `🏭 *Industry:* ${industryName}\n\n`;
    message += `📋 *Selected Architecture Modules:*\n${checkedModules.join('\n')}\n\n`;
    message += `_Please share the implementation plan and quote._`;

    const whatsappURL = `https://wa.me/918329962703?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
};

// --- (J) WhatsApp Instant Quote Generator ---
window.sendToWhatsApp = function() {
    const checkboxes = document.querySelectorAll('.service-checkbox:checked');
    const clientNameInput = document.getElementById('client-name');
    const clientName = clientNameInput ? clientNameInput.value.trim() : '';

    if (checkboxes.length === 0) {
        alert('Please select at least one requirement module.');
        return;
    }

    let selectedServices = [];
    checkboxes.forEach((cb) => {
        selectedServices.push("• " + cb.value);
    });

    let message = `*Project Scope Brief — Tab Solution*\n\n`;
    if (clientName) {
        message += `👤 *Client / Organization:* ${clientName}\n\n`;
    }
    message += `📋 *Selected Modules:*\n${selectedServices.join('\n')}\n\n`;
    message += `_Looking forward to discussing the architecture and scope._`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/918329962703?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
};

// ============ 2. DOMContentLoaded INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    
    // Dynamic Year Update
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        mobileMenu.querySelectorAll('a, button').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Preloader Dismiss
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('pre-hide');
            setTimeout(() => { preloader.style.display = 'none'; }, 400);
        }, 500);
    }

    // Interactive Leakage Calculator Slider
    const staffSlider = document.getElementById('staff-slider');
    const staffVal = document.getElementById('staff-val');
    const hoursLost = document.getElementById('hours-lost');
    const moneyLost = document.getElementById('money-lost');

    if (staffSlider && staffVal && hoursLost && moneyLost) {
        staffSlider.addEventListener('input', (e) => {
            const staff = parseInt(e.target.value, 10);
            staffVal.textContent = `${staff} Staff Member${staff > 1 ? 's' : ''}`;
            hoursLost.textContent = `${staff * 40} hrs`;
            moneyLost.textContent = `₹${(staff * 10000 * 12).toLocaleString('en-IN')}`;
        });
    }

    // Interactive FAQ Accordion
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const isActive = btn.classList.contains('active');

            faqButtons.forEach(otherBtn => {
                otherBtn.classList.remove('active');
                if (otherBtn.nextElementSibling) otherBtn.nextElementSibling.style.maxHeight = null;
            });

            if (!isActive && content) {
                btn.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Top Reading Scroll Progress Bar
    const progressBar = document.getElementById('scroll-progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            progressBar.style.width = `${(scrollTop / docHeight) * 100}%`;
        }, { passive: true });
    }

    // Connect Sliders for ROI
    const turnoverSlider = document.getElementById('turnover-slider');
    const roiStaffSlider = document.getElementById('roi-staff-slider');
    if (turnoverSlider && roiStaffSlider) {
        turnoverSlider.addEventListener('input', window.updateRoiCalc);
        roiStaffSlider.addEventListener('input', window.updateRoiCalc);
    }

    // Initialize all visual modules
    window.applyLanguage(currentLang);
    window.switchLiveDemo('sales');
    window.triggerWaSim('dispatch');
    window.switchFlowStage(1);
    window.updateRoiCalc();
    window.switchSprintPhase(1);
    window.selectIndustryPreset('manufacturing');
});

// ============ 3. BEFORE/AFTER DRAG SLIDER LOGIC ============
(function initTransformSlider() {
    const container = document.getElementById('transform-container');
    const handle = document.getElementById('transform-handle');
    const afterLayer = document.getElementById('transform-after-layer');

    if (!container || !handle || !afterLayer) return;

    let isDragging = false;

    function updateSliderPosition(clientX) {
        const rect = container.getBoundingClientRect();
        let offsetX = clientX - rect.left;
        offsetX = Math.max(0, Math.min(offsetX, rect.width));

        const percentage = (offsetX / rect.width) * 100;
        handle.style.left = `${percentage}%`;
        afterLayer.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
    }

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.clientX);
    });

    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        updateSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.touches[0].clientX);
    }, { passive: true });
})();