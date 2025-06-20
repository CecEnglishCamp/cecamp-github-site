document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    extra.classList.toggle('expanded');
    btn.textContent = extra.classList.contains('expanded') ? 'Show Less' : 'Read More';
  });
});
// 기존 Read More 스크립트
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    extra.classList.toggle('expanded');
    btn.textContent = extra.classList.contains('expanded') ? 'Show Less' : 'Read More';
  });
});

// 새로 추가할 프로그램 카드 애니메이션이나 상호작용 (예: 확대)
document.querySelectorAll('.program-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
    // 필요에 따라 여기에 modal 띄우는 코드 등 추가 가능
  });
});
