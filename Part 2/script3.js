let num = +prompt("Введи число");
if(num < 1 || num > 12){
    alert("False");
}else{
    if(num == 12 || num == 1 || num == 2){
        alert("winter");
    }
    else if(num >= 3 && num <= 5){
        alert("spring");
    }
    else if(num >= 6 && num <= 8){
        alert("summer");
    }
    else if(num >= 9 && num <= 11){
        alert("autumn");
    }
}