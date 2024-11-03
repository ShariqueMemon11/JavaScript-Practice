// sring methods = allows you to manupulate and work with text (strings)

let username = " Shariqa ";

//.chartAt(index) => will give the character on that index

console.log(username.charAt(2)) 

//.indexOf("character") => will give you the index of that character it is on in string 

console.log(username.indexOf('a'))

//.lastindexOf("character") => will give you the last index from that string if a character is appeared multiple time 

console.log(username.lastIndexOf('a'))

//.length => will give the length of that string

console.log(username.length) 

//.toUppercase() => will change all the character of that string to upercase

console.log(username.toUpperCase()) 

//.toLowercase() => will change all the character of that string to lowercase

console.log(username.toLowerCase()) 

//.repeat(how many time) => it will repeat the string how many time you want

console.log(username.repeat(2)) 

// startswith(character you want to check) => check if string starts with that character

console.log(username.startsWith(" "))

// endsswith(character you want to check) => check if string ends with that character

console.log(username.endsWith(" "))


// include(character you want to check) => check if string includes that character

console.log(username.includes("e"))

//.trim() => will remove the white spaces from the string

username=username.trim();

console.log(username) 

// replaceAll('character','replace characte') => replace first character if in string with second character that is given

let phonenum= '0316-30825-32'

console.log(phonenum.replaceAll("-",''))

// padstart(length,'characte') => it makes the length of string to provided length and puts the character to complete length

console.log(phonenum.padStart("15",'0'))

// padend(length,'characte') => it makes the length of string to provided length and puts the character to complete length

console.log(phonenum.padEnd("15",'0'))