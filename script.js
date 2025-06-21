// Read More 토글
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const txt = btn.previousElementSibling;
    txt.style.maxHeight = txt.style.maxHeight === 'none' ? '100px' : 'none';
    btn.textContent = txt.style.maxHeight === 'none' ? 'Show Less' : 'Read More';
  });
});

// 프로그램 카드 클릭 → 확대 / 축소
document.querySelectorAll('.program-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});
