function oznacit(){
    var oznaceni = true;
    if(oznaceni == true){
        document.getElementById("PO0").style.backgroundColor = "red";
        oznaceni = false;
    }else if(oznaceni == false){
        document.getElementById("PO0").style.backgroundColor = "#0080FF";
        oznaceni = true;
    }
}