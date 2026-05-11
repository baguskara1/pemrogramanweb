document.addEventListener('DOMContentLoaded', () => {
    console.log('Halaman Profil SMAN 11 Yogyakarta Siap Dimuat.');

    const cards = document.querySelectorAll('.card');
    
    // Efek muncul perlahan saat gulir halaman
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});