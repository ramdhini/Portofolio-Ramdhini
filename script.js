document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      
      header.classList.add('hide-header');
    } else {
      
      header.classList.remove('hide-header');
    }
    lastScrollTop = scrollTop;
  });
});

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
        threshold: 0.2 
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}


function setupActiveNavLink() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        root: null,
        rootMargin: '-50% 0px -50% 0px', 
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    setupScrollAnimation();
    setupActiveNavLink();
});