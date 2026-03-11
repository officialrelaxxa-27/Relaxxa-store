// ==========================================
// 1. PUSAT KONTROL HARGA (DATA TERPISAH)
// ==========================================

// 1. DATA MASTER JALUR A
const inventoryDiamonds_A = [
    { nama: "3 Diamonds", detail: "(3 + 0 Bonus)", harga: 1123 },
    { nama: "5 Diamonds", detail: "(5 + 0 Bonus)", harga: 1554 },
    { nama: "10 Diamonds", detail: "(10 + 0 Bonus)", harga: 3004 },
    { nama: "12 Diamonds", detail: "(11 + 1 Bonus)", harga: 3447 },
    { nama: "15 Diamonds", detail: "(15 + 0 Bonus)", harga: 4528 },
    { nama: "17 Diamonds", detail: "(16 + 1 Bonus)", harga: 5013 },
    { nama: "19 Diamonds", detail: "(17 + 2 Bonus)", harga: 5507, bestSeller: false },
    { nama: "22 Diamonds", detail: "(20 + 2 Bonus)", harga: 6473 },
    { nama: "28 Diamonds", detail: "(25 + 3 Bonus)", harga: 7808 },
    { nama: "36 Diamonds", detail: "(33 + 3 Bonus)", harga: 10227 },
    { nama: "44 Diamonds", detail: "(40 + 4 Bonus)", harga: 11880 },
    { nama: "59 Diamonds", detail: "(53 + 6 Bonus)", harga: 16100 },
    { nama: "64 Diamonds", detail: "(58 + 6 Bonus)", harga: 17061 },
    { nama: "71 Diamonds", detail: "(64 + 7 Bonus)", harga: 19251 },
    { nama: "85 Diamonds", detail: "(77 + 8 Bonus)", harga: 22649 },
    { nama: "113 Diamonds", detail: "(102 + 11 Bonus)", harga: 30041 },
    { nama: "128 Diamonds", detail: "(117 + 12 Bonus)", harga: 33792 },
    { nama: "148 Diamonds", detail: "(134 + 14 Bonus)", harga: 38498 },
    { nama: "170 Diamonds", detail: "(154 + 16 Bonus)", harga: 44417 },
    { nama: "176 Diamonds", detail: "(160 + 17 Bonus)", harga: 46078 },
    { nama: "184 Diamonds", detail: "(166 + 18 Bonus)", harga: 48188 },
    { nama: "210 Diamonds", detail: "(190 + 20 Bonus)", harga: 55039 },
    { nama: "222 Diamonds", detail: "(201 + 21 Bonus)", harga: 57770 },
    { nama: "220 Diamonds", detail: "(200 + 20 Bonus)", harga: 57827 },
    { nama: "240 Diamonds", detail: "(217 + 23 Bonus)", harga: 60601 },
    { nama: "277 Diamonds", detail: "(251 + 26 Bonus)", harga: 73934 },
    { nama: "284 Diamonds", detail: "(257 + 27 Bonus)", harga: 74767 },
    { nama: "296 Diamonds", detail: "(256 + 40 Bonus)", harga: 78341 },
    { nama: "300 Diamonds", detail: "(261 + 40 Bonus)", harga: 78538 },
    { nama: "332 Diamonds", detail: "(289 + 43 Bonus)", harga: 86560 },
    { nama: "340 Diamonds", detail: "(296 + 44 Bonus)", harga: 88709 },
    { nama: "355 Diamonds", detail: "(309 + 46 Bonus)", harga: 92560 },
    { nama: "370 Diamonds", detail: "(324 + 46 Bonus)", harga: 96990 },
    { nama: "384 Diamonds", detail: "(336 + 48 Bonus)", harga: 99936 },
    { nama: "453 Diamonds", detail: "(408 + 45 Bonus)", harga: 118136 },
    { nama: "568 Diamonds", detail: "(503 + 65 Bonus)", harga: 145542 },
    { nama: "642 Diamonds", detail: "(571 + 71 Bonus)", harga: 163940 },
    { nama: "716 Diamonds", detail: "(637 + 79 Bonus)", harga: 183954 },
    { nama: "792 Diamonds", detail: "(707 + 85 Bonus)", harga: 203901 },
    { nama: "875 Diamonds", detail: "(774 + 101 Bonus)", harga: 224629 },
    { nama: "963 Diamonds", detail: "(851 + 109 Bonus)", harga: 241981 },
    { nama: "1000 Diamonds", detail: "(887 + 113 Bonus)", harga: 254223 },
    { nama: "1135 Diamonds", detail: "(1006 + 130 Bonus)", harga: 287000 },
    { nama: "1159 Diamonds", detail: "(1031 + 128 Bonus)", harga: 293381 },
    { nama: "1220 Diamonds", detail: "(1083 + 138 Bonus)", harga: 306229 },
    { nama: "1506 Diamonds", detail: "(1335 + 172 Bonus)", harga: 380790 },
    { nama: "1704 Diamonds", detail: "(1509 + 195 Bonus)", harga: 429535 },
    { nama: "2010 Diamonds", detail: "(1708 + 302 Bonus)", harga: 479313 }
];

