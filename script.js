// Typewriting animation for "Welcome to my world."
const typingText = document.getElementById('typing-text');
const cursor = document.querySelector('.cursor');
if (typingText) {
    const text = "Welcome to my world.";
    let index = 0;
    const typingSpeed = 100;
    
    function typeWriter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Hide cursor after typing is complete
            if (cursor) {
                cursor.style.display = 'none';
            }
        }
    }
    
    // Start typing animation when page loads
    setTimeout(() => {
        typeWriter();
    }, 1000);
}

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');

if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        const icon = this.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking on a nav link
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't close menu for "Click me" link, handle it separately
            if (!this.classList.contains('nav-link-click-me')) {
                mainNav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// Handle "Click me" link in mobile menu
const clickMeLink = document.getElementById('clickMeLink');
if (clickMeLink) {
    clickMeLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('It\'s nice having you around here 😊');
        // Close menu after showing alert
        const mainNav = document.getElementById('mainNav');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        if (mainNav && mobileMenuToggle) {
            mainNav.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Smooth scrolling for navigation links
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

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Get form data
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const message = this.querySelector('textarea[name="message"]').value.trim();
        const botField = this.querySelector('input[name="bot-field"]').value;
        
        // Check honeypot field - if filled, it's a bot
        if (botField) {
            e.preventDefault();
            return false;
        }
        
        // Client-side validation
        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all fields.');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            return false;
        }
        
        // If validation passes, allow the form to submit normally
        // Netlify will process it and redirect to success.html
        // Don't prevent default - let the form submit naturally
    });
}

// Handle "Get in Touch" button in hero section
const getInTouchBtn = document.querySelector('.hero-buttons .btn-primary');
if (getInTouchBtn) {
    getInTouchBtn.addEventListener('click', function() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Handle "View Projects" button (can be customized)
const viewProjectsBtn = document.querySelector('.hero-buttons .btn-secondary');
if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener('click', function() {
        // Add your projects section link or modal here
        alert('Projects section coming soon!');
    });
}

// Handle "Click me" button
const clickMeBtn = document.querySelector('.btn-resume');
if (clickMeBtn) {
    clickMeBtn.addEventListener('click', function() {
        alert('It\'s nice having you around here 😊');
    });
}

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and timeline items
document.querySelectorAll('.skill-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

