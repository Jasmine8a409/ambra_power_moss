// script.js
document.addEventListener('DOMContentLoaded', () => {
  /* ---------- 1. Dynamic footer year ---------- */
  const yearSpans = document.querySelectorAll('.js-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = currentYear;
  });

  /* ---------- 2. Products: only one open at a time ---------- */
  const toggles = document.querySelectorAll('.product-card input.toggle');

  if (toggles.length) {
    toggles.forEach(toggle => {
      toggle.addEventListener('change', event => {
        const clicked = event.target;

        // If you just opened this one, close all the others
        if (clicked.checked) {
          toggles.forEach(other => {
            if (other !== clicked) {
              other.checked = false;
            }
          });
        }
        // If you unchecked it, we just leave the others as they are (all closed)
      });
    });
  }

  /* ---------- 3. Simple contact form validation ---------- */
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      const name = contactForm.querySelector('input[name="name"]');
      const email = contactForm.querySelector('input[name="email"]');
      const message = contactForm.querySelector('textarea[name="message"]');

      if (
        !name.value.trim() ||
        !email.value.trim() ||
        !message.value.trim()
      ) {
        event.preventDefault();
        alert('Please fill in your name, email, and message before sending.');
      }
    });
  }
});
