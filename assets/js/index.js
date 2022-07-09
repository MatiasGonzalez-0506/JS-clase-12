document.querySelector("#Morty").onclick = function(){
    if(this.style.border==='none'){
        this.style.border='20px solid red'
    }
    else{this.style.border='none'}
}