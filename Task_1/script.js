//function step(a,b){
//    return a ** b;
//}
//console.log(step(2,-3));


//function checkAge(year){
//    if (year >= 18)
//        alert("Доступ дозволено");
//    else
//        alert("У доступі відмовлено");
//}
//let year = +prompt("Enter your age");
//checkAge(year);


function simpleNumber(x){
    let counter = 0;
    for(let i = 1; i <= x; i++){
        if(x%i == 0){
            counter++;
        }
    }
    if(counter == 2)
        return true;
    else
        return false;
}

let number = +prompt("Enter your number");
alert(simpleNumber(number));