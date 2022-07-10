// Codigo tarea 3
let button = document.querySelector("#buttonIngresar");
button.addEventListener("click",() =>{
    let digit1 = document.querySelector("#digit1").value
    let digit2 = document.querySelector("#digit2").value
    let digit3 = document.querySelector("#digit3").value
    let result = digit1 + digit2 + digit3
if (result ==911){
    document.getElementById("texto").innerHTML = "Password 1 correcto"
}
else if(result ==714){
    document.getElementById("texto").innerHTML = "Password 2 correcto"
}
else {
    document.getElementById("texto").innerHTML = "Password incorrecto"
}
});