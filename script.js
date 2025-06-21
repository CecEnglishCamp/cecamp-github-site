// About - Read More 기능
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const extra = button.nextElementSibling;
    const isExpanded = extra.classList.toggle('expanded');
    button.textContent = isExpanded ? 'Show Less' : 'Read More';
    if (isExpanded) {
      extra.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Programs 카드 클릭 → 모달처럼 확대
document.querySelectorAll('.program-card').forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      card.classList.remove('active');
      const closeBtn = card.querySelector('.close-btn');
      if (closeBtn) closeBtn.remove();
      return;
    }
    card.classList.add('active');
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.className = 'close-btn';
    closeBtn.onclick = () => {
      card.classList.remove('active');
      closeBtn.remove();
    };
    card.appendChild(closeBtn);
  });
});
