    var itensmenu = document.getElementById("menu")
    var imgFundo = document.getElementById('img-fundo')


function mudouTamanho() {
    if (window.innerWidth >= 600) {
        itensmenu.style.display = 'inline'
    } else {
        itensmenu.style.display = 'none'
    }
}


function clickMenu() {
    if (itensmenu.style.display == "block") {
        itensmenu.style.display = "none"
    } else {
        itensmenu.style.display = "block"
        imgFundo.style.display = 'none'
    }

}

