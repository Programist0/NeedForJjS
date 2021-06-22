const score = document.querySelector('.score'), 
	start = document.querySelector('.start'),
	gameArea = document.querySelector('.gameArea'),
	car = document.createElement('div');

car.classList.add('car');

start.addEventListener('click', playGame);
document.addEventListener('keydown', startRun);	
document.addEventListener('keyup', stopRun);	

const keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowRight: false,
	ArrowLeft: false
}

const setting = {
	start: false,
	speed: 3,
	score: 0
}

function playGame(){
	start.classList.add('hide');
	setting.start = true;
	gameArea.appendChild(car);
	requestAnimationFrame(playGame);
}

function startRun(ev){
	ev.preventDefault();
	keys[ev.key] = true;
	if (setting.start === true) {
		requestAnimationFrame(playGame);
	}
}
function stopRun(ev){
	ev.preventDefault();
	keys[ev.key] = false;
}