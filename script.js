// ===============================
// HERO SLIDER — FINAL FIX VERSION
// ===============================

// Ambil semua slide
let slides = document.querySelectorAll(".slide");
let index = 0;

// Fungsi untuk menampilkan slide
function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

// Auto next slide
function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

// Jalan setiap 6 detik
setInterval(nextSlide, 6000);

// Tampilkan awal
showSlide(index);
    // toggle icon
    if (navLinks.classList.contains('show')) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});
