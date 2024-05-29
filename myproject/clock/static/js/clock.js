var hcount = document.getElementById('hcount');
var mcount = document.getElementById('mcount');
var scount = document.getElementById('scount');
var datecount = document.getElementById('datecount');
var monthcount = document.getElementById('monthcount');
var yearcount = document.getElementById('yearcount');
var ampm = document.getElementById('ampm');

const currDate = new Date () ;

var hoursNow = currDate.getHours() ;
var monthsNow = currDate.getMonth() ;
var secondsNow = currDate.getSeconds() ;
var minutesNow = currDate.getMinutes() ;

if ( hoursNow > 12 ) {
                                        hoursNow -= 12 ;
                                        hcount.textContent = hoursNow.toString().padStart(2, '0') ;
                                        ampm.textContent = ' PM ' ;
}

switch ( monthsNow ) {

                                        case 0 : monthsNow = "January" ; break ;
                                        case 1 : monthsNow = "February" ; break ;
                                        case 2 : monthsNow = "March" ; break ;
                                        case 3 : monthsNow = "April" ; break ;
                                        case 4 : monthsNow = "May" ; break ;
                                        case 5 : monthsNow = "June" ; break ;
                                        case 6 : monthsNow = "July" ; break ;
                                        case 7 : monthsNow = "August" ; break ;
                                        case 8 : monthsNow = "September" ; break ;
                                        case 9 : monthsNow = "October" ; break ;
                                        case 10 : monthsNow = "November" ; break ;
                                        case 11 : monthsNow = "December" ; break ;
}

function updateSeconds () {
                                        secondsNow += 1 ;
                                        if ( secondsNow >= 60 ) secondsNow -= 60 ;
                                        scount.textContent = secondsNow.toString().padStart(2, '0') ;
}

function updateMinutes () {
                                        minutesNow += 1 ;
                                        if ( minutesNow >= 60 ) minutesNow -= 60 ;
                                        mcount.textContent = minutesNow.toString().padStart(2, '0') ;
}

function updateHours () {
                                        hoursNow += 1 ;
                                        if ( hoursNow >= 12 ) {
                                                                                ampm.textContent = ' PM ' ;
                                        }
                                        if ( hoursNow >= 12 ) hoursNow -= 12 ;
                                        hcount.textContent = hoursNow.toString().padStart(2, '0') ;
}

setInterval( updateSeconds, 1000 ) ;
setInterval( updateMinutes, 60000 ) ;
setInterval( updateHours, 360000 ) ;

hcount.textContent = hoursNow ;
mcount.textContent = minutesNow ;
scount.textContent = secondsNow ;
yearcount.textContent = currDate.getFullYear() ;
monthcount.textContent = monthsNow ;
datecount.textContent = currDate.getDate() ;