// Dynamic current year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: animate only once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((section) => {
    observer.observe(section);
});

// Simple Navbar Blur effect on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(250, 250, 250, 0.85)';
    }
});
