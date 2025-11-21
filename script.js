// ===============================
// HERO SLIDER SYSTEM - DRAG & SWIPE + READ MORE LINK FIX
// ===============================

const slider = document.querySelector('.hero-slider');
const slides = document.querySelectorAll('.slide');
let isDown = false;
let startX;
let scrollLeft;

// Mapping Read More links sesuai slide index
const readMoreLinks = [
    "https://en.wikipedia.org/wiki/Forest",
    "https://en.wikipedia.org/wiki/Mountain",
    "https://en.wikipedia.org/wiki/River",
    "https://en.wikipedia.org/wiki/Waterfall",
    "https://en.wikipedia.org/wiki/Desert",
    "https://en.wikipedia.org/wiki/Winter",
    "https://en.wikipedia.org/wiki/Lake",
    "https://en.wikipedia.org/wiki/Sunrise",
    "https://en.wikipedia.org/wiki/Sunset",
    "https://en.wikipedia.org/wiki/Fog",
    "https://en.wikipedia.org/wiki/Sky",
    "https://en.wikipedia.org/wiki/Rainforest"
];

// Set initial Read More link
const updateReadMoreLink = (index) => {
    const btn = slides[index].querySelector('a.btn');
    if (btn) btn.href = readMoreLinks[index];
}

// ======================
// Auto Slide Function
// ======================
let index = 0;
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
    updateReadMoreLink(i);
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

// Auto slideshow 6s
setInterval(nextSlide, 6000);

// ======================
// Drag & Swipe
// ======================

// Mouse events (desktop)
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active-drag');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active-drag');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active-drag');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // drag speed
    slider.scrollLeft = scrollLeft - walk;
});

// Touch events (mobile)
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
    isDown = false;
});

slider.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // swipe speed
    slider.scrollLeft = scrollLeft - walk;
});

// Initialize first slide link
updateReadMoreLink(index);
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
