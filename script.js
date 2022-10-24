function relogio(){
    let hour = document.getElementsByid("hour");
    let min = document.getElementsByid("min");
    let sec = document.getElementsByid("sec");
    let ampm = document.getElementsByid("ampm");
    
    let h=new Dote ().getHours();
    let m= new Date().getMinutes();
    let s=new Date().getSeconds();
    var am= 'AM';

    if(h > 12){
        h -= 12;
        am = 'pM';
    }

    if(h < 10 ){
        h = '0' + h;
    }

    if(m < 10 ){
        m = '0' + h;
    }

    if(s < 10 ){
        s = '0' + s;
    }    
    
    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    ampm.innerHTML = am;
    
}

var interval = setInterval(relogio, 1000);

    
    



