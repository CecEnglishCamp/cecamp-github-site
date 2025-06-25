```javascript
// script.js

// "Read More" 버튼 클릭 시 알림창 (기본 시연용)
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    alert("Read More section will expand here.");
  });
});
```
