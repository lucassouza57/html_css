var itensmenu = document.querySelector(".itens_menu")
var botaoClose = document.getElementById("fechar")
var botaoHamb = document.getElementById("hamburguer")

//estava dando erro no momento que amentatava a tela no botao de menu
/*function mudouTamanho() {
if (window.innerWidth >= 600) {
    itensmenu.style.display = 'inline'
    botaoClose.style.display = 'none'
} else {
    itensmenu.style.display = 'none'
    botaoClose.style.display = "none"
    botaoHamb.style.display = 'block'
}
}
*/
//botao hamburguer e botao de fechar o menu 
function clickMenu() {
    if (itensmenu.style.display == "block") {
        itensmenu.style.display = "none"
        botaoHamb.style.display = "block"
        botaoClose.style.display = "none"
    } else {
        itensmenu.style.display = "block"
        botaoHamb.style.display = "none"
        botaoClose.style.display = "block"
    }
}