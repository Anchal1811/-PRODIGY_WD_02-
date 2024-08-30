document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the navigation menu on mobile
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
