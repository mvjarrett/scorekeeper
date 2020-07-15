var p1Btn = document.getElementById('p1');
var p2Btn = document.getElementById('p2');
var resetBtn = document.getElementById('reset');
var p1Display = document.getElementById('p1Display');
var p2Display = document.getElementById('p2Display');
var numInput = document.querySelector('input');
var length = document.getElementById('gameLen');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Btn.addEventListener('click', function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			gameOver = true;
			p1Display.classList.add('winner');
		}
		p1Display.textContent = p1Score;
	}
});

p2Btn.addEventListener('click', function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			gameOver = true;
			p2Display.classList.add('winner');
		}
		p2Display.textContent = p2Score;
	}
});

resetBtn.addEventListener('click', function() {
	reset();
});

numInput.addEventListener('change', function() {
	length.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});

function reset() {
	gameOver = false;
	p1Display.classList.remove('winner');
	p2Display.classList.remove('winner');
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
}
