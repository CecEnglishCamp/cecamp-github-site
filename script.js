document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      const content = this.previousElementSibling;
      content.classList.toggle('visible');
      this.textContent = content.classList.contains('visible') ? 'Show less' : 'Read more';
    });
  });
});
