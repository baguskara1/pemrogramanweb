const slides = document.querySelectorAll('.slide')
let currentSlide = 0

function nextSlide() {
    slides[currentSlide].classList.remove('active')
    currentSlide = (currentSlide + 1) % slides.length
    slides[currentSlide].classList.add('active')
}

setInterval(nextSlide, 4000)

const dataGaleri = [
    {
        gambar: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800",
        tautan: "https://blog.sman11yogya.sch.id/kegiatan-belajar",
        keterangan: "Kegiatan belajar mengajar siswa di dalam kelas"
    },
    {
        gambar: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800",
        tautan: "https://blog.sman11yogya.sch.id/fasilitas-sekolah",
        keterangan: "Fasilitas perpustakaan lengkap untuk mendukung literasi"
    },
    {
        gambar: "https://images.unsplash.com/photo-1546410531-ee4cb12b489d?q=80&w=800",
        tautan: "https://blog.sman11yogya.sch.id/ekstrakurikuler",
        keterangan: "Latihan rutin tim basket SMAN 11 Yogyakarta"
    }
];

let indeksSlide = 0;

function perbaruiTampilan() {
    const item = dataGaleri[indeksSlide];
    document.getElementById("gambar-slider").src = item.gambar;
    document.getElementById("tautan-slider").href = item.tautan;
    document.getElementById("keterangan-slider").innerText = item.keterangan;
}

function ubahSlide(arah) {
    indeksSlide += arah;
    
    if (indeksSlide >= dataGaleri.length) {
        indeksSlide = 0;
    }
    if (indeksSlide < 0) {
        indeksSlide = dataGaleri.length - 1;
    }
    
    perbaruiTampilan();
}

window.onload = perbaruiTampilan;s