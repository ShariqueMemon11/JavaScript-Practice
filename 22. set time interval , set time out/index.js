function fun(){
    setTimeout(function(){
        alert("hello from me")
    }, 3000);
}

let a = setTimeout(function(){
    alert("hello i ma new one ")
}, 5000);

clearTimeout(a);

function sum(a , b , c){
    console.log("yes i am here "+ (a+b+c))
}

let b = setInterval(sum , 3000 , 1 , 2 ,7)

clearTimeout(b)