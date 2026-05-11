document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.ekskul-card');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
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