const inventoryPass_A = [
    { nama: "Weekly Diamond Pass", detail: "Event Topup + 100", harga: 29000, icon: "👑" }
];

// DATA BARU: ELITE PASS (STARLIGHT) JALUR B
const inventoryElite_A = [
    { nama: "Paket Elite Bulanan", detail: "Harga Hemat Promo", harga: 64441, icon: "⭐" },
];

// 2. DATA MASTER JALUR B (Harga lebih murah sesuai gambar kamu)
const inventoryDiamonds_B = [
    { nama: "3 Diamonds", detail: "(3 + 0 Bonus)", harga: 1115 },
    { nama: "5 Diamonds", detail: "(5 + 0 Bonus)", harga: 1560 },
    { nama: "10 Diamonds", detail: "(10 + 0 Bonus)", harga: 3019 },
    { nama: "12 Diamonds", detail: "(11 + 1 Bonus)", harga: 3505 },
    { nama: "14 Diamonds", detail: "(14 + 0 Bonus)", harga: 4479 },
    { nama: "15 Diamonds", detail: "(15 + 0 Bonus)", harga: 4479 },
    { nama: "17 Diamonds", detail: "(15 + 2 Bonus)", harga: 4678 },
    { nama: "19 Diamonds", detail: "(17 + 2 Bonus)", harga: 5450, bestSeller: false },
    { nama: "28 Diamonds", detail: "(25 + 3 Bonus)", harga: 7808 },
    { nama: "33 Diamonds", detail: "(30 + 3 Bonus)", harga: 9257 },
    { nama: "36 Diamonds", detail: "(33 + 3 Bonus)", harga: 10275 },
    { nama: "38 Diamonds", detail: "(34 + 4 Bonus)", harga: 10799 },
    { nama: "44 Diamonds", detail: "(40 + 4 Bonus)", harga: 11771 },
    { nama: "50 Diamonds", detail: "(45 + 5 Bonus)", harga: 13834 },
    { nama: "54 Diamonds", detail: "(50 + 4 Bonus)", harga: 14690 },
    { nama: "56 Diamonds", detail: "(51 + 5 Bonus)", harga: 15176 },
    { nama: "59 Diamonds", detail: "(53 + 6 Bonus)", harga: 15661 },
    { nama: "66 Diamonds", detail: "(60 + 6 Bonus)", harga: 18413 },
    { nama: "70 Diamonds", detail: "(63 + 7 Bonus)", harga: 19065 },
    { nama: "71 Diamonds", detail: "(64 + 7 Bonus)", harga: 19065 },
    { nama: "72 Diamonds", detail: "(65 + 7 Bonus)", harga: 19540 },
    { nama: "74 Diamonds", detail: "(70 + 4 Bonus)", harga: 20448 },
    { nama: "78 Diamonds", detail: "(70 + 8 Bonus)", harga: 30010 },
    { nama: "80 Diamonds", detail: "(74 + 6 Bonus)", harga: 22084 },
    { nama: "83 Diamonds", detail: "(75 + 8 Bonus)", harga: 22990 },
    { nama: "85 Diamonds", detail: "(77 + 8 Bonus)", harga: 22468 },
    { nama: "92 Diamonds", detail: "(87 + 5 Bonus)", harga: 25387 },
    { nama: "98 Diamonds", detail: "(89 + 9 Bonus)", harga: 26845 },
    { nama: "100 Diamonds", detail: "(91 + 9 Bonus)", harga: 28845 },
    { nama: "110 Diamonds", detail: "(101 + 9 Bonus)", harga: 30000 },
    { nama: "113 Diamonds", detail: "(102 + 11 Bonus)", harga: 30248 },
    { nama: "118 Diamonds", detail: "(106 + 12 Bonus)", harga: 31222 },
    { nama: "129 Diamonds", detail: "(117 + 12 Bonus)", harga: 34138 },
    { nama: "144 Diamonds", detail: "(130 + 14 Bonus)", harga: 38029 },
    { nama: "170 Diamonds", detail: "(154 + 16 Bonus)", harga: 44836 },
    { nama: "182 Diamonds", detail: "(165 + 17 Bonus)", harga: 48241 },
    { nama: "184 Diamonds", detail: "(167 + 17 Bonus)", harga: 50967 },
    { nama: "229 Diamonds", detail: "(207 + 22 Bonus)", harga: 60396 },
    { nama: "240 Diamonds", detail: "(217 + 23 Bonus)", harga: 63182 },
    { nama: "257 Diamonds", detail: "(233 + 24 Bonus)", harga: 68046 },
    { nama: "278 Diamonds", detail: "(251 + 27 Bonus)", harga: 73881 },
    { nama: "284 Diamonds", detail: "(257 + 27 Bonus)", harga: 74853 },
    { nama: "296 Diamonds", detail: "(256 + 40 Bonus)", harga: 77726 },
    { nama: "301 Diamonds", detail: "(261 + 40 Bonus)", harga: 80085 },
    { nama: "324 Diamonds", detail: "(281 + 43 Bonus)", harga: 85506 },
    { nama: "345 Diamonds", detail: "(301 + 44 Bonus)", harga: 90856 },
    { nama: "375 Diamonds", detail: "(326 + 48 Bonus)", harga: 98636 },
    { nama: "381 Diamonds", detail: "(333 + 48 Bonus)", harga: 99994 },
    { nama: "366 Diamonds", detail: "(333 + 33 Bonus)", harga: 101835 },
    { nama: "408 Diamonds", detail: "(367 + 41 Bonus)", harga: 106858 },
    { nama: "425 Diamonds", detail: "(373 + 52 Bonus)", harga: 111765 },
    { nama: "427 Diamonds", detail: "(384 + 43 Bonus)", harga: 112207 },
    { nama: "450 Diamonds", detail: "(408 + 42 Bonus)", harga: 119021 },
    { nama: "512 Diamonds", detail: "(461 + 51 Bonus)", harga: 134576 },
    { nama: "522 Diamonds", detail: "(471 + 51 Bonus)", harga: 138494 },
    { nama: "568 Diamonds", detail: "(503 + 65 Bonus)", harga: 145714 },
    { nama: "601 Diamonds", detail: "(533 + 68 Bonus)", harga: 154953 },
    { nama: "712 Diamonds", detail: "(633 + 79 Bonus)", harga: 183643 },
    { nama: "717 Diamonds", detail: "(638 + 79 Bonus)", harga: 185103 },
    { nama: "716 Diamonds", detail: "(638 + 78 Bonus)", harga: 185103 },
    { nama: "750 Diamonds", detail: "(668 + 82 Bonus)", harga: 193855 },
    { nama: "762 Diamonds", detail: "(666 + 96 Bonus)", harga: 200000 },
    { nama: "808 Diamonds", detail: "(720 + 88 Bonus)", harga: 208797 },
    { nama: "875 Diamonds", detail: "(774 + 101 Bonus)", harga: 223296 },
    { nama: "965 Diamonds", detail: "(856 + 109 Bonus)", harga: 247124 },
    { nama: "977 Diamonds", detail: "(867 + 110 Bonus)", harga: 250528 },
    { nama: "1050 Diamonds", detail: "(933 + 117 Bonus)", harga: 269491 },
    { nama: "1136 Diamonds", detail: "(1006 + 130 Bonus)", harga: 291328 },
    { nama: "1134 Diamonds", detail: "(1008 + 126 Bonus)", harga: 291728 },
    { nama: "1139 Diamonds", detail: "(1013 + 126 Bonus)", harga: 293187 },
    { nama: "1159 Diamonds", detail: "(1031 + 128 Bonus)", harga: 298000 },
    { nama: "1164 Diamonds", detail: "(1036 + 128 Bonus)", harga: 299509 },
    { nama: "1183 Diamonds", detail: "(1041 + 142 Bonus)", harga: 304326 },
    { nama: "1220 Diamonds", detail: "(1075 + 145 Bonus)", harga: 314000 },
    { nama: "1230 Diamonds", detail: "(1083 + 147 Bonus)", harga: 316483 },
    { nama: "1368 Diamonds", detail: "(1218 + 150 Bonus)", harga: 352422 },
    { nama: "1412 Diamonds", detail: "(1258 + 154 Bonus)", harga: 364000 },
    { nama: "1443 Diamonds", detail: "(1277 + 166 Bonus)", harga: 368911 },
    { nama: "1453 Diamonds", detail: "(1295 + 158 Bonus)", harga: 374790 },
    { nama: "1507 Diamonds", detail: "(1335 + 172 Bonus)", harga: 385930 },
    { nama: "1672 Diamonds", detail: "(1484 + 188 Bonus)", harga: 429207 },
    { nama: "1704 Diamonds", detail: "(1509 + 195 Bonus)", harga: 436943 },
    { nama: "1750 Diamonds", detail: "(1548 + 202 Bonus)", harga: 446492 },
    { nama: "1835 Diamonds", detail: "(1625 + 210 Bonus)", harga: 468860 },
    { nama: "2010 Diamonds", detail: "(1708 + 320 Bonus)", harga: 485304 },
    { nama: "2046 Diamonds", detail: "(1741 + 305 Bonus)", harga: 495518 },
    { nama: "2180 Diamonds", detail: "(1862 + 318 Bonus)", harga: 530000 },
    { nama: "2199 Diamonds", detail: "(1879 + 320 Bonus)", harga: 535389 },
    { nama: "2350 Diamonds", detail: "(2017 + 333 Bonus)", harga: 575132 },
    { nama: "2578 Diamonds", detail: "(2211 + 367 Bonus)", harga: 630918 },
    { nama: "2885 Diamonds", detail: "(2482 + 403 Bonus)", harga: 708499 },
    { nama: "2904 Diamonds", detail: "(2499 + 405 Bonus)", harga: 713849 },
    { nama: "2977 Diamonds", detail: "(2565 + 412 Bonus)", harga: 733300 },
    { nama: "3453 Diamonds", detail: "(2985 + 468 Bonus)", harga: 854014 },
    { nama: "3481 Diamonds", detail: "(3010 + 471 Bonus)", harga: 861894 },
    { nama: "3693 Diamonds", detail: "(3202 + 491 Bonus)", harga: 917196 },
    { nama: "4020 Diamonds", detail: "(3416 + 604 Bonus)", harga: 970508 },
    { nama: "4404 Diamonds", detail: "(3763 + 641 Bonus)", harga: 1071518 },
    { nama: "4678 Diamonds", detail: "(4001 + 677 Bonus)", harga: 1139049 },
    { nama: "4830 Diamonds", detail: "(4003 + 827 Bonus)", harga: 1164484 },
    { nama: "5398 Diamonds", detail: "(4506 + 892 Bonus)", harga: 1310000 },
    { nama: "5568 Diamonds", detail: "(4660 + 908 Bonus)", harga: 1354834 },
    { nama: "6030 Diamonds", detail: "(5124 + 906 Bonus)", harga: 1455811 },
    { nama: "6840 Diamonds", detail: "(5711 + 1129 Bonus)", harga: 1649888 },
    { nama: "7195 Diamonds", detail: "(6020 + 1175 Bonus)", harga: 1742884 },
    { nama: "7660 Diamonds", detail: "(6442 + 1218 Bonus)", harga: 1861789 },
    { nama: "7723 Diamonds", detail: "(6487 + 1236 Bonus)", harga: 1878277 },
    { nama: "8040 Diamonds", detail: "(6832 + 1208 Bonus)", harga: 1940914 },
    { nama: "8320 Diamonds", detail: "(7005 + 1297 Bonus)", harga: 2023847 },
    { nama: "8850 Diamonds", detail: "(7419 + 1431 Bonus)", harga: 2134891 },
    { nama: "9320 Diamonds", detail: "(7826 + 1476 Bonus)", harga: 2253320 },
    { nama: "9588 Diamonds", detail: "(8076 + 1512 Bonus)", harga: 2325242 },
    { nama: "9660 Diamonds", detail: "(8006 + 1654 Bonus)", harga: 2328867 },
    { nama: "10050 Diamonds", detail: "(8540 + 1510 Bonus)", harga: 2426118 },
    { nama: "11670 Diamonds", detail: "(9714 + 1956 Bonus)", harga: 2814000 },
    { nama: "12060 Diamonds", detail: "(10248 + 1812 Bonus)", harga: 2911333 },
    { nama: "12953 Diamonds", detail: "(10855 + 2098 Bonus)", harga: 3144000 },
    { nama: "13580 Diamonds", detail: "(11422 + 2258 Bonus)", harga: 3299275 },
    { nama: "14490 Diamonds", detail: "(12009 + 2481 Bonus)", harga: 3493251 },
    { nama: "14814 Diamonds", detail: "(12290 + 2524 Bonus)", harga: 3578657 },
    { nama: "16080 Diamonds", detail: "(13664 + 2416 Bonus)", harga: 3881729 },
    { nama: "16500 Diamonds", detail: "(13717 + 2783 Bonus)", harga: 3978477 },
    { nama: "18510 Diamonds", detail: "(15425 + 3085 Bonus)", harga: 4463659 },
    { nama: "19320 Diamonds", detail: "(16012 + 3308 Bonus)", harga: 4657635 },
    { nama: "20100 Diamonds", detail: "(17080 + 3020 Bonus)", harga: 4852137 },
    { nama: "20195 Diamonds", detail: "(16786 + 3409 Bonus)", harga: 4880832 },
    { nama: "21330 Diamonds", detail: "(17720 + 3610 Bonus)", harga: 5142839 },
    { nama: "24150 Diamonds", detail: "(20015 + 4135 Bonus)", harga: 5822000 },
    { nama: "28980 Diamonds", detail: "(24018 + 4962 Bonus)", harga: 6986402 },
];

