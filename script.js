const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
      nav.classList.toggle('menu-active');
    });
AOS.init({
    offset: 120, // Offset from the top of the page
    delay: 0, // Delay before the animation starts
    duration: 400, // Animation duration
    easing: 'ease-in-out', // Easing function
    once: false // Whether to animate elements only once
  });
