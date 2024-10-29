//how to check type of variable
e=10;
console.log(e);
console.log(typeof(e));

//type conversion = change the data type of value to another datatype

let x = "shariq";
let y = "shariq";
let z = "shariq";
let w = "";

console.log(`1. if we convert a string into number`) 

x = Number(x);

console.log(x , typeof x);

console.log(`string can not be converted into number by this way`)

console.log(`2. if we convert a empty string into number`)

w = Number(w)

console.log(w , typeof w)

console.log(`its is zero as empty string is considerd 0`)

console.log(`3. if we convert a string into bolleans`)

y=Boolean(y);

console.log(y , typeof y )

console.log(`it will show true it string or number converted into bol has any value`)

console.log(`4. if we convert a empty string into bolleans`)

w = Boolean(w);

console.log(w , typeof w)

let a;
let b;
let c;

console.log(`if we change data type of unassigned variables`)

a=Number(a);
b=String(b);
c=Boolean(c);

console.log(a , typeof a);
console.log(b , typeof b);
console.log(c , typeof c);

