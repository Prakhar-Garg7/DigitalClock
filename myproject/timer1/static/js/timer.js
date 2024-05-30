var btn  = document.getElementById('start_btn') ;
var hinp  = document.getElementById('hinp') ;
var minp  = document.getElementById('minp') ;
var sinp  = document.getElementById('sinp') ;

btn.addEventListener('click', function(){
                                        let hinpVal = hinp.value ;
                                        let minpVal = minp.value ;
                                        let sinpVal = sinp.value ;

                                        window.location.href = main_timerUrl + "?hours=" + hinpVal + "&minutes=" + minpVal + "&seconds=" + sinpVal ;
})