// for loop = repeat code as  much time as you want 
let sum=0;

for( i = 0; i < 4 ; i++){
  console.log("hello i am shariq")
}

let marks=[];

for( j = 0; j < 4 ; j++){
 marks[j]=Number(window.prompt("enter marks of subject "+ (j+1)))
}

for( k = 0; k < 4 ; k++)
{
 sum +=marks[k];
}
console.log(sum)
let avg = (sum/4)

console.log("its is your avg " + avg);