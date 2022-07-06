let $start = document.querySelector('#start');
let $game = document.querySelector('#game');
let $tGame = document.querySelector('#time-header');
let $time = document.querySelector('#time');
let $resGame = document.querySelector('#result-header');
let $result = document.querySelector('#result');
let $inputTime = document.querySelector('#game-time');

let tGameNum = parseFloat($time.textContent);
let score = 0;
let isGameStarted = true;

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);
$inputTime.addEventListener('input', setGameTime);


function startGame() {

    setGameTime();
    score = 0;
    isGameStarted = true;

    $inputTime.setAttribute('disabled', 'true');

    $game.style.backgroundColor = '#fff';
    hide($start);

    let intervalId = setInterval(function () {

        if (tGameNum <= 0) {
            clearInterval(intervalId);
            endGame();
        } else {
            $time.textContent = tGameNum.toFixed(1);
            tGameNum -= 0.1;
        }

    }, 100);

    renderBox();
}

function setGameTime() {
    tGameNum = +$inputTime.value;
    $time.textContent = tGameNum.toFixed(1);
    show($tGame);
    hide($resGame);
}

function setGameScore() {
    $result.textContent = score;
}

function endGame() {

    isGameStarted = false;

    $game.innerHTML = '';
    $game.style.backgroundColor = '#ccc';
    show($start);
    hide($tGame);
    show($resGame);

    $inputTime.removeAttribute('disabled');

    setGameScore();
}

function show($el) {
    $el.classList.remove('hide');
}
function hide($el) {
    $el.classList.add('hide');
}

function handleBoxClick(event) {

    if (!isGameStarted) {
        return;
    }

    if (event.target.dataset.box) {
        score++;
        renderBox();
    }
}

function renderBox() {

    $game.innerHTML = '';

    let gameSize = $game.getBoundingClientRect();
    let maxHW = gameSize.width;

    // let boxSize = getRandom(5, maxHW); // myVersion
    let boxSize = getRandom(30, 100); // wfmVersion

    let maxTop = maxHW - boxSize;
    let maxLeft = maxHW - boxSize;

    let box = document.createElement('div');

    box.style.height = box.style.width = boxSize + 'px';
    box.style.position = 'absolute';

    box.style.backgroundColor = getRandomColor();

    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');

    $game.insertAdjacentElement('afterbegin', box);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    // version 1
    // return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    return '#' + Math.random().toString(16).substring(2,8).toUpperCase();

    // version 2
    // let arr ='0123456789ABCDEF';
    // let randColor = '#';
    // for (let i = 0; i<3; i++){
    //     // randColor += arr[Math.floor(Math.random()*16)]; //version 2
    //
    //     // version 3
    //     randColor += arr[getRandom(0,15)];
    // }
    // return randColor;
}


