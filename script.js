// ===============================
// HERO SLIDER SYSTEM WITH DYNAMIC READMORE
// ===============================

let slides = document.querySelectorAll(".slide");
let index = 0;

// Ambil tombol Read More utama (dalam hero)
const heroBtn = document.querySelector(".hero .btn");

function showSlide(i) {
    slides.forEach((slide, idx) => {
        if (idx === i) {
            slide.classList.add("active");
            slide.style.opacity = 0;
            slide.style.display = "block";

            // fade in
            setTimeout(() => {
                slide.style.transition = "opacity 0.8s ease";
                slide.style.opacity = 1;
            }, 50);

            // Update Read More href & text
            const btnInSlide = slide.querySelector(".btn");
            if (btnInSlide) {
                heroBtn.setAttribute("href", btnInSlide.getAttribute("href"));
                heroBtn.innerHTML = btnInSlide.innerHTML;
            }

        } else {
            slide.classList.remove("active");
            slide.style.transition = "none";
            slide.style.opacity = 0;
            slide.style.display = "none";
        }
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

// init first slide
showSlide(index);

setInterval(nextSlide, 6000); // Auto slideshow 6s


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
        setTimeout(() => cat.classList.remove("clicked"), 500);

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
    btn.addEventListener("mousedown", () => btn.style.transform = "scale(0.95)");
    btn.addEventListener("mouseup", () => btn.style.transform = "scale(1)");
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

    menuToggle.innerHTML = navLinks.classList.contains('show')
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});
