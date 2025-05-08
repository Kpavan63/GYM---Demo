// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    offset: 100
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize Swiper (Testimonial Slider)
const testimonialSlider = new Swiper('.testimonial-slider', {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});

// Initialize SimpleLightbox (Gallery)
const galleryLightbox = new SimpleLightbox('.gallery-item', {
    captionsData: 'alt',
    captionDelay: 250
});

// Form Submission (Contact Form)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll just log it and show an alert
        console.log({ name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get email value
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to a server
        // For demonstration, we'll just log it and show an alert
        console.log({ email });
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        
        // Reset form
        newsletterForm.reset();
    });
}

// Class Booking (for demonstration)
const learnMoreButtons = document.querySelectorAll('.class-info .btn-secondary');
learnMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const className = e.target.closest('.class-card').querySelector('h3').textContent;
        alert(`You're interested in our ${className} class! Please visit our gym or call us to book your spot.`);
    });
});

// Membership Signup (for demonstration)
const pricingButtons = document.querySelectorAll('.pricing-footer .btn-primary');
pricingButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const planName = e.target.closest('.pricing-card').querySelector('h3').textContent;
        alert(`Thank you for your interest in our ${planName} plan! Please visit our gym or call us to complete your membership.`);
    });
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Preloader (optional)
window.addEventListener('load', () => {
    // Add this HTML to your index.html if you want a preloader:
    // <div id="preloader">
    //     <div class="loader"></div>
    // </div>
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    }
});
