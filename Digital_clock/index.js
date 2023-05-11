const hoursEl= document.getElementById("hours");
const minutesEl= document.getElementById("minutes");
const secondsEl= document.getElementById("seconds");
const ampmEl= document.getElementById("ampm");
// get the hour min seconds id from html and store it in a variable 

function getClock(){
    // this function is used to fetch the hours,min, sec from the system using **Date()** function
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        // if 13>12 then 13-12 = 1
        h = h - 12;
        ampm="PM";
    }

    // if else can be used but it will be large
    // hence use ternary operator
    h= h<10 ? "0"+h : h;
    m= m<10 ? "0"+m : m;
    s= s<10 ? "0"+s : s;


    // this is to update the innerText of the html
    // syntax htmlelement.innerText = string/value
    hoursEl.innerText= h;
    minutesEl.innerText= m;
    secondsEl.innerText= s;
    ampmEl.innerText= ampm;


    /* funtion to setTimeout that calls the function every time gives 
        setTimeout( function/ function_name , timein ms)
        here arrow function is used to exexute the inside code
        this sets up the infinite loop
        keeps **executing the function every 1000ms= 1s
    */    
    setTimeout(()=>{
        getClock();
    },1000);
}


/*this to initially call the function to execute */
getClock();