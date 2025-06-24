// 기본 Read More 버튼 클릭 시 확장 기능
document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId && targetId.startsWith("#")) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          // 스크롤 이동
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      } else if (targetId && targetId.endsWith(".html")) {
        // 외부 페이지 연결 시 (예: episode-expanded.html)
        window.location.href = targetId;
      }
    });
  });
});

