function contar(){
    let ini = document.querySelector('#iincio')
    let fim = document.querySelector('#ifim')
    let passo = document.querySelector('#ipasso')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    
    }else {
        res.innerHTML = 'Contando : '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ){
            window.alert('Passo invalido! Corrigindo passo vai ser 1!')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for (let c = i ; c <= f ; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            //contagem regressiva
            for (let c = i ; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
    
}