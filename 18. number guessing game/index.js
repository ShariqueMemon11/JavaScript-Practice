
let rand = (Math.floor(Math.random()*100)+1)

document.getElementById("reset").onclick=function(){
rand = (Math.floor(Math.random()*100)+1)
document.getElementById("end").textContent=(``)
document.getElementById("random").textContent=(`-`)
}

document.getElementById("submit").onclick = function (){

    let guess = document.getElementById("input").value;
    if (guess == rand) {
    document.getElementById("random").textContent=(rand)
    document.getElementById("try").textContent=(guess)
    document.getElementById("end").textContent=(`congrats you gussed it right`)
    }
    else if (guess > rand) {
    document.getElementById("moreorless").textContent=(`>`)
    document.getElementById("try").textContent=(guess)
     }

    else if (guess < rand) {
      document.getElementById("moreorless").textContent=(`<`)
      document.getElementById("try").textContent=(guess)
    }

}