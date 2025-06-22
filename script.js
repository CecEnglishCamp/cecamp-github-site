// 텍스트 배열
const messages = [
  "📢 Welcome to CEC English Camp!",
  "🎉 New Episodes Every Week!",
  "🤖 Explore with Robo!",
  "🚀 Let's Learn English Creatively!"
];

// 대상 요소
const banner = document.querySelector(".glass-banner p");
let index = 0;

// 메시지 순환 함수
setInterval(() => {
  index = (index + 1) % messages.length;
  banner.textContent = messages[index];
}, 3000);
