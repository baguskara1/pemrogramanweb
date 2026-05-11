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