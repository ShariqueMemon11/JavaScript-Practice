// if conditions = if a condition is true , execute some code and if not 
//                 do something else

//let age = 25;

//if (age==25) {
//   console.log("you are old enough to enter this site")
//}

//else { 
    // console.log("no your are not allowed")
//}

// if with bollean

//let isstudent = false;

//if will excute when the value givin in condition is true otherwise it will go to else
//if (isstudent) {
    // console.log(`in which class you are`)
//}

// else {
    // console.log(`if your not in school then what you do`)
// }


//to check if to values are equal , greater or less
 
// let name = `shariq`;

// if (name == `shariq`) {
    // console.log(` yes you are allowed `) 
// }

// if (age >= 20) {
    // console.log(' sorry you are not allowed ')
// }

// else{
    // console.log(' yes you are allowed')
// }

// if (age <= 24) {
    // console.log(' sorry you are not allowed ')
// }

// else{
    // console.log(' yes you are allowed')
// }

submit = document.getElementById(`submit`);
result = document.getElementById(`h2`)
text = document.getElementById(`age`)
let age;

submit.onclick = function(){
    age=text.value

    age=Number(age);
    
    if (age==0) {
        result.textContent= `your are to small for this website`
    }
    
    else if (age <= 17) {
        result.textContent= `your are under 18 this website is for 18+`
    }
    
    else if (age >= 60) {
        result.textContent= `your are to old for this website`
    }

    else if (age < 0) {
        result.textContent= `age can't be neg`
    }
    else{
        result.textContent= `your are allowed to this website`
    }
}