// Read More 기능
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    extra.classList.toggle('expanded');
    btn.textContent = extra.classList.contains('expanded') ? 'Close' : 'Read More';
    if (extra.classList.contains('expanded')) {
      extra.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Program 카드 클릭 → 모달 확대
document.querySelectorAll('.program-card').forEach(card => {
  card.addEventListener('click', () => {
    // 다른 열려있는 카드 닫기
    document.querySelectorAll('.program-card.active').forEach(open => {
      if (open !== card) {
        open.classList.remove('active');
        const btn = open.querySelector('.close-btn');
        if (btn) btn.remove();
      }
    });

    card.classList.toggle('active');
    if (card.classList.contains('active')) {
      const btn = document.createElement('button');
      btn.textContent = 'Close';
      btn.classList.add('close-btn');
      btn.addEventListener('click', e => {
        e.stopPropagation();
        card.classList.remove('active');
        btn.remove();
      });
      card.appendChild(btn);
    } else {
      const btn = card.querySelector('.close-btn');
      if (btn) btn.remove();
    }
  });
});
