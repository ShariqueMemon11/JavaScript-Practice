//.checked property to determine the checked state of an Html , checkbox
// or radio button element

checkbox = document.getElementById(`checkbox`);
visa = document.getElementById(`visacardbtn`);
master = document.getElementById(`mastercardbtn`);
pay = document.getElementById(`PayPakbtn`);
subresult= document.getElementById(`subresult`);
cardresult = document.getElementById(`cardresult`);

document.getElementById(`submit`).onclick = function(){
    if (checkbox.checked) {
       subresult.textContent = `You are a subscriber`;
    }
    else{
        subresult.textContent = `plz subscribe you haven't`;
    }

    if (visa.checked) {
        cardresult.textContent = `You are using visa card`;
    }
    else if(master.checked){
        cardresult.textContent = `You are using Master card`;
    }
    else if(pay.checked){
        cardresult.textContent = `You are using PayPak`;
    }
    else{
        cardresult.textContent = `plz select payment method`;
    }
}