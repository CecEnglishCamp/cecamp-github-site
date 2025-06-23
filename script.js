// 모달 열기: 프로그램 카드의 "Read More" 버튼 클릭 시
document.querySelectorAll('.program-card .read-more').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.program-card');
    const img = card.querySelector('img')?.getAttribute('src');
    const title = card.querySelector('h3')?.textContent;
    const desc = card.querySelector('p')?.textContent;

    // 전체 화면 영역에 채워넣기
    const modal = document.getElementById('progFullscreen');
    modal.classList.remove('hidden');

    const imgEl = document.getElementById('progImgFull');
    const titleEl = document.getElementById('progTitleFull');
    const descEl = document.getElementById('progDescFull');

    if (imgEl && img) imgEl.src = img;
    if (titleEl) titleEl.textContent = title || '';
    if (descEl) descEl.textContent = desc || '';
  });
});

// 모달 닫기: 닫기 버튼 클릭 시
document.getElementById('progCloseBtn').addEventListener('click', () => {
  document.getElementById('progFullscreen').classList.add('hidden');
});

// 메뉴 네비게이션 스크롤 (선택사항)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
