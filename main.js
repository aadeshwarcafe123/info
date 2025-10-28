// Aadeshwar Café - Main JavaScript File
// Handles all interactive functionality across the website

// Global variables
let currentFilter = 'all';
let menuItems = [];
let cart = [];

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollAnimations();
    initializeCarousels();
    initializeMenuFiltering();
    initializeCountdownTimer();
    initializeContactMap();
    initializeFAQ();
    initializeCartFunctionality();
});

// Navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Initialize carousels
function initializeCarousels() {
    // Featured dishes carousel (homepage)
    const featuredDishes = document.getElementById('featured-dishes');
    if (featuredDishes) {
        new Splide(featuredDishes, {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                1024: { perPage: 2 },
                640: { perPage: 1 }
            }
        }).mount();
    }
    
    // Gallery carousel (about page)
    const galleryCarousel = document.getElementById('gallery-carousel');
    if (galleryCarousel) {
        new Splide(galleryCarousel, {
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: true,
            pagination: true
        }).mount();
    }
}

// Menu filtering functionality
function initializeMenuFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('menu-search');
    const menuItems = document.querySelectorAll('.menu-item');
    const noResults = document.getElementById('no-results');
    
    // Filter button functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.dataset.filter;
            filterMenuItems();
        });
    });
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterMenuItems();
        });
    }
    
    function filterMenuItems() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        let visibleCount = 0;
        
        menuItems.forEach(item => {
            const category = item.dataset.category;
            const name = item.dataset.name.toLowerCase();
            
            const matchesFilter = currentFilter === 'all' || category === currentFilter;
            const matchesSearch = searchTerm === '' || name.includes(searchTerm);
            
            if (matchesFilter && matchesSearch) {
                item.classList.remove('hidden');
                visibleCount++;
                
                // Add staggered animation
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, visibleCount * 50);
            } else {
                item.classList.add('hidden');
            }
        });
        
        // Show/hide no results message
        if (noResults) {
            if (visibleCount === 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        }
    }
}

// Countdown timer for special offers
function initializeCountdownTimer() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (hoursEl && minutesEl && secondsEl) {
        // Set end time to 3 hours from now for demo
        const endTime = new Date().getTime() + (3 * 60 * 60 * 1000);
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = endTime - now;
            
            if (distance > 0) {
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                hoursEl.textContent = hours.toString().padStart(2, '0');
                minutesEl.textContent = minutes.toString().padStart(2, '0');
                secondsEl.textContent = seconds.toString().padStart(2, '0');
            } else {
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
            }
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
}

// Contact map initialization
function initializeContactMap() {
    const mapElement = document.getElementById('map');
    if (mapElement && typeof L !== 'undefined') {
        // Aadeshwar Café coordinates (Heritage Town, Puducherry)
        const cafeLat = 11.9416;
        const cafeLng = 79.8083;
        
        const map = L.map('map').setView([cafeLat, cafeLng], 16);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Custom marker
        const marker = L.marker([cafeLat, cafeLng]).addTo(map);
        marker.bindPopup(`
            <div style="text-align: center; padding: 10px;">
                <h3 style="margin: 0 0 10px 0; color: #2C3E50; font-family: 'Playfair Display', serif;">Aadeshwar Café</h3>
                <p style="margin: 0 0 5px 0; color: #7D8471;">81, Ground Floor, Eswaran Koil Street</p>
                <p style="margin: 0 0 10px 0; color: #7D8471;">Heritage Town, Puducherry</p>
                <p style="margin: 0; color: #F4D03F; font-weight: bold;">📞 +91 95145 48888</p>
            </div>
        `);
    }
}

// FAQ functionality
function initializeFAQ() {
    window.toggleFAQ = function(button) {
        const content = button.nextElementSibling;
        const icon = button.querySelector('svg');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-content').forEach(el => {
            if (el !== content) {
                el.classList.remove('active');
                el.previousElementSibling.querySelector('svg').style.transform = 'rotate(0deg)';
            }
        });
        
        // Toggle current FAQ
        content.classList.toggle('active');
        
        if (content.classList.contains('active')) {
            icon.style.transform = 'rotate(180deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    };
}

// Cart functionality
function initializeCartFunctionality() {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.dataset.item;
            const itemPrice = parseInt(this.dataset.price);
            
            addToCart(itemName, itemPrice);
            showAddToCartAnimation(this);
        });
    });
    
    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }
        
        updateCartDisplay();
    }
    
    function updateCartDisplay() {
        // Update cart count in navigation if exists
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }
    
    function showAddToCartAnimation(button) {
        // Create temporary success message
        const originalText = button.textContent;
        button.textContent = 'Added! ✓';
        button.style.backgroundColor = '#7D8471';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 1500);
    }
}

// Get directions functionality
function getDirections() {
    const destination = 'Aadeshwar Café, 81, Ground Floor, Eswaran Koil Street, Heritage Town, Puducherry';
    const encodedDestination = encodeURIComponent(destination);
    
    // Try to use Google Maps app if available, otherwise open in browser
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        window.open(`maps://maps.google.com/maps?daddr=${encodedDestination}`);
    } else if (navigator.userAgent.match(/Android/i)) {
        window.open(`geo:0,0?q=${encodedDestination}`);
    } else {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedDestination}`);
    }
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300`;
    
    // Set colors based on type
    switch(type) {
        case 'success':
            notification.className += ' bg-green-500 text-white';
            break;
        case 'error':
            notification.className += ' bg-red-500 text-white';
            break;
        default:
            notification.className += ' bg-heritage-yellow text-deep-charcoal';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Form validation helper
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.phone || !isValidPhone(formData.phone)) {
        errors.push('Please enter a valid phone number');
    }
    
    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images with data-src exist
if (document.querySelectorAll('img[data-src]').length > 0) {
    initializeLazyLoading();
}

// Smooth page transitions
function initializePageTransitions() {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hostname === window.location.hostname) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                // Add fade out effect
                document.body.style.opacity = '0.7';
                document.body.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
}

// Initialize page transitions
initializePageTransitions();

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }
});

// Print functionality
function printPage() {
    window.print();
}

// Export functions for global access
window.getDirections = getDirections;
window.showNotification = showNotification;
window.printPage = printPage;