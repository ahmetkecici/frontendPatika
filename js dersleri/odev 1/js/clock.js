const nameElement=document.querySelector("#myName")

const clockElement=document.querySelector("#myClock")

function writeName(){
    
let name=prompt("Adınız")

nameElement.textContent=name;


}


function showTime(){
    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds();
    let day = date.getDay(); 
    if(day == 1)
        day = "Pazartesi"
    else if (day == 2)
        day = "Salı"
    else if (day == 3)
        day = "Çarşamba"
    else if (day == 4)
        day = "Perşembe"
    else if (day == 5)
        day = "Cuma"
    else if (day == 6)
        day = "Cumartesi"
    else 
        day = "Pazar"

        hour = hour < 10 ? "0" + hour : hour; 
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
    clockElement.textContent = `${hour}:${min}:${sec}  ${day}`
}


writeName();
setInterval(showTime,1000)



    