(function () {
  // Animate elements on scroll
  function animateOnView(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animate statistics counter if it's a stat number
        if (entry.target.classList.contains('stat-number')) {
          animateCounter(entry.target);
        }
        
        observer.unobserve(entry.target);
      }
    });
  }

  // Counter animation for statistics
  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    let start = 0;
    const stepTime = 50; // Update every 50ms
    const increment = target / (duration / stepTime);

    const updateCounter = () => {
      start += increment;
      if (start >= target) {
        element.textContent = target;
      } else {
        element.textContent = Math.floor(start);
        setTimeout(updateCounter, stepTime);
      }
    };

    updateCounter();
  }

  // Initialize Intersection Observer for animations
  document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(animateOnView, observerOptions);

    // Observe all elements with the class 'section-animate'
    document.querySelectorAll('.section-animate').forEach(element => {
      observer.observe(element);
    });

    // Observe portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
      observer.observe(item);
    });

    // Observe service cards
    document.querySelectorAll('.service-card').forEach(card => {
      observer.observe(card);
    });

    // Observe contact items
    document.querySelectorAll('.contact-item').forEach(item => {
      observer.observe(item);
    });

    // Add scroll event listener for header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      });
    });

    // Generate floating particles
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${15 + Math.random() * 10}s`;
      particlesContainer.appendChild(particle);
    }
  });
})();