//let n = +prompt("Введіть число");
//res = 1;
//for(let i = 1; i <= n; i++){
//    res *= i;
//}
//alert(res);

// збільшив крок з 3 до 30
//for(let j = 1000; j < 10000; j += 30){
//    console.log(j);
//}

//let y = 1;
//for(let counter = 0; counter < 55; counter++){
//    console.log(y);
//    y += 2;
//}

//for(let x = 90; x >=0; x-=5){
//    console.log(x);
//}

//let y = 2;
//for(let counter = 0; counter < 20; counter++){
//    console.log(y);
//    y *= 2;
//}

//зменшив ліміт з 10000 до 100
//for(let a = 2;;a++){
//    if(2*a-1 >= 100){
//        break;
//    }
//    console.log(2*a-1);
//}

//for(let a = -166;2*a+200<100;a++){
//    let res = 2*a+200;
//    if(res >= 10){
//        console.log(res);
//    }
//}

let num1 = +prompt("Enter number");
let num2 = +prompt("Enter stup");
let res = num1;
let p = false;
if (num2<0){
    p = true;
    num2*=(-1);
}
for(let z = 1; z < num2; z++){
    res *= num1;
}
if (p){
    res = 1/res;
}
if(num2 == 0){
    res = 1;
}
console.log(res);