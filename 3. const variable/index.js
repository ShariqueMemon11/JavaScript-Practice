//const = a variable who's value can't be changed once defined

const PI = 3.14159 // now it is constant variable if we change its value ahead in this code it won't be changed

let radius;

let circumference;

//radius = window.prompt(`Enter the radious of circle`);

//radius=Number(radius);

//circumference= 2 * PI * radius

//console.log(`circumference of circle is ${circumference}`)

document.getElementById(`submit`).onclick = function(){
    
    radius=document.getElementById(`ra`).value;

    radius=Number(radius);

    circumference = 2 * PI * radius;

    document.getElementById("h3").textContent = circumference + ` Cm`;
}