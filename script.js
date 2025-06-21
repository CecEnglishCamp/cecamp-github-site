// Read More 기능 + 카드 확장
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const extra = btn.nextElementSibling;

    if (card.classList.contains('expanded')) {
      card.classList.remove('expanded');
      extra.classList.remove('expanded');
      btn.textContent = 'Read More';
    } else {
      document.querySelectorAll('.card.expanded').forEach(c => {
        c.classList.remove('expanded');
        c.querySelector('.extra-content')?.classList.remove('expanded');
        c.querySelector('.read-more').textContent = 'Read More';
      });

      card.classList.add('expanded');
      extra.classList.add('expanded');
      btn.textContent = 'Close';
    }
  });
});
