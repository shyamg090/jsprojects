// random nummber is generated everytime the page is refreshed so no event istner is required
let randNum= Math.ceil((Math.random())*6);
console.log(randNum);

let randomImg="images/"+"dice"+ randNum +".png";

let img1= document.querySelectorAll("img")[0].setAttribute("src",randomImg);
//passing variable hence"randomImg "is wrong randomImg is right

let randNum2= Math.ceil((Math.random())*6);
console.log(randNum2);

let randomImg2="images/"+"dice"+ randNum2 +".png";

let img2= document.querySelectorAll("img")[1].setAttribute("src",randomImg2);
//passing variable hence"randomImg "is wrong randomImg is right
if(randNum > randNum2){
    document.querySelector(".container h1").innerHTML="Player 1 wins";
}
else if(randNum< randNum2){
    document.querySelector(".container h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector(".container h1").innerHTML="Its a draw";
}