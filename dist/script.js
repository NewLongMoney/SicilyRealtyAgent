"use strict";
// ============================================================
// 1. NAVBAR — scroll transition + active link tracking
// ============================================================
const navbar = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (!navbar)
        return;
    if (window.scrollY > 80) {
        navbar.style.transition = 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease';
        navbar.style.background = 'rgba(7,28,47,0.97)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(229,169,60,0.15)';
    }
    else {
        navbar.style.transition = 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease';
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.borderBottom = 'none';
    }
});
// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.4 });
sections.forEach((section) => sectionObserver.observe(section));
// ============================================================
// Mobile Search Toggle
// ============================================================
function toggleMobileSearch() {
    const desktopFields = document.querySelector('.desktop-search-fields');
    if (desktopFields) {
        desktopFields.classList.toggle('active');
    }
}
// ============================================================
// 2. MOBILE MENU
// ============================================================
const menuToggle = document.querySelector('.hamburger-btn');
const mobileMenu = document.querySelector('.mobile-nav-panel');
const mobileClose = document.querySelector('.mobile-nav-close');
menuToggle === null || menuToggle === void 0 ? void 0 : menuToggle.addEventListener('click', () => {
    mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
});
mobileClose === null || mobileClose === void 0 ? void 0 : mobileClose.addEventListener('click', closeMobileMenu);
mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
});
function closeMobileMenu() {
    mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}
