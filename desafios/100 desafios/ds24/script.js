var incio = document.querySelector(".container")
var msgSucesso = document.querySelector('.container_msg')


function enviar() {
    if (incio.style.display == "block") {
        incio.style.display = "none"
    } else {
        incio.style.display = "block"
        msgSucesso.style.display = 'none'
    }

}