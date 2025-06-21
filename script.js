const messages = [
  "🤖 EP02: Hidden Warehouse Files — Coming Soon!",
  "🔥 Flash Sale: Season 1 All Access!",
  "📝 New Grammar Module Available Now!",
];

let idx = 0;
const msgEl = document.getElementById('message-line');

function showNextMessage() {
  msgEl.style.opacity = 0;
  setTimeout(() => {
    msgEl.textContent = messages[idx];
    msgEl.style.opacity = 1;
    idx = (idx + 1) % messages.length;
  }, 1000);
}

setInterval(showNextMessage, 4000);
showNextMessage();
