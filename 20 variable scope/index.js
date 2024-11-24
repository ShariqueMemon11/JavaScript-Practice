// variable scope = how far a variable is accessed (local or global)

let x = 4; // its is global variable it is accessable globaly in whole code 

function1();

function2();
  
function function1(){
    let x = 1; // its is local variable it is only accessable in this function
    console.log(x);
}

function function2(){
    let x = 2; // its is local variable it is only accessable in this function
    console.log(x);
} 

