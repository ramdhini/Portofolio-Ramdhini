
function setupScrollAnimation() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Adjust this value (0-1) to control when the animation triggers
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Function to handle active navigation links
function setupActiveNavLink() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Remove 'active' class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                // Add 'active' class to the current section's link
                const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // This makes the intersection point the center of the viewport
        threshold: 0
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Call the functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setupScrollAnimation();
    setupActiveNavLink();
});