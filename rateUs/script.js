function back(){
    window.location="../menu/menu.html";
}

var star="";

function rate(id){
    star=document.getElementById(id);
    if(star.alt=="on") on(id);
    else off(id);
}

function on(id){
    if(id==1) changeToOn();
    else {
        let preStar=document.getElementById(id-1).alt;
        if(preStar=="off")
    changeToOn();
    } // end else
}

function off(id){
    if(id==5) changeToOff();
    else {
        let nextStar=document.getElementById(id+1).alt;
        if(nextStar=="on")
    changeToOff();
    } //end else
} // end function


function changeToOn(){
    star.src="https://icon-library.com/images/star-png-icon/star-png-icon-6.jpg";
    star.alt="off";
}

function changeToOff(){
    star.src="https://cdn.picpng.com/star/star-view-32069.png";
    star.alt="on";
}