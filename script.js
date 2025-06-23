function toggleChatbot() {
  const chatbot = document.getElementById('chatbot');
  chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById('chat-messages');
  const userMsg = document.createElement('div');
  userMsg.textContent = "You: " + message;
  chatBox.appendChild(userMsg);

  // Placeholder AI reply
  const botMsg = document.createElement('div');
  botMsg.textContent = "🤖 Gromi Bot: Thank you for your message!";
  chatBox.appendChild(botMsg);

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}

