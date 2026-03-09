/* === KONFIGURASI MODAL === */
const modal = document.getElementById("orderModal");
const modalTitle = document.getElementById("modalTitle");

function openModal(gameName) {
    if (modal && modalTitle) {
        modal.style.display = "block";
        modalTitle.innerText = "Top Up " + gameName;
    }
}

function closeModal() {
    if (modal) {
        modal.style.display = "none";
    }
}

// Tutup modal jika user klik di luar kotak modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

/* === HANDLE FORM SUBMIT (DENGAN PENGECEKAN AMAN) === */

// Fungsi Utama Handle Form
function handleForm(e) { 
    // Mencegah refresh halaman
    if (e && typeof e.preventDefault === 'function') {
        e.preventDefault(); 
    }
    
    const titleText = modalTitle ? modalTitle.innerText : "Pesanan";
    alert(titleText + " sedang diproses! Silahkan selesaikan pembayaran.");
    console.log("Form pembayaran berhasil diproses!");
    closeModal();
}

// Pasang event listener ke Form (Cegah Error 'null' di Inspect)
const topupForm = document.getElementById("topupForm");
if (topupForm) {
    topupForm.onsubmit = handleForm;
}

const paymentForm = document.getElementById('payment-form');
if (paymentForm) {
    paymentForm.onsubmit = handleForm;
}

/* === FITUR AUTO SCROLL KE DAFTAR GAME === */

window.addEventListener('load', function() {
    // 1. Matikan ingatan posisi scroll bawaan Chrome
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // 2. Cari ID game-list sesuai HTML kamu
    const gameList = document.getElementById('game-list');
    
    if (gameList) {
        // Berikan delay sedikit agar struktur halaman benar-benar siap
        setTimeout(() => {
            // Ambil posisi elemen dikurangi jarak navbar (offset)
            const offset = 100; 
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = gameList.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }, 300); 
    }
});

// === validasi hamburger menu ===
// 1. Fungsi Toggle Menu (Pastikan ini sudah ada)
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', function(e) {
    e.stopPropagation(); // Mencegah klik menyebar ke window
    navList.classList.toggle('active');
});

// 2. LOGIKA TUTUP SAAT KLIK DI LUAR (BARU)
window.addEventListener('click', function(e) {
    // Jika menu sedang terbuka DAN yang diklik bukan bagian dari menu atau tombol hamburger
    if (navList.classList.contains('active') && 
        !navList.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        
        navList.classList.remove('active');
    }
});

// === loding screen ===
window.addEventListener("load", function() {
    const loader = document.getElementById("loader-wrapper");
    
    // Memberikan sedikit delay 1 detik agar animasi terlihat sebentar (opsional)
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 1000); 
});
// === loding screen ===

// 3. Menutup menu saat link di dalamnya diklik (Sudah ada di saran sebelumnya)
// document.querySelectorAll('.nav-list a').forEach(link => {
//     link.addEventListener('click', () => {
//         navList.classList.remove('active');
//     });
// });