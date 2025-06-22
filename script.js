document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('.full-section');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);

      // Hide all full sections
      sections.forEach(sec => sec.classList.add('hidden'));

      // Show target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
    });
  });
});
