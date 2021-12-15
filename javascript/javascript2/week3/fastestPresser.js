const timeInput = document.querySelector('#timeInputMarkup');
const startGameButton = document.querySelector('#startGameMarkup')
let timeInputValue;
let setTimer;
let secs;

startGameButton.addEventListener('click', startGameFunc);
document.getElementById('restartGameMarkup').addEventListener('click', startGameFunc)

function startGameFunc() {
    timeInputValue = timeInput.value;
    clearContent();
    if(timeInputValue === '') {
        alert('Time is not specifed so default time set to 5seconds and starts the game')
        timeInputValue = 5; // default time set to 5seconds if user doesent specifies time
    }
    secs = 1;
    setTimer = setInterval(countTimer, 1000);
    document.addEventListener('keypress', logKey);
    setTimeout(delayTime, timeInputValue * 1000);
}

let countS = 0;
let countL = 0;
function logKey(e) {
    const keyPressed = e.key.toLowerCase();
    if(keyPressed === 's') {
        countS += 1;
        document.getElementById('countSMarkup').innerText = countS;
    } else if(keyPressed === 'l') {
        countL += 1;
        document.getElementById('countLMarkup').innerText = countL;
    }
    console.log(keyPressed, countS, countL)
}

function delayTime() {
    document.removeEventListener('keypress', logKey);
    if(countL > countS) {
        document.getElementById('winnerMarkup').innerText = 'L wins'
        setWinnerImage();
    } else if(countS > countL) {
        document.getElementById('winnerMarkup').innerText = 'S wins'
        setWinnerImage();
    } else {
        (countL === 0 && countS === 0)? document.getElementById('winnerMarkup').innerText  = `${timeInputValue} seconds Time is up!!! S or L keys are not pressed` : document.getElementById('winnerMarkup').innerText = 'draw match'
    }
    countS = 0;
    countL = 0;
    console.log('time is up!', timeInputValue)
}

function clearContent(){
    document.getElementById('countSMarkup').innerText = '';
    document.getElementById('countLMarkup').innerText = '';
    document.getElementById('timer').innerHTML = '';
    document.getElementById('winnerMarkup').innerText = '';
    document.getElementById('winnerGifMarkup').setAttribute('src', '');
    document.getElementById('winnerGifMarkup').setAttribute('alt', '');
}

function setWinnerImage() {
    document.getElementById('winnerGifMarkup').setAttribute('src', 'https://media1.giphy.com/media/01zhHXNedw9TDp2b0h/giphy.gif?cid=790b7611e9f0875ec2077f3163d39a253a329ebace015577&rid=giphy.gif&ct=g');
    document.getElementById('winnerGifMarkup').setAttribute('alt', 'WinnerGif');
}


function countTimer() {
    if(secs >= timeInputValue) {
        clearInterval(setTimer)
        document.getElementById('timer').innerHTML = `Game is for ${timeInputValue} seconds , Timer : ${secs} seconds completed, Time is up!!!!`
    } else {
        document.getElementById('timer').innerHTML = `Game is for ${timeInputValue} seconds , Timer : ${secs} seconds completed`
        secs += 1;
    }
}

document.getElementById('clearGameMarkup').addEventListener('click', function() {
    timeInput.value = '';
    clearContent();
})