const inventoryPass_B = [
    { nama: "Weekly Diamond Pass", detail: "Event Topup + 100", harga: 13000, icon: "👑" }
];

// DATA BARU: ELITE PASS (STARLIGHT) JALUR B
const inventoryElite_B = [
    { nama: "Paket Elite Bulanan", detail: "Harga Hemat Promo", harga: 64441, icon: "⭐" },
];

// Tambahkan ini di bagian atas file JS (di bawah currentJalur)
let selectedPrice = 0;
let selectedCategory = "A";
let currentOrderData = {}; // Penting agar data pesanan tersimpan

// 3. STATE & LOGIKA UTAMA
let currentJalur = 'A';

// Fungsi reset untuk mencegah error "resetSelection is not defined"
function resetSelection() {
    document.getElementById('display-item').innerText = "-";
    document.getElementById('display-total').innerText = "Rp 0";
    // Uncheck semua radio button
    const radios = document.getElementsByName('nominal');
    radios.forEach(radio => radio.checked = false);
}

function createCardHTML(item) {
    const icon = item.icon || "💎";
    return `
        <label class="item-card">
            <input type="radio" name="nominal" value="${item.nama}" 
                   onclick="selectItem('${item.nama}', ${item.harga})">
            <div class="item-content">
                ${item.bestSeller ? '<div class="best-seller-tag">BEST SELLER</div>' : ''}
                <span class="diamond-icon">${icon}</span>
                <span class="item-title">${item.nama}</span>
                <span class="item-bonus">${item.detail}</span>
                <span class="item-price">Rp ${item.harga.toLocaleString('id-ID')}</span>
            </div>
        </label>
    `;
}