// ============================================================
// 3. HERO VIDEO ROTATOR
// ============================================================
const heroVids = document.querySelectorAll('.hero-vid');
let currentVidIndex = 0;
const VID_DURATION_MS = 8000;
function rotateHeroVideo() {
    heroVids[currentVidIndex].classList.remove('active');
    currentVidIndex = (currentVidIndex + 1) % heroVids.length;
    heroVids[currentVidIndex].play().catch(() => { });
    heroVids[currentVidIndex].classList.add('active');
    updateDots(currentVidIndex);
}
const vidDots = document.querySelectorAll('.vid-dot');
function updateDots(index) {
    vidDots.forEach((dot) => dot.classList.remove('active'));
    if (vidDots[index])
        vidDots[index].classList.add('active');
}
vidDots.forEach((dot) => {
    dot.addEventListener('click', () => {
        var _a;
        const index = parseInt((_a = dot.dataset.index) !== null && _a !== void 0 ? _a : '0', 10);
        heroVids[currentVidIndex].classList.remove('active');
        currentVidIndex = index;
        heroVids[currentVidIndex].play().catch(() => { });
        heroVids[currentVidIndex].classList.add('active');
        updateDots(currentVidIndex);
    });
});
if (heroVids.length > 0) {
    heroVids[0].play().catch(() => { });
    heroVids.forEach((vid) => vid.load());
    setInterval(rotateHeroVideo, VID_DURATION_MS);
}
// ============================================================
// 4. HERO SEARCH — filter + scroll to properties
// ============================================================
function handleSearch() {
    var _a, _b, _c, _d, _e;
    const location = (_b = (_a = (document.querySelector('[name="location"]'))) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
    const type = (_d = (_c = (document.querySelector('[name="type"]'))) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
    const cards = document.querySelectorAll('.property-card');
    let anyVisible = false;
    cards.forEach((card) => {
        var _a, _b;
        const cardLocation = ((_a = card.dataset.location) !== null && _a !== void 0 ? _a : '').toLowerCase();
        const cardType = ((_b = card.dataset.type) !== null && _b !== void 0 ? _b : '').toLowerCase();
        const locationMatch = !location || cardLocation.includes(location.toLowerCase());
        const typeMatch = !type || cardType.includes(type.toLowerCase());
        const show = locationMatch && typeMatch;
        card.style.display = show ? 'flex' : 'none';
        if (show)
            anyVisible = true;
    });
    // Reset if no match
    if (!anyVisible) {
        cards.forEach((card) => { card.style.display = 'flex'; });
    }
    (_e = document.getElementById('properties')) === null || _e === void 0 ? void 0 : _e.scrollIntoView({ behavior: 'smooth' });
}
function handleHeroSearch() {
    var _a, _b;
    const location = (_b = (_a = (document.querySelector('[name="location"]'))) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
    const propertiesSection = document.getElementById('properties');
    const cards = document.querySelectorAll('.property-card');
    propertiesSection === null || propertiesSection === void 0 ? void 0 : propertiesSection.scrollIntoView({ behavior: 'smooth' });
    if (location) {
        cards.forEach((card) => {
            var _a;
            const cardArea = ((_a = card.dataset.area) !== null && _a !== void 0 ? _a : '').toLowerCase();
            card.style.display = cardArea.includes(location) ? '' : 'none';
        });
    }
}
window.handleSearch = handleSearch;
window.handleHeroSearch = handleHeroSearch;
// ============================================================
// 5. PROPERTY FILTER TABS
// ============================================================
const filterTabs = document.querySelectorAll('.category-btn');
const propertyCards = document.querySelectorAll('.property-card');
filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        var _a;
        filterTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = (_a = tab.dataset.filter) !== null && _a !== void 0 ? _a : 'all';
        propertyCards.forEach((card) => {
            var _a;
            const category = (_a = card.dataset.category) !== null && _a !== void 0 ? _a : '';
            const show = filter === 'all' || category === filter;
            card.style.display = show ? 'flex' : 'none';
        });
    });
});
// ============================================================
// 6. ANIMATED STAT COUNTERS
// ============================================================
function animateCounter(el, target, suffix = '', prefix = '') {
    const duration = 1800;
    const start = performance.now();
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = prefix + current.toLocaleString() + suffix;
        if (progress < 1)
            requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        var _a, _b, _c;
        if (!entry.isIntersecting)
            return;
        const el = entry.target;
        const target = parseInt((_a = el.dataset.target) !== null && _a !== void 0 ? _a : '0', 10);
        const suffix = (_b = el.dataset.suffix) !== null && _b !== void 0 ? _b : '';
        const prefix = (_c = el.dataset.prefix) !== null && _c !== void 0 ? _c : '';
        animateCounter(el, target, suffix, prefix);
        counterObserver.unobserve(el);
    });
}, { threshold: 0.5 });
document.querySelectorAll('[data-counter]').forEach((el) => {
    counterObserver.observe(el);
});
// ============================================================
// 7. FAQ ACCORDION
// ============================================================
const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        const answer = btn.nextElementSibling;
        // Close all
        faqButtons.forEach((b) => {
            b.setAttribute('aria-expanded', 'false');
            const a = b.nextElementSibling;
            if (a) {
                a.style.maxHeight = '0';
                a.style.paddingBottom = '0';
            }
        });
        // Open clicked if it was closed
        if (!isOpen && answer) {
            btn.setAttribute('aria-expanded', 'true');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.paddingBottom = '20px';
        }
    });
});
// ============================================================
// 8. CONTACT FORM — validation + success state
// ============================================================
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
contactForm === null || contactForm === void 0 ? void 0 : contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const nameInput = contactForm.querySelector('[name="full_name"]');
    const phoneInput = contactForm.querySelector('[name="phone"]');
    // Name validation
    if (nameInput && nameInput.value.trim().length < 2) {
        showFieldError(nameInput, 'Please enter your full name');
        valid = false;
    }
    else if (nameInput)
        clearFieldError(nameInput);
    // Phone validation — Kenyan format
    if (phoneInput) {
        const phoneClean = phoneInput.value.replace(/\s/g, '');
        const kenyanPhone = /^(\+254|0)[17]\d{8}$/;
        if (!kenyanPhone.test(phoneClean)) {
            showFieldError(phoneInput, 'Enter a valid Kenyan number e.g. +254 7XX XXX XXX');
            valid = false;
        }
        else
            clearFieldError(phoneInput);
    }
    if (!valid)
        return;
    // Success state
    if (contactForm && formSuccess) {
        contactForm.style.display = 'none';
        formSuccess.style.display = 'flex';
    }
});
function showFieldError(input, message) {
    var _a;
    clearFieldError(input);
    input.style.borderBottomColor = '#E24B4A';
    const err = document.createElement('span');
    err.className = 'field-error';
    err.textContent = message;
    err.style.cssText = 'color:#E24B4A;font-size:0.72rem;display:block;margin-top:4px;';
    (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(err);
}
function clearFieldError(input) {
    var _a, _b;
    input.style.borderBottomColor = '';
    (_b = (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.field-error')) === null || _b === void 0 ? void 0 : _b.remove();
}
// ============================================================
// 9. SMOOTH SCROLL — all anchor links
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        var _a;
        const href = (_a = anchor.getAttribute('href')) !== null && _a !== void 0 ? _a : '#';
        if (href === '#')
            return;
        e.preventDefault();
        const target = document.querySelector(href);
        target === null || target === void 0 ? void 0 : target.scrollIntoView({ behavior: 'smooth' });
    });
});
// ============================================================
// 10. FLOATING WHATSAPP BUTTON — show after 3s
// ============================================================
const waBtn = document.getElementById('wa-float');
setTimeout(() => {
    waBtn === null || waBtn === void 0 ? void 0 : waBtn.classList.add('visible');
}, 3000);
// ============================================================
// 11. PROPERTY CARD SKELETON LOADER
// ============================================================
const cardImages = document.querySelectorAll('.property-card img');
cardImages.forEach((img) => {
    const wrap = img.closest('.card-img-wrap');
    if (!wrap)
        return;
    wrap.classList.add('loading');
    img.addEventListener('load', () => {
        wrap.classList.remove('loading');
    });
    img.addEventListener('error', () => {
        wrap.classList.remove('loading');
        wrap.classList.add('img-error');
        img.style.display = 'none';
    });
});
// ============================================================
// 11. CONTACT FORM VALIDATION & SUBMISSION
// ============================================================
function handleContact(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const interestSelect = document.getElementById('interest');
    const messageTextarea = document.getElementById('message');
    const submitButton = form.querySelector('button[type="submit"]');
    const successDiv = document.getElementById('form-success');
    // Clear previous errors
    document.querySelectorAll('.form-error').forEach((el) => {
        el.textContent = '';
        el.classList.remove('show');
    });
    document.querySelectorAll('.input').forEach((el) => {
        el.classList.remove('error');
    });
    let isValid = true;
    let errorMessage = '';
    // Validate name
    if (!nameInput.value.trim() || nameInput.value.length < 2) {
        showError('name-error', 'Please enter your full name (min 2 characters)');
        isValid = false;
    }
    else if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
        showError('name-error', 'Name should only contain letters and spaces');
        isValid = false;
    }
    // Validate phone
    const phonePattern = /^\+254\s\d{3}\s\d{3}\s\d{3}$/;
    if (!phonePattern.test(phoneInput.value)) {
        showError('phone-error', 'Please enter a valid Kenyan phone number (+254 XXX XXX XXX)');
        isValid = false;
    }
    // Validate email (optional but if provided, must be valid)
    if (emailInput.value && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }
    // Validate interest
    if (!interestSelect.value) {
        showError('interest-error', 'Please select what you are looking for');
        isValid = false;
    }
    // Validate message
    if (!messageTextarea.value.trim() || messageTextarea.value.length < 10) {
        showError('message-error', 'Please tell us more about what you are looking for (min 10 characters)');
        isValid = false;
    }
    if (isValid) {
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            // Show success state
            form.style.display = 'none';
            successDiv.style.display = 'block';
            // Reset form after 5 seconds
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                successDiv.style.display = 'none';
                submitButton.textContent = 'Send Enquiry';
                submitButton.disabled = false;
            }, 5000);
        }, 1500);
    }
}
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
        // Highlight the input field
        const inputElement = errorElement.previousElementSibling;
        if (inputElement) {
            inputElement.classList.add('error');
        }
    }
}
window.handleContact = handleContact;
document.querySelectorAll('.property-card img').forEach((img) => {
    img.addEventListener('load', () => img.classList.add('loaded'));
    if (img.complete)
        img.classList.add('loaded');
});
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 900, once: true, offset: 80 });
}
// ============================================================
// 13. MOBILE BOTTOM NAV — active state
// ============================================================
const bottomNavLinks = document.querySelectorAll('.bottom-nav a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.id;
        }
    });
    bottomNavLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});
