const button= document.querySelectorAll(".drum");
let buttonLen=button.length;

for(let i=0; i<buttonLen ; i++){

    button[i].addEventListener('click',()=>{
        // alert("button"+" " +i+" "+"is clicked");
        //this keyword is the tag that trigger the event
        //here this keyword gives button is triggred
        // console.log(this);

        if(i === 0){
            let audio=new Audio('sounds/tom-1.mp3');
            audio.play();
        }
        else if(i===1){
            let audio=new Audio('sounds/tom-2.mp3');
            audio.play();
        }
        else if(i===2){
            let audio=new Audio('sounds/tom-3.mp3');
            audio.play();
        }
        else if(i===3){
            let audio=new Audio('sounds/tom-4.mp3');
            audio.play();
        }
        else if(i===4){
            let audio=new Audio('sounds/crash.mp3');
            audio.play();
        }
        else if(i===5){
            let audio=new Audio('sounds/snare.mp3');
            audio.play();
        }
        else{
            let audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
        }
    });
}
