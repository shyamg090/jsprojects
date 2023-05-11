const button= document.querySelectorAll(".drum");
let buttonLen=button.length;

for(let i=0; i<buttonLen ; i++){

    document.querySelectorAll(".drum")[i].addEventListener('click',()=>{
        // alert("button"+" " +i+" "+"is clicked");
        //this keyword is the tag that trigger the event
        //here this keyword gives button
        // console.log(this);

        var buttonInnerHTML= this.innerHTML;

        switch(buttonInnerHTML){
            case 'w': var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
            case 'a':  var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
                break;
            case 's':  var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
                break;
            case 'd':var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
                break; 
            case 'j':var audio=new Audio('sounds/crash.mp3');
            audio.play();
                break;   
            case 'k':var audio=new Audio('sounds/snare.mp3');
            audio.play();
                break;  
            case 'l':var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
                break;  
        }
       
    });
}