function renderProducts() {
    const containerDiamonds = document.getElementById('container-diamonds');
    const containerPass = document.getElementById('container-ml-pass');
    const containerelite = document.getElementById('container-ml-elite');

    const activeDiamonds = (currentJalur === 'A') ? inventoryDiamonds_A : inventoryDiamonds_B;
    const activePass = (currentJalur === 'A') ? inventoryPass_A : inventoryPass_B;
    const activeElite = (currentJalur === 'A') ? inventoryElite_A : inventoryElite_B;
    

    if (containerDiamonds) containerDiamonds.innerHTML = activeDiamonds.map(createCardHTML).join('');
    if (containerPass) containerPass.innerHTML = activePass.map(createCardHTML).join('');
    if (containerelite) containerelite.innerHTML = activeElite.map(createCardHTML).join('');
}

function switchJalur(jalur, btn) {
    currentJalur = jalur;
    
    // UI Update tombol tab
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update teks keterangan jalur
    const desc = document.getElementById('jalur-desc');
    if(desc) {
        desc.innerHTML = (jalur === 'A') 
            ? "🚀 Menampilkan stok Premium (Proses 1-15 Menit)" 
            : "💰 Menampilkan stok Promo (Proses 5-60 Menit)";
    }

    resetSelection(); // Panggil fungsi reset yang sudah dibuat
    renderProducts();
}

