let mass = [];
for(let i = 0; i < 3; i++){
    mass[i] = prompt("Введіть адресу " + (i+1) + " зображення")
}
let el = document.getElementsByClassName("block");

for(let i = 0; i < 3; i++){
    el[i].style.backgroundColor = "red";
    el[i].children[0].src = mass[i];
}