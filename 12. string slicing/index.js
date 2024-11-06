//string slicing = creating a sub string from a part of another string 

// string.slicing(start, end)

let fullname = "shariq memon"
 
//let firstname = fullname.slice(0, 5)
 
//letlastname = fullname.slice(7, 12)


let firstname = fullname.slice( 0 , fullname.indexOf(" "));

let lastname = fullname.slice(fullname.indexOf(" ") + 1);

let firstchar = fullname.slice(0,1);

let lastchar = fullname.slice(-1);

let email = "shariq@gmail.com";

let username = email.slice( 0 , email.indexOf("@") );

console.log(firstname)

console.log(lastname) 

console.log(firstchar) 

console.log(lastchar)

console.log(username)