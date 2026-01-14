// SPA navigation and interactivity
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth < 768) {
      document.querySelector('.mobile-nav').style.display = 'none';
      document.querySelector('.mobile-toggle').setAttribute('aria-expanded', 'false');
    }
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('.mobile-nav');
  const toggle = document.querySelector('.mobile-toggle');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
    toggle.setAttribute('aria-expanded', 'false');
  } else {
    nav.style.display = 'flex';
    toggle.setAttribute('aria-expanded', 'true');
  }
}

// Contact form handler

function showToast(message) {
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function handleContactSubmit(e) {
  e.preventDefault();
  showToast('Thank you for your inquiry! We will get back to you soon.');
  e.target.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.mobile-toggle').addEventListener('click', toggleMobileMenu);
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.addEventListener('click', function() {
      scrollToSection(this.getAttribute('data-section'));
    });
  });
  document.querySelectorAll('.mobile-nav .nav-link').forEach(btn => {
    btn.addEventListener('click', function() {
      scrollToSection(this.getAttribute('data-section'));
      toggleMobileMenu();
    });
  });
  document.getElementById('contact-form').addEventListener('submit', handleContactSubmit);
});
