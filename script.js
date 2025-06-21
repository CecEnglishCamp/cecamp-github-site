// Read More 기능
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('expanded');
    btn.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});
