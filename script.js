function hideAllSections() {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.add('hidden');
    sec.classList.remove('section-full');
  });
  document.getElementById('progFullscreen').classList.add('hidden');
}

document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    hideAllSections();
    const targetID = link.getAttribute('href').substring(1);
    const sec = document.getElementById(targetID);
    if (!sec) return;

    sec.classList.remove('hidden');
    sec.classList.add('section-full');
  });
});

// Programs: 카드 클릭 → 전체 화면 확장
document.querySelectorAll('.program-card .read-more').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.program-card');
    const img = card.querySelector('img').src;
    const title = card.querySelector('h3').textContent;
    const desc = card.querySelector('p').textContent;

    document.getElementById('progImgFull').src = img;
    document.getElementById('progTitleFull').textContent = title;
    document.getElementById('progDescFull').textContent = desc;

    document.getElementById('progFullscreen').classList.remove('hidden');
  });
});

// 전체 화면 – 닫기 버튼
document.querySelector('.close-full').addEventListener('click', () => {
  document.getElementById('progFullscreen').classList.add('hidden');
});
