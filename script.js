// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Typing Effect
const typed = new Typed('.typing-text', {
    strings: ['Full Stack Web Development', 'Machine Learning & AI', 'DevOps & Docker', 'Software Engineering'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
});

// Smooth Scroll (100% Works)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const sectionTop = targetSection.offsetTop - 70; // Adjust for navbar height
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    });
});