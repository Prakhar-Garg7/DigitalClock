const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var progress_bar = document.getElementById('progress_bar_inner');
var hrem = document.getElementById('hrem');
var mrem = document.getElementById('mrem');
var srem = document.getElementById('srem');
var add1min = document.getElementById('add1min');
var playpause = document.getElementById('playpause');
var reset = document.getElementById('reset');
var close = document.getElementById('close');

var hoursInUrl = urlParams.get('hours');
var minutesInUrl = urlParams.get('minutes');
var secondsInUrl = urlParams.get('seconds');

var oldDate = new Date().getTime();

var totalMilliseconds = (parseInt(hoursInUrl) * 3600 + parseInt(minutesInUrl) * 60 + parseInt(secondsInUrl)) * 1000;
var pauseBtnClickedAtTime = 0 ;

var changeOfWidthOfProgressBarPerSecond = 100 / ( Math.round ( totalMilliseconds / 1000 ) ) ;

hrem.textContent = hoursInUrl.toString().padStart(2, '0');
mrem.textContent = minutesInUrl.toString().padStart(2, '0');
srem.textContent = secondsInUrl.toString().padStart(2, '0');

function updateTime() {
    var newDate = new Date().getTime();
    var remTime = totalMilliseconds - (newDate - oldDate) ;
    if (remTime <= 0) {
        srem.textContent = "00" ;
        progress_bar.style.width = 0 + "%" ;
        clearInterval(updateTimeIntervalID);
        return;
    }
    remTime = Math.round(remTime / 1000);
    progress_bar.style.width = remTime * changeOfWidthOfProgressBarPerSecond + "%" ;
    let h1 = Math.floor(remTime / 3600);
    remTime -= h1 * 3600;
    let m1 = Math.floor(remTime / 60);
    remTime -= m1 * 60;
    let s1 = remTime;
    hrem.textContent = h1.toString().padStart(2, '0');
    mrem.textContent = m1.toString().padStart(2, '0');
    srem.textContent = s1.toString().padStart(2, '0');
}

playpause.addEventListener('click', function(){
    if ( playpause.textContent == "Pause" ) {
    
        playpause.textContent = "Play" ;
        clearInterval(updateTimeIntervalID);
        pauseBtnClickedAtTime = new Date().getTime() ;
    }
    else {
        playpause.textContent = "Pause" ;
        totalMilliseconds += new Date().getTime() - pauseBtnClickedAtTime ;
        updateTimeIntervalID =  setInterval(updateTime, 1000) ;
    }
})

add1min.addEventListener('click', function(){
    totalMilliseconds += 60000;
    changeOfWidthOfProgressBarPerSecond = 100 / ( Math.round ( totalMilliseconds / 1000 ) ) ;
    progress_bar.style.width = changeOfWidthOfProgressBarPerSecond * ( Math.round ( totalMilliseconds / 1000 ) ) + "%";
})

reset.addEventListener('click', function(){
    if ( reset.textContent == "Reset" ) {
    
        reset.textContent = "Play" ;
        clearInterval(updateTimeIntervalID);
        progress_bar.style.width = "100%";
        hrem.textContent = hoursInUrl.toString().padStart(2, '0');
        mrem.textContent = minutesInUrl.toString().padStart(2, '0');
        srem.textContent = secondsInUrl.toString().padStart(2, '0');
    }
    else {
        reset.textContent = "Reset" ;
        oldDate = oldDate = new Date().getTime();
        updateTimeIntervalID =  setInterval(updateTime, 1000) ;
    }
})

close.addEventListener ( 'click', function(){
    window.location.href = timerUrl ;
})

var updateTimeIntervalID = setInterval(updateTime, 1000);
