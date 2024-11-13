let username = ""
while (username === "") {
    username = window.prompt("enter your name");
}
console.log("your name is "+ username);


let logedin = false;

do{
  user = window.prompt("enter user name");
  password = window.prompt("enter your password");
  logedin=true;
}
while(logedin!=true);
