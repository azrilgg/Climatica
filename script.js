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
// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.style.background = "rgba(0,0,0,0.75)";
        navbar.style.backdropFilter = "blur(12px)";
        navbar.style.padding = "15px 60px";
    } else {
        navbar.style.background = "rgba(255,255,255,0.08)";
        navbar.style.backdropFilter = "blur(12px)";
        navbar.style.padding = "20px 60px";
    }
});

// ===============================
// CATEGORY CLICK ANIMATION
// ===============================

const categories = document.querySelectorAll(".cat-item");

categories.forEach(cat => {
    cat.addEventListener("click", () => {
        cat.classList.add("clicked");

        setTimeout(() => {
            cat.classList.remove("clicked");
        }, 500);

        // OPTIONAL : buka modal / detail
        console.log("Category opened:", cat.querySelector("h3").innerText);
    });
});

// ===============================
// GALLERY CLICK ZOOM ANIMATION
// ===============================

const galleryImgs = document.querySelectorAll(".gallery-grid img");

galleryImgs.forEach(img => {
    img.addEventListener("click", () => {
        img.style.transform = "scale(1.2)";
        img.style.transition = "0.4s ease";

        setTimeout(() => {
            img.style.transform = "scale(1)";
        }, 400);
    });
});

// ===============================
// SMOOTH BUTTON CLICK EFFECT
// ===============================

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.95)";
    });

    btn.addEventListener("mouseup", () => {
        btn.style.transform = "scale(1)";
    });
});

// ===============================
// INPUT FOCUS GLOW
// ===============================

const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.border = "1px solid #00ffc8";
        input.style.boxShadow = "0 0 10px #00ffc870";
    });

    input.addEventListener("blur", () => {
        input.style.border = "1px solid rgba(255,255,255,0.2)";
        input.style.boxShadow = "none";
    });
});

// ===============================
// SMOOTH SCROLL FIX
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// =======================
// MOBILE NAV TOGGLE
// =======================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // toggle icon
    if (navLinks.classList.contains('show')) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});
