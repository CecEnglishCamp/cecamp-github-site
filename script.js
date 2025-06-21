// Read More 기능
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

// Program 카드 클릭 시 확대 / 닫기
document.querySelectorAll('.program-card').forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) return;

    card.classList.add('active');

    if (!card.querySelector('.close-btn')) {
      const closeBtn = document.createElement('button');
      closeBtn.textContent = 'Close';
      closeBtn.className = 'close-btn';
      closeBtn.onclick = () => {
        card.classList.remove('active');
        closeBtn.remove();
      };
      card.appendChild(closeBtn);
    }
  });
});
