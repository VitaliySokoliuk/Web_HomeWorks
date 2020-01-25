let x1 = +prompt("Enter first number");
let x2 = +prompt("Enter second number");
let help;
if(x1>x2){
    help = x1;
    x1 = x2;
    x2 = help;
}
for (let i=x1; i<=x2; i++) {
    console.log(i);
}

/////////////////////////

let n1 = 1;
let n2 = 1;
let qwe;
console.log(n1);
console.log(n2);
for(let i = 0; i < 7; i++){
    let res = n1 + n2;
    console.log(res);
    n1 = n2;
    n2 = res;
}