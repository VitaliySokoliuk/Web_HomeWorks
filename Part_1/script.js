//function sum(){
//    let suma = 0;
//    let mass = new Array();
//    for(let i = 0; i < arguments.length; i++){
//        mass[i] = arguments[i];
//    }
//    mass.forEach((value, index, arr) => {
//        suma += value;
//    });
//    return suma;
//}
//console.log(sum(2,3,5,10));


//function addArrAfterPos(arr, arrToPaste, position){
//    for(let i = 0; i < arrToPaste.length; i++){
//        arr.splice(position+i,0,arrToPaste[i]);
//    }
//    console.log(arr);
//}
//
//let arr = [2,3,4,5,10,11,12,13];
//let arrToPaste = [6,7,8,9];
//addArrAfterPos(arr, arrToPaste, 4) 


//function getPosOfArr(array, num){
//    let position = array.indexOf(num);
//    if(position == -1)
//        console.log('Немає такого елементу');
//    else
//        console.log(position);
//}
//let arr = [1,2,3,4,5,6];
//getPosOfArr(arr, 4);  


//function getFilteredArr(array, num){
//    let counter = 0;
//    for(let i = 0; i <= array.length; i++){
//        if(array[i] > num){
//            array[counter] = array[i];
//            counter++;
//        }
//    }
//    console.log(array);
//}
//let arr = [1,2,3,4,5,6,7,8,9];
//getFilteredArr(arr,3);

//function unique(array){
//    array = array.sort((a,b)=> a-b);
//    var last;
//    for (var i = array.length - 1; i >= 0; i--) {
//        if (array[i] == last) {
//            array.splice(i, 1);
//        } else {
//            last = array[i];
//        }
//    }
//}

function getUniqueArrItems(array){
    array = array.sort((a,b)=> a-b);
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] == array[i+1]){
                array[i] = 0;
                array[i+1] = 0;
            }
        }
        if(array[i] != 0)
            console.log(array[i]);
    }
}
let arr = [1,2,3,4,5,6,3,2,1];
getUniqueArrItems(arr);








