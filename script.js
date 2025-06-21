// Read More 기능
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    extra.classList.toggle('expanded');
    btn.textContent = extra.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});

// Programs 카드 클릭 → 확대/닫기
document.querySelectorAll('.program-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});
