// Read more 토글
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    extra.classList.toggle('expanded');
    btn.textContent = extra.classList.contains('expanded') ? 'Show Less' : 'Read More';
  });
});

// Programs 클릭 → 단독 보기 / 닫기
document.querySelectorAll('.program-item').forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
    document.querySelectorAll('.program-item').forEach(sib => {
      if (sib !== item) sib.style.display = isActive ? 'none' : '';
    });
  });
});
