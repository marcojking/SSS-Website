// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    // Scroll down arrow functionality
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');

    if (scrollDownArrow) {
        scrollDownArrow.addEventListener('click', function() {
            window.scrollBy({
                top: window.innerHeight * 0.8, // Scroll down 80% of viewport height
                behavior: 'smooth'
            });
        });
    }


    // Services Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            const isActive = content.classList.contains('active');

            // Close all accordions
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
            });

            document.querySelectorAll('.accordion-header').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-icon').textContent = '+';
            });

            // Open clicked accordion if it wasn't active
            if (!isActive) {
                content.classList.add('active');
                this.classList.add('active');
                icon.textContent = '-';
            }
        });
    });

    // Clearances Accordion
    const clearanceHeaders = document.querySelectorAll('.clearance-header');

    clearanceHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            const isActive = content.style.maxHeight && content.style.maxHeight !== '0px';

            // Toggle this clearance
            if (!isActive) {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.textContent = '-';
            } else {
                content.style.maxHeight = '0';
                icon.textContent = '+';
            }
        });
    });

    // Contact Form
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                email: this.email.value,
                message: this.message.value
            };

            console.log('Form submitted:', formData);

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');

            // Reset form
            this.reset();
        });
    }

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;

            console.log('Newsletter signup:', email);

            // Show success message
            alert('Thank you for signing up for our newsletter!');

            // Reset form
            this.reset();
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // Add animation on scroll
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

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

});
