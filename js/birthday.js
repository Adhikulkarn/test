// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize portfolio functionality
    initializePortfolio();
});

function initializePortfolio() {
    // Filter functionality
    initializeFilters();
    
    // Mobile menu
    initializeMobileMenu();
    
    // Load more functionality
    initializeLoadMore();
    
    // Smooth animations
    initializeAnimations();
}

// Filter System
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            filterCards(filter, portfolioCards);
        });
    });
}

function filterCards(filter, cards) {
    cards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            card.classList.add('fade-in');
            card.classList.remove('fade-out');
        } else {
            card.classList.add('fade-out');
            card.classList.remove('fade-in');
            
            // Hide after animation
            setTimeout(() => {
                if (card.classList.contains('fade-out')) {
                    card.style.display = 'none';
                }
            }, 300);
        }
    });
}

function initializeMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    if (!menuBtn || !nav) return;

    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
    });
}