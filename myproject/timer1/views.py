from django.shortcuts import render

# Create your views here.
def timer ( request ) :
                                        return render ( request, 'timer.html' )

def main_timer ( request ) :
                                        hours = request.GET.get( 'hours' )
                                        minutes = request.GET.get( 'minutes' )
                                        seconds = request.GET.get( 'seconds' )
                                        return render ( request, 'main_timer.html', { 'hours': hours, 'minutes': minutes, 'seconds': seconds } )