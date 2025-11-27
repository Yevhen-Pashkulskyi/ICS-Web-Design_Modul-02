const input = document.getElementById('binaryInput');
const btn = document.getElementById('convertBtn');
const resultDisplay = document.getElementById('resultDisplay');

function convertBinaryToDecimal() {
  const binaryString = input.value;

  if (!/^[01]+$/.test(binaryString)) {
    resultDisplay.textContent = "Помилка! Введіть лише 0 та 1";
    resultDisplay.style.color = "red";
    return;
  }

  const decimalNumber = parseInt(binaryString, 2);

  resultDisplay.textContent = `Результат: ${decimalNumber}`;
  resultDisplay.style.color = "#333";
}

btn.addEventListener('click', convertBinaryToDecimal);

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    convertBinaryToDecimal();
  }
});
