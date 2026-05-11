document.addEventListener('DOMContentLoaded', () => {
    const ppdbForm = document.getElementById('ppdbForm');
    ppdbForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = document.getElementById('nama').value;
        alert('Halo ' + nama + '. Pendaftaran kamu berhasil dikirim.');
        ppdbForm.reset();
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