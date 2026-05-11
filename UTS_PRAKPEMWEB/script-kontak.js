document.addEventListener('DOMContentLoaded', () => {
    const formKontak = document.getElementById('formKontak');

    formKontak.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const subjek = document.getElementById('subjek').value;

        alert(`Terima kasih ${nama}, pesan Anda mengenai "${subjek}" telah terkirim.`);
        
        formKontak.reset();
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