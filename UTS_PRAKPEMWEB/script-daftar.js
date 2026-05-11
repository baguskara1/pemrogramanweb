document.addEventListener('DOMContentLoaded', () => {
    const ppdbForm = document.getElementById('ppdbForm');
    ppdbForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = document.getElementById('nama').value;
        alert('Halo ' + nama + '. Pendaftaran kamu berhasil dikirim.');
        ppdbForm.reset();
    });
});