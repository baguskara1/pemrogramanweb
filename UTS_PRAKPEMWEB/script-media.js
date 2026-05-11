document.addEventListener('DOMContentLoaded', () => {
    console.log('Halaman Media SMAN 11 Yogyakarta Siap.');

    // Contoh interaksi search box
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert('Mencari: ' + searchInput.value);
        }
    });

    // Menambahkan animasi scroll smooth jika ada link internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const kolomPencarian = document.getElementById('kolom-pencarian');
    
    if (kolomPencarian) {
        kolomPencarian.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const kataKunci = kolomPencarian.value.toLowerCase().trim();
                
                const daftarHalaman = {
                    'beranda': 'index.html',
                    'media': 'media.html',
                    'profil': 'profil.html',
                    'kontak': 'kontak.html',
                    'ekstrakurikuler': 'ekstrakurikuler.html',
                    'daftar online': 'daftar-online.html'
                };

                if (daftarHalaman[kataKunci]) {
                    window.location.href = daftarHalaman[kataKunci];
                } else {
                    alert('Halaman tidak ditemukan silahkan pilih saran yang tersedia');
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});