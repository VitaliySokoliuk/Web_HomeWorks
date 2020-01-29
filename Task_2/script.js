//function getMaxNumber(){
//    let temp = arguments[0];
//    if(arguments.length == 3 || arguments.length == 4){
//        for(let i = 0; i < arguments.length; i++){
//            if(arguments[i] > temp)
//                temp = arguments[i]
//        }
//        console.log(temp);
//    }else
//        return;
//}
//
//getMaxNumber(1,2,3);


//function progresion(n, q){
//    let firstNum = 1;
//    let sum = firstNum;
//    for(let i = 1; i < n; i++){
//        firstNum *= q;
//        sum += firstNum;
//    }
//    return sum;
//}
//
//console.log(progresion(4,3));
//
//function progresion2(n, q){
//    let firstNum = 1;
//    return firstNum * (1 - (q ** n)) / (1 - q);
//}
//
//console.log(progresion2(4,3));


function range(a, b){
    if (a > b){
        let temp = a;
        a = b;
        b = temp;
    }
    for(let i = a; i <= b; i++){
        if (simpleNumber(i))
            console.log(simpleNumber(i));
    }
}

function simpleNumber(x){
    let counter = 0;
    for(let i = 1; i <= x; i++){
        if(x%i == 0){
            counter++;
        }
    }
    if(counter == 2)
        return x;
    else
        return false;
}

let num1 = +prompt("Введіть початок діапазону");
let num2 = +prompt("Введіть кінець діапазону");
range(num1,num2);
