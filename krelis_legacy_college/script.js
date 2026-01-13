// INDEX.HTML
(function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mainNav = document.getElementById('mainNav');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
    mainNav.classList.add('active');
    menuOverlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    menuClose.focus();
    }

    function closeMenu() {
    mainNav.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuToggle.focus();
    }

    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        closeMenu();
    }
    });

    const navLinks = mainNav.querySelectorAll('.krelis-nav__link');
    navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
    });
})();

// 

// ABOUT.HTML
(function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mainNav = document.getElementById('mainNav');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
    mainNav.classList.add('active');
    menuOverlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    menuClose.focus();
    }

    function closeMenu() {
    mainNav.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuToggle.focus();
    }

    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        closeMenu();
    }
    });

    const navLinks = mainNav.querySelectorAll('.krelis-nav__link');
    navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
    });
})();

// 

// ACADEMICS
(function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mainNav = document.getElementById('mainNav');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
    mainNav.classList.add('active');
    menuOverlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    menuClose.focus();
    }

    function closeMenu() {
    mainNav.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuToggle.focus();
    }

    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        closeMenu();
    }
    });

    const navLinks = mainNav.querySelectorAll('.krelis-nav__link');
    navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
    });
})();

// Accordion functionality
(function() {
    const accordionButtons = document.querySelectorAll('.krelis-accordion__button');

    accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        const contentId = this.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        // Toggle current accordion
        if (expanded) {
        this.setAttribute('aria-expanded', 'false');
        content.classList.remove('active');
        } else {
        // Close all other accordions
        accordionButtons.forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
            const otherContentId = btn.getAttribute('aria-controls');
            document.getElementById(otherContentId).classList.remove('active');
        });

        // Open clicked accordion
        this.setAttribute('aria-expanded', 'true');
        content.classList.add('active');
        }
    });

    // Keyboard accessibility
    button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
        }
    });
    });
})();

// 

// ADMISSION FORM
(function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mainNav = document.getElementById('mainNav');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
    mainNav.classList.add('active');
    menuOverlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    menuClose.focus();
    }

    function closeMenu() {
    mainNav.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuToggle.focus();
    }

    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        closeMenu();
    }
    });

    const navLinks = mainNav.querySelectorAll('.krelis-nav__link');
    navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
    });
})();

// Form submission handling
(function() {
    const admissionForm = document.getElementById('admissionForm');

    admissionForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic form validation
    const formData = new FormData(admissionForm);
    let isValid = true;
    const requiredFields = [
        'firstName', 'surname', 'otherName', 'dateOfBirth', 
        'placeOfBirth', 'sex', 'address', 'parentName', 
        'parentContact', 'classAdmission'
    ];

    requiredFields.forEach(field => {
        const input = admissionForm.elements[field];
        if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#dc3545';
        } else {
        input.style.borderColor = '#d0d0d0';
        }
    });

    if (isValid) {
        // Success message (in production, this would submit to a server)
        alert('Thank you for your application! Our team will review your submission and respond within 24 hours.');
        admissionForm.reset();
    } else {
        alert('Please fill in all required fields marked with *');
    }
    });

    // Reset border color on input
    const inputs = admissionForm.querySelectorAll('.krelis-form__input, .krelis-form__textarea');
    inputs.forEach(input => {
    input.addEventListener('input', function() {
        this.style.borderColor = '#d0d0d0';
    });
    });
})();

// 

// ADMISSION
(function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mainNav = document.getElementById('mainNav');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
    mainNav.classList.add('active');
    menuOverlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    menuClose.focus();
    }

    function closeMenu() {
    mainNav.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuToggle.focus();
    }

    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        closeMenu();
    }
    });

    const navLinks = mainNav.querySelectorAll('.krelis-nav__link');
    navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
    });
})();

// 

// CALENDER
(function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mainNav = document.getElementById('mainNav');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
    mainNav.classList.add('active');
    menuOverlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    menuClose.focus();
    }

    function closeMenu() {
    mainNav.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuToggle.focus();
    }

    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        closeMenu();
    }
    });

    const navLinks = mainNav.querySelectorAll('.krelis-nav__link');
    navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
    });
})();

// 

    // Mobile menu toggle functionality
(function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mainNav = document.getElementById('mainNav');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
    mainNav.classList.add('active');
    menuOverlay.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    menuClose.focus();
    }

    function closeMenu() {
    mainNav.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuToggle.focus();
    }

    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        closeMenu();
    }
    });

    const navLinks = mainNav.querySelectorAll('.krelis-nav__link');
    navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
    });
})();

// Contact
(function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Success (in production, this would submit to a server)
    alert('Thank you for contacting us! We will respond within 24 hours.');
    contactForm.reset();
    });
})();