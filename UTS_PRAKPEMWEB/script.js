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
        gambar: "https://i.ytimg.com/vi/1tF_jUEIOIc/maxresdefault.jpg",
        tautan: "https://blog.sman11yogya.sch.id/kegiatan-belajar",
        keterangan: "Kegiatan Simulasi Bencana Gempa Bumi"
    },
    {
        gambar: "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/124/2023/09/01/01Hirno-Rar5JPG-3137078686.jpg",
        tautan: "https://blog.sman11yogya.sch.id/fasilitas-sekolah",
        keterangan: "Pawai Kebangsaan Anniversary Negeri Sebelas"
    },
    {
        gambar: "https://lazismuumbulharjo.org/wp-content/uploads/2022/01/InkedIMG-20211217-WA0012_LI.jpg",
        tautan: "https://blog.sman11yogya.sch.id/ekstrakurikuler",
        keterangan: "Donasi Bencana Dari SMAN 11 Yogyakarta"
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

document.addEventListener('DOMContentLoaded', () => {
    const inputCari = document.querySelector('.search-box input')
    
    if (inputCari) {
        inputCari.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault()
                const kataKunci = inputCari.value.toLowerCase().trim()
                
                const daftarHalaman = {
                    'beranda': 'index.html',
                    'media': 'media.html',
                    'profil': 'profile.html',
                    'kontak': 'kontak.html',
                    'ekstrakurikuler': 'ekstrakurikuler.html',
                    'daftar online': 'daftar.html'
                }

                if (daftarHalaman[kataKunci]) {
                    window.location.href = daftarHalaman[kataKunci]
                } else {
                    alert('Halaman tidak ditemukan. Silakan pilih saran yang tersedia.')
                }
            }
        })
    }
})