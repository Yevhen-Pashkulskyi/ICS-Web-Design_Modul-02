const clickArea = document.getElementById('clickArea');

let clickCount = 0;

clickArea.addEventListener('click', function (event) {
  clickCount++;

  const x = event.offsetX;
  const y = event.offsetY;

  const marker = document.createElement('div');
  marker.classList.add('marker');
  marker.textContent = clickCount;

  marker.style.left = x + 'px';
  marker.style.top = y + 'px';

  clickArea.appendChild(marker);
});
