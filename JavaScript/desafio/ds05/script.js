function tabuada() {
    let num = document.querySelector('#inum')
    let tab = document.querySelector('#sectabuada')

    if (num.value.length == 0){
        window.alert ('[ERRO] Preencha os campos!')
    }else {
        n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        while (c <=10 ){
            let iten = document.createElement('option')
            iten.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(iten)
            c++
        }
    }
}