document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    extra.classList.toggle('show');
    btn.textContent = extra.classList.contains('show') ? 'Show Less' : 'Read More';
  });
});

document.querySelectorAll('.prog-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.prog-card.active').forEach(a => {
      if (a !== card) a.classList.remove('active');
    });
    card.classList.toggle('active');
  });
});
