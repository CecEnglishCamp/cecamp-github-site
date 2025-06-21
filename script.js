// Read More 기능
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    extra.classList.toggle('expanded');
    btn.textContent = extra.classList.contains('expanded') ? 'Close' : 'Read More';
  });
});

// Program 카드 클릭 → 확대
document.querySelectorAll('.program-card').forEach(card => {
  card.addEventListener('click', () => {
    // 이미 열려있는 다른 카드 닫기
    document.querySelectorAll('.program-card.active').forEach(openCard => {
      if (openCard !== card) openCard.classList.remove('active');
    });

    card.classList.toggle('active');

    // Close 버튼이 없는 경우 추가
    if (!card.querySelector('.close-btn')) {
      const closeBtn = document.createElement('button');
      closeBtn.textContent = 'Close';
      closeBtn.classList.add('close-btn');
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 부모 카드 클릭 이벤트 방지
        card.classList.remove('active');
        closeBtn.remove();
      });
      card.appendChild(closeBtn);
    }
  });
});
