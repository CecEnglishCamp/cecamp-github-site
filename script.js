document.addEventListener("DOMContentLoaded", () => {
  // Read more toggle
  const readMoreButtons = document.querySelectorAll('.read-more');

  readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const hiddenText = button.previousElementSibling;
      hiddenText.classList.toggle('expanded');

      if (hiddenText.classList.contains('expanded')) {
        button.textContent = 'Read less';
      } else {
        button.textContent = 'Read more';
      }
    });
  });

  // Optional: Scroll to section if anchor in URL
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

  // Optional: Contact form submission handler
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      contactForm.reset();
    });
  }
});

