 // FUNCTION = A section of resuable code.
 //            declear code once and use it when ever you want.
 //            call the function to execute that code 
 
 function max(a,b)
 {
  if (a > b) {
    return a;
  }
  else
  {
    return b;
  }
 }

 function min(a,b)
 {
  if (a <  b) {
    return a;
  }
  else
  {
    return b;
  }
 }

 console.log(`this max ${max(5,4)}`);
 
 console.log(`this min ${min(8,4)}`);