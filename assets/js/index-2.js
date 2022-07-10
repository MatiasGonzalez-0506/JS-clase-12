// codigo tarea 2
let button = document.querySelector("#button1");
button.addEventListener("click",() =>{
    let quantity1 = parseInt(document.querySelector("#quantity-1").value)
    let quantity2 = parseInt(document.querySelector("#quantity-2").value)
    let quantity3 = parseInt(document.querySelector("#quantity-3").value)
    let suma = quantity1 + quantity2 + quantity3
if (suma >10){
    document.getElementById("total").innerHTML = "llevas demasiados stickers"
}
else if (suma <= 0){
    document.getElementById("total").innerHTML = "no haz seleccionado aun"
}
else {
    document.getElementById("total").innerHTML = `llevas esta cantidad ${suma}`
}
});