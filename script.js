// Read More
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    extra.classList.toggle('expanded');
    btn.textContent = extra.classList.contains('expanded') ? 'Show Less' : 'Read More';
  });
});

// Program 카드 클릭 -> 확대 표시 (나머지 숨김)
const programCards = document.querySelectorAll('.program-card');
const container = document.querySelector('.programs-container');

programCards.forEach(card => {
  card.addEventListener('click', () => {
    const isActive = card.classList.contains('active');
    programCards.forEach(c => c.classList.remove('active'));
    if (!isActive) {
      card.classList.add('active');
      container.classList.add('active-mode');
    } else {
      container.classList.remove('active-mode');
    }
  });
});
