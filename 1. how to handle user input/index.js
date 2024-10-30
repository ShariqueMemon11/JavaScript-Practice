// how to accept user input

//1. window prompt
// it will display on devtools console 
let username;

username= window.prompt("what's your name");

console.log(`my name is ${username}`);


//2. professional way html textbox 
let user;

document.getElementById("mySubmit").onclick = function(){
   user = document.getElementById("my-Text").value;
   document.getElementById("main-Tag").textContent = `hello ${user}`
}

