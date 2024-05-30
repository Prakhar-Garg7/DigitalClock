var minutesCont = document.getElementById('minutes');
var colonCont = document.getElementById('colon');
var secondsCont = document.getElementById('seconds');
var millisecondsCont = document.getElementById('milliseconds');
var secondsNow = 0;
var millisecondsNow = 0;
var pauseplayBtn = document.getElementById('pauseplay');
var lapBtn = document.getElementById('lap');
var resetBtn = document.getElementById('reset');
var prevLapSeconds = 0;
var prevLapMilliseconds = 0;
var ul = document.getElementsByTagName('ul')[0];

function updateSeconds() {
    secondsNow = secondsNow + 1;
    if (secondsNow >= 60) {
        minutesCont.style.display = "inline";
        colonCont.style.display = "inline";
        minutesCont.textContent = (Math.floor(secondsNow / 60)).toString().padStart(2, '0');
        secondsCont.textContent = (secondsNow % 60).toString().padStart(2, '0');
    } else {
        secondsCont.textContent = (secondsNow % 60).toString().padStart(2, '0');
    }
}

function updateMilliseconds() {
    millisecondsNow = millisecondsNow + 1;
    millisecondsCont.textContent = (millisecondsNow % 100).toString().padStart(2, '0');
}

pauseplayBtn.addEventListener('click', function() {
    if (pauseplayBtn.textContent == 'Pause') {
        pauseplayBtn.textContent = 'Play';
        clearInterval(secondsIntervalId);
        clearInterval(millisecondsIntervalId);
    } else {
        pauseplayBtn.textContent = 'Pause';
        secondsIntervalId = setInterval(updateSeconds, 1000);
        millisecondsIntervalId = setInterval(updateMilliseconds, 10);
    }
});

resetBtn.addEventListener('click', function() {
    if (resetBtn.textContent == 'Reset') {
        resetBtn.textContent = 'Play';
        minutesCont.style.display = 'none';
        colonCont.style.display = 'none';
        secondsCont.textContent = "00";
        millisecondsCont.textContent = "00";
        secondsNow = 0;
        millisecondsNow = 0;
        clearInterval(secondsIntervalId);
        clearInterval(millisecondsIntervalId);
        ul.innerHTML = '';
    } else {
        resetBtn.textContent = 'Reset';
        secondsIntervalId = setInterval(updateSeconds, 1000);
        millisecondsIntervalId = setInterval(updateMilliseconds, 10);
    }
});

lapBtn.addEventListener('click', function() {
    let span1 = document.createElement('span');
    span1.textContent = (Math.floor((secondsNow - prevLapSeconds) / 60)).toString().padStart(2, '0');
    let span2 = document.createElement('span');
    span2.textContent = ':';
    let span3 = document.createElement('span');
    span3.textContent = ((secondsNow - prevLapSeconds) % 60).toString().padStart(2, '0');
    let span4 = document.createElement('span');
    span4.textContent = ':';
    let span5 = document.createElement('span');
    span5.textContent = ((millisecondsNow - prevLapMilliseconds) % 100).toString().padStart(2, '0');
    let span6 = document.createElement('span');
    span6.textContent = (Math.floor(secondsNow / 60)).toString().padStart(2, '0');
    let span7 = document.createElement('span');
    span7.textContent = ':';
    let span8 = document.createElement('span');
    span8.textContent = (secondsNow % 60).toString().padStart(2, '0');
    let span9 = document.createElement('span');
    span9.textContent = ':';
    let span10 = document.createElement('span');
    span10.textContent = (millisecondsNow % 100).toString().padStart(2, '0');

    let li = document.createElement('li');
    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);
    li.appendChild(span4);
    li.appendChild(span5);
    li.appendChild(document.createTextNode('\u00A0\u00A0\u00A0\u00A0')); // Adding non-breaking spaces
    li.appendChild(span6);
    li.appendChild(span7);
    li.appendChild(span8);
    li.appendChild(span9);
    li.appendChild(span10);
    ul.appendChild(li);

    prevLapSeconds = secondsNow;
    prevLapMilliseconds = millisecondsNow;
});

var secondsIntervalId = setInterval(updateSeconds, 1000);
var millisecondsIntervalId = setInterval(updateMilliseconds, 10);
