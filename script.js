document.addEventListener('DOMContentLoaded', () => {
  // Show More / Less 토글 버튼
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.getAttribute('data-target');
      const more = document.getElementById(`${t}-more`);
      const visible = more.style.display === 'block';
      more.style.display = visible ? 'none' : 'block';
      btn.textContent = visible ? 'Show More' : 'Show Less';
    });
  });

  // Programs 목록 생성
  const programs = [
    {
      img: 'assets/img/program1.jpg',
      title: 'Interactive English Learning',
      desc: 'Engaging activities that teach English through fun.',
    },
    {
      img: 'assets/img/program2.jpg',
      title: 'Reading Comprehension Programs',
      desc: 'Short novels that captivate attention & reinforce grammar.',
    },
    {
      img: 'assets/img/program3.jpg',
      title: 'English Grammar',
      desc: 'Clear & fun structure to improve writing and speaking skills.',
    },
  ];
  const pl = document.getElementById('programList');
  programs.forEach(p => {
    const el = document.createElement('div');
    el.className = 'program-card';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.title}" />
      <div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>`;
    pl.appendChild(el);
  });

  // 메인 화면 글귀 주기 업데이트
  const messages = [
    '🤖 EP02: Hidden Warehouse Files — Coming Soon!',
    '📣 Now Accepting Sign-ups for Grammar Camp',
    '🔔 New Episode Coming This Friday!'
  ];
  let idx = 0;
  const screenText = document.getElementById('screenText');
  setInterval(() => {
    idx = (idx + 1) % messages.length;
    screenText.style.opacity = '0';
    setTimeout(() => {
      screenText.textContent = messages[idx];
      screenText.style.opacity = '1';
    }, 500);
  }, 6000);
});
