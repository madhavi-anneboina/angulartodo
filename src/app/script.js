let milliseconds = 0, seconds = 0, mintues = 0, hours = 0
let timeshow = document.getElementById('timeshow')
let timeref; 


document.getElementById('start').onclick = function(){
    timeref = setInterval(updateTime,10)

}

function updateTime(){
    milliseconds = milliseconds + 10 ;
    if(milliseconds == 1000){
        seconds = seconds + 1
        milliseconds = 0
        if(seconds == 60){
            mintues = mintues + 1
            seconds = 0
            if(mintues == 60){
                hours = hours + 1 
                mintues = 0
            }

        }

    }
}

