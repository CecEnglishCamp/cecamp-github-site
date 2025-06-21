// 'Read More' 확장/축소
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    extra.classList.toggle('expanded');
    btn.textContent = extra.classList.contains('expanded') ? 'Close' : 'Read More';
  });
});

// Programs 모달 동작
const programData = [
  {
    img: 'assets/img/program1.jpg',
    title: 'Interactive English Learning',
    desc: 'Engaging activities that teach English through fun. My child looks forward to each session.'
  },
  {
    img: 'assets/img/program2.jpg',
    title: 'Reading Comprehension Programs',
    desc: 'The engaging short novels that captivate attention & reinforce grammar.'
  },
  {
    img: 'assets/img/program3.jpg',
    title: 'English Grammar',
    desc: 'English Grammar helps kids communicate clearly, improving writing and speaking skills.'
  }
];

function openModal(index) {
  const modal = document.getElementById('programModal');
  document.getElementById('modalImg').src = programData[index].img;
  document.getElementById('modalTitle').innerText = programData[index].title;
  document.getElementById('modalText').innerText = programData[index].desc;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('programModal').style.display = 'none';
}
