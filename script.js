// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll and section toggle logic
  const navLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Get target section from href (e.g., "#about")
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Hide all sections
      sections.forEach(section => section.classList.add('hidden'));

      // Show the target section
      if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Optional: Read More button modal logic (in progress/future use)
  const readMoreButtons = document.querySelectorAll('.read-more');
  const modal = document.getElementById('programModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const programName = button.dataset.program;
      modalContent.innerHTML = `<h2>${programName}</h2><p>More details coming soon!</p>`;
      modal.classList.remove('hidden');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  // Optional: Close modal on outside click
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});
