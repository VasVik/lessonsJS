let $start = document.querySelector('#start');
let $game = document.querySelector('#game');
let $tGame = document.querySelector('#time-header');
let $time = document.querySelector('#time');
let $resGame = document.querySelector('#result-header');
let $result = document.querySelector('#result');

let tGameNum = parseFloat($time.textContent);
let score = 0;
let isGameStarted = true;

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);


function startGame() {

    score = 0;
    isGameStarted = true;
    $tGame.classList.remove('hide');
    $resGame.classList.add('hide');

    $game.style.backgroundColor = '#fff';
    $start.classList.add('hide');

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

function endGame() {
    // $game.removeEventListener('click', handleBoxClick); //myVersion

    // wfm version
    isGameStarted = false;

    $game.innerHTML = '';
    $game.style.backgroundColor = '#ccc';
    $start.classList.remove('hide');

    $tGame.classList.add('hide');
    $resGame.classList.remove('hide');
    $result.textContent = score;
    $time.textContent = '5.0';
    tGameNum = 5.0;
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
    box.style.backgroundColor = '#000';
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');

    $game.insertAdjacentElement('afterbegin', box);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
