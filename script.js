// ===============================
// HERO SLIDER SYSTEM
// ===============================

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

// Tampilkan slide pertama
showSlide(index);

// Auto slideshow 6 detik
setInterval(nextSlide, 6000);


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

const categories = document.querySelectorAll(".cat-card");

categories.forEach(cat => {
    cat.addEventListener("click", () => {
        cat.classList.add("clicked");

        setTimeout(() => {
            cat.classList.remove("clicked");
        }, 500);

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
        const target = this.getAttribute("href");
        // Hanya smooth scroll untuk internal section, biar link eksternal tetap normal
        if (target.startsWith("#")) {
            e.preventDefault();
            const el = document.querySelector(target);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});


// =======================
// MOBILE NAV TOGGLE
// =======================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    if (navLinks.classList.contains('show')) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});
