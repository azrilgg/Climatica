document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // HERO SLIDER — FINAL FIX VERSION
    // ===============================

    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide(i) {
        slides.forEach(s => s.classList.remove("active"));
        slides[i].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    setInterval(nextSlide, 6000);
    showSlide(index);


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

});
