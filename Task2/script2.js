let tries = 4;
let success = false;
do{
    let pass = prompt("Enter password");
    if(pass != 'password'){
        alert("You have "+ tries + " attempts");
        tries -= 1;
    }else{
       success = true;
        alert("Запрошуємо на сайт!");
    }
}while(tries>=0 && success == false)
if(tries == -1)
    alert("Будь ласка спробуйте пізніше!");