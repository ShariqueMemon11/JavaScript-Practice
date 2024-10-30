//Random Number Generator
let x;
let y;
let a = '-' ;
let b = '-' ;

// this on click event listener will generate random num when roll button is clicked
document.getElementById(`generatebtn`).onclick = function(){

 x=Math.floor(Math.random()*(10)+1)//random num will generate num from 0 to 9 and + 1 to make it 1 to 10
 y=Math.floor(Math.random()*(10)+1)// used flore because random fun give value in decimal so to roundoff it  

 document.getElementById(`randnum1`).textContent=x;
 document.getElementById(`randnum2`).textContent=y;
 // this event listener change the value of this lable to the random numstored on x and y
}

// this will reset the value of labels to - when rest button is clicked 
document.getElementById(`resetbtn`).onclick = function(){
document.getElementById(`randnum1`).textContent= a;
document.getElementById(`randnum2`).textContent= b;
// this event listener change the value of this lable to - - stored in a and b

}