function selectItem(name, price) {
    document.getElementById('display-item').innerText = name;
    const qty = document.getElementById('purchase-qty').value || 1;
    document.getElementById('display-total').innerText = "Rp " + (price * qty).toLocaleString('id-ID');
}

// Inisialisasi awal
window.onload = function() {
    renderProducts();
};

// Tambahkan ini agar harga update otomatis saat jumlah (Quantity) diubah
const qtyInput = document.getElementById('purchase-qty');
if (qtyInput) {
    qtyInput.addEventListener('input', function() {
        const selectedRadio = document.querySelector('input[name="nominal"]:checked');
        if (selectedRadio) {
            const price = parseInt(selectedRadio.getAttribute('data-price'));
            calculateTotal(price);
        }
    });
}

// ==========================================
// 3. LOGIKA PEMILIHAN & WHATSAPP
// ==========================================
function setupEventListeners() {
    document.querySelectorAll('input[name="nominal"]').forEach(radio => {
        radio.addEventListener('change', function() {
            selectedPrice = parseInt(this.getAttribute('data-price'));
            selectedCategory = this.getAttribute('data-path');
            
            document.getElementById('display-item').innerText = this.value + " (" + selectedCategory + ")";
            calculateTotal();
        });
    });
}

function calculateTotal() {
    const qty = parseInt(document.getElementById('purchase-qty').value) || 1;
    const total = selectedPrice * qty;
    document.getElementById('display-total').innerText = 'Rp ' + total.toLocaleString('id-ID');
}

function handlePaymentConfirmation() {
    const userID = document.getElementById("user-id").value;
    const zoneID = document.getElementById("zone-id").value;
    const payment = document.querySelector('input[name="payment"]:checked');
    const item = document.getElementById('display-item').innerText;

    if (!userID || !zoneID || item === "-" || !payment) {
        alert("⚠️ Lengkapi data Akun, Pilih Item, dan Metode pembayaran!");
        return;
    }

    currentOrderData = {
        id: userID, 
        zone: zoneID, 
        item: item, 
        qty: document.getElementById('purchase-qty').value,
        method: payment.value.toUpperCase(),
        total: document.getElementById('display-total').innerText,
        path: selectedCategory // Mengambil data jalur yang diset di selectItem
    };

    // UPDATE DI SINI: Tambahkan baris JALUR SISTEM
    document.getElementById("receiptBody").innerHTML = `
        <div class="receipt-item-row"><span class="label">ID Game</span><span class="value">${currentOrderData.id} (${currentOrderData.zone})</span></div>
        <div class="receipt-item-row"><span class="label">Item</span><span class="value">${currentOrderData.item} x${currentOrderData.qty}</span></div>
        <div class="receipt-item-row">
            <span class="label">Jalur Sistem</span>
            <span class="value" style="color: var(--neon-blue); font-weight: bold;">${currentOrderData.path}</span>
        </div>
        <div class="receipt-item-row"><span class="label">Metode</span><span class="value">${currentOrderData.method}</span></div>
        <div class="receipt-total"><span class="total-label">TOTAL</span><span class="total-value">${currentOrderData.total}</span></div>
    `;
    document.getElementById("receiptModal").style.display = "flex";
}

function sendToWhatsApp() {
    const phone = "628214934380";
    
    // Format pesan dengan tambahan baris JALUR
    const text = `Halo Admin Relaxxa, konfirmasi pesanan:
----------------------------------
🎮 Game: MLBB
🆔 ID: ${currentOrderData.id} (${currentOrderData.zone})
💎 Item: ${currentOrderData.item} (x${currentOrderData.qty})
🚀 Jalur: ${currentOrderData.path} 
💳 Metode: ${currentOrderData.method}
💰 Total: ${currentOrderData.total}
----------------------------------
Mohon segera diproses ya min!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
}

function closeReceipt() {
    document.getElementById("receiptModal").style.display = "none";
}

// Inisialisasi awal
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    
    // Logika Navbar
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(navToggle) navToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
});

function updateQty(val) {
    let input = document.getElementById('purchase-qty');
    let v = parseInt(input.value) + val;
    if(v >= 1) { input.value = v; calculateTotal(); }
}

function openHelpModal() { document.getElementById("helpModal").style.display = "flex"; }
function closeHelpModal() { document.getElementById("helpModal").style.display = "none"; }

function switchJalur(jalur, element) {
    if (currentJalur === jalur) return; // Jangan jalankan jika klik jalur yang sama

    const wrapper = document.getElementById('slide-wrapper');
    
    // 1. Jalankan Animasi Keluar (Sesuai CSS kamu)
    wrapper.classList.add(jalur === 'B' ? 'slide-out-left' : 'slide-out-right');

    // 2. Proses Perpindahan Data & Tombol
    setTimeout(() => {
        currentJalur = jalur;
        
        // Update Class Active pada Tombol
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        if (element) {
            element.classList.add('active');
        }

        // Update Deskripsi Jalur
        const desc = document.getElementById('jalur-desc');
        if (desc) {
            desc.innerText = jalur === 'A' 
                ? "🚀 Menampilkan stok Premium (Proses 1-15 Menit)" 
                : "💰 Menampilkan stok Promo (Proses 5-60 Menit)";
        }

        // Render Ulang Produk & Reset Pilihan
        renderProducts();
        resetSelection();

        // 3. Kembalikan Posisi Wrapper (Selesai Geser)
        wrapper.classList.remove('slide-out-left', 'slide-out-right');
    }, 300); // Sesuaikan dengan durasi transisi CSS
}

function selectItem(name, price) {
    // Simpan harga untuk kalkulasi
    selectedPrice = price; 
    
    // Tentukan teks Jalur berdasarkan state currentJalur
    selectedCategory = (currentJalur === 'A') ? "Jalur A (Premium)" : "Jalur B (Promo)";

    document.getElementById('display-item').innerText = name;
    
    const qty = document.getElementById('purchase-qty').value || 1;
    document.getElementById('display-total').innerText = "Rp " + (price * qty).toLocaleString('id-ID');
}

// === loding screen ===
window.addEventListener("load", function() {
    const loader = document.getElementById("loader-wrapper");
    
    // Memberikan sedikit delay 1 detik agar animasi terlihat sebentar (opsional)
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 1000); 
});

// === loding screen ===
