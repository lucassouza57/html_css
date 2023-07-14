var itensmenu = document.getElementById("menu")
var botaoClose = document.getElementById("botao-close")
var botaoHamb = document.getElementById("botao-hamburguer")

function mudouTamanho() {
if (window.innerWidth >= 600) {
    itensmenu.style.display = 'inline'
    botaoClose.style.display = 'none'
} else {
    itensmenu.style.display = 'none'
    botaoClose.style.display = "none"
    botaoHamb.style.display = 'block'
}
}


function clickMenu() {
    if (itensmenu.style.display == "block") {
        itensmenu.style.display = "none";
        botaoHamb.style.display = "block";
        botaoClose.style.display = "none";
    } else {
        itensmenu.style.display = "block";
        botaoHamb.style.display = "none";
        botaoClose.style.display = "block";
    }
}
