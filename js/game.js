const playBtn = document.getElementById('playBtn');
const userSelect = document.getElementById('userChoice');
const resultArea = document.getElementById('resultArea');
const userResultSpan = document.getElementById('userResult');
const computerResultSpan = document.getElementById('computerResult');
const gameWinnerSpan = document.getElementById('gameWinner');

const options = {
  'rock': 'Камінь',
  'scissors': 'Ножиці',
  'paper': 'Папір'
};

const keys = ['rock', 'scissors', 'paper'];

playBtn.addEventListener('click', function () {
  const userChoice = userSelect.value;

  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = keys[randomIndex];

  let resultMessage = '';
  let resultClass = '';

  if (userChoice === computerChoice) {
    resultMessage = 'Нічия!';
    resultClass = 'draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    resultMessage = 'Ви виграли!';
    resultClass = 'win';
  } else {
    resultMessage = 'Комп\'ютер виграв!';
    resultClass = 'lose';
  }

  userResultSpan.textContent = options[userChoice];
  computerResultSpan.textContent = options[computerChoice];

  gameWinnerSpan.textContent = resultMessage;
  gameWinnerSpan.className = resultClass;

  resultArea.style.display = 'block';
});
