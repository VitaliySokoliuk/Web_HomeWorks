let getId = x =>document.getElementById(x);
let colors = ["red", "yellow", "green"];

getId('color').onmouseout = function(){
    this.style.background = 'darkviolet';
}
let i = 0;
getId('color').onmouseover = function(){
    this.style.background = colors[i];
    i++;
    if(i == 3)
        i = 0;
}