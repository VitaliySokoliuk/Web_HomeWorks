//function getParams(){
//    console.log(arguments.length)
//}
//getParams();


//function getMinNumber(){
//    if(arguments.length < 2){
//        console.error("Must be at least 2 numbers");
//        return;
//    }
//    let temp = arguments[0];
//    for(let i = 0; i < arguments.length; i++){
//        if(arguments[i] < temp)
//            temp = arguments[i]
//    }
//    console.log(temp);
//}
//
//getMinNumber(2);


//function getMaxNumber(){
//    if(arguments.length < 2){
//        console.error("Must be at least 2 numbers");
//        return;
//    }
//    let temp = arguments[0];
//    for(let i = 0; i < arguments.length; i++){
//        if(arguments[i] > temp)
//            temp = arguments[i]
//    }
//    console.log(temp);
//}
//
//getMaxNumber(2,4,0);


//function luckyTicket(){
//    if(arguments.length % 2 == 0){
//        let sum1 = 0, sum2 = 0;
//        for(let i = 0; i < arguments.length; i++){
//            if(i < (arguments.length/2))
//                sum1 += arguments[i];
//            else
//                sum2 += arguments[i];
//        }
//        if (sum1 == sum2)
//            return true;
//        else
//            return false;
//    }else{
//        console.eror("Неправильна кількісь параметрів");
//        return;
//    }
//}
//console.log(luckyTicket(0,2,2,4,1,1,2));


function myFunc(){
    let dodat = [];
    let count = 0;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > 0){
            dodat[count] = arguments[i];
            count++;
        }
    }if(dodat.length != 0)
        console.log("Додатні: " + dodat);
    let videm = [];
    let count2 = 0;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] < 0){
            videm[count2] = arguments[i];
            count2++;
        }
    }if(videm.length != 0)
        console.log("Від'ємні: " + videm);
}

myFunc(3,5,-2,7,-8,0);


