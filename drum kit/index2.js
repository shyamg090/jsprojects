const buttonLen= document.querySelectorAll(".drum").length;

function eventCases(buttonInnerHTML){
    switch(buttonInnerHTML){
        case 'w': var tom1=new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
        case 'a':  var tom2=new Audio('sounds/tom-2.mp3');
        tom2.play();
            break;
        case 's':  var tom3=new Audio('sounds/tom-3.mp3');
        tom3.play();
            break;
        case 'd':var tom4=new Audio('sounds/tom-4.mp3');
        tom4.play();
            break; 
        case 'j':var crash=new Audio('sounds/crash.mp3');
        crash.play();
            break;   
        case 'k':var snare=new Audio('sounds/snare.mp3');
        snare.play();
            break;  
        case 'l':var kickbass=new Audio('sounds/kick-bass.mp3');
        kickbass.play();
            break; 
        default: alert("invalid key");
        break;     
    }
}

for(let i=0; i<buttonLen ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // alert("button"+" " +i+" "+"is clicked");
        //this keyword is the tag that trigger the event
        //here this keyword gives button
        // console.log(this); 

        // note: behaviour of this keyword is different in normal function and arrow function

        // the arrow function is not defined inside any object hence gives undefined or window object
        console.log(this);
        // in normal function "this" gives the html tag that caused the event
        var buttonInnerHTML= this.innerHTML;

        eventCases(buttonInnerHTML);
       
    });
}

document.addEventListener("keypress",(e)=>{
    console.log(e)
    console.log(e.key);
    const keyboardButton= e.key;
    eventCases(keyboardButton);

})