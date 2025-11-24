const btn = document.getElementById('openBtn');
const boxes = document.querySelectorAll('.content-box');

let currentIndex = 0;

btn.addEventListener('click', function() {
  if (currentIndex < boxes.length) {
    // змінюємо display на block
    boxes[currentIndex].style.display = 'block';
    currentIndex++;
  } else {
    alert('Всі блоки вже відкрито!');
    btn.disabled = true;
    btn.textContent = 'Більше немає блоків';
    btn.style.backgroundColor = 'grey';
  }
});
