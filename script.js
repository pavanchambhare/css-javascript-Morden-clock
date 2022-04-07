function displaytime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let sassion = document.getElementById('session');
     

    if(hrs >= 12){
        sassion.innerHTML = 'PM'
    }else{
    sassion.innerHTML = 'AM'
    }


    if(hrs > 12){
    hrs = hrs - 12;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
 setInterval(displaytime, 10);
