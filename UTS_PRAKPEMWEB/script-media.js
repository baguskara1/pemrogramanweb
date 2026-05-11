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