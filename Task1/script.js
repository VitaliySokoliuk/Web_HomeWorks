let getId = x =>document.getElementById(x);

getId('box').onmouseover = function(){
    this.style.backgroundColor = 'yellow';
    this.innerHTML = "Хочеш знати який?"
    this.style.color = "blue";
    this.style.boxShadow = "inset 5px 5px 0 0 green,5px 0 0 0 green, 0 5px 0 0 green, 5px 5px 0 0 green";
    this.style.borderColor = "black";
}
getId('box').onmouseout = function(){
    this.style.backgroundColor = 'darkviolet';
    this.innerHTML = "У мене є секрет!"
    this.style.color = "black";
    this.style.boxShadow = "";
    this.style.borderColor = "";
}
getId('box').onmousedown = function(){
    this.style.backgroundColor = 'black';
    this.innerHTML = "А я тобі не скажу!"
    this.style.color = "white";
    this.style.boxShadow = "inset 5px 5px 0 0 yellow,5px 0 0 0 yellow, 0 5px 0 0 yellow, 5px 5px 0 0 yellow";
    this.style.borderColor = "#cc9900";
}
getId('box').onmouseup = function(){
    this.style.backgroundColor = 'yellow';
    this.innerHTML = "Хочеш знати який?"
    this.style.color = "blue";
    this.style.boxShadow = "inset 5px 5px 0 0 green,5px 0 0 0 green, 0 5px 0 0 green, 5px 5px 0 0 green";
    this.style.borderColor = "black";
}