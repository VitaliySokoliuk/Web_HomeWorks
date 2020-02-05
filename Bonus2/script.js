window.onload = function(){
    let elements = document.body.getElementsByTagName("ul");
    for(let i = 0; i < 7; i++){
        let q = elements[0].children[i].innerHTML;
        alert(q);
        elements[0].children[i].style.backgroundColor = q;
        elements[0].children[i].style.width = "100px";
    }
}
