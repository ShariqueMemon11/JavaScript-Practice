// method chaining = chaining one method after another in one 
//                   continuous line of code 

let username = window.prompt("enter your username: ");

// No method Chaining --------

/*
username = username.trim();

let letter = username.charAt(0);

letter = letter.toUpperCase();

let remaining = username.slice(1);

remaining = remaining.toLowerCase();

username = letter + remaining;

console.log(`my userName is : ${username}`)

*/

// Method Chaining

username = username.trim().charAt(0).toUpperCase + username.trim().slice(1).toLowerCase();

console.log(username)