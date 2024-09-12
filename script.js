const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

AOS.init({
    offset: 120, // Offset from the top of the page
    delay: 0, // Delay before the animation starts
    duration: 400, // Animation duration
    easing: 'ease-in-out', // Easing function
    once: false // Whether to animate elements only once
  });
