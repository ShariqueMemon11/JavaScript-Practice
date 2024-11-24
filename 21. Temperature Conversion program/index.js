let input = document.getElementById("input");
let toclesus = document.getElementById("btn1");
let toferenheit = document.getElementById("btn2");
let result = document.getElementById("h2");
let temp;
function convert() {

    if(toclesus.checked){
        temp = input.value;
        let fahrenheit = (temp * 9 ) / 5  + 32 ;
        result.textContent=`temperature is ${fahrenheit.toFixed(2)} F`;
    }

    else if(toferenheit.checked){
        temp = input.value;
        let celsus = ((temp - 32) * 5) / 9;
        result.textContent=`temperature is ${celsus.toFixed(2)} C`;
    }

    else{
        result.textContent="Plz Select on which unit you want to convert. ";
    }

}  