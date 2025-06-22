document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('.full-section');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);

      // Hide all full sections
      sections.forEach(sec => sec.classList.add('hidden'));

      // Show target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
    });
  });
});

// ==== Modal Popup Logic ====
const modal = document.getElementById("programModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-btn");

// 데이터 세트 (예시로 4개 항목)
const programDetails = {
  "Grammar Games": {
    title: "✨ Grammar Games",
    description: "Fun grammar challenges guided by our robot instructor. Perfect for practice and improvement!"
  },
  "Story Listening": {
    title: "🟦 Story Listening",
    description: "Engage in story-based listening missions that improve your comprehension and vocabulary."
  },
  "Speaking Missions": {
    title: "🎤 Speaking Missions",
    description: "Complete speaking tasks to build confidence and fluency in English."
  },
  "Vocabulary Boost": {
    title: "🧠 Vocabulary Boost",
    description: "Daily vocab flash missions to enhance your word power."
  }
};

// 각 Read more 링크에 이벤트 연결
document.querySelectorAll(".program-card a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const title = link.closest(".program-card").querySelector("h3").innerText.trim();
    if (programDetails[title]) {
      modalTitle.textContent = programDetails[title].title;
      modalDescription.textContent = programDetails[title].description;
      modal.style.display = "block";
    }
  });
});

// 닫기 버튼 클릭 시
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 바깥 영역 클릭 시 닫기
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
