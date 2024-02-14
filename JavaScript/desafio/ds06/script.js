let num = document.querySelector('#inum')
let lista = document.querySelector('#lista')
let resul = document.querySelector('#res')
let valor = []

function iNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function iLista (n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
    
}

function adicionar() { 
    if (iNumero(num.value) && !iLista(num.value, valor)){
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.innerHTML = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resul.innerHTML = ''
    }else {
        window.alert('[ERRO] Valor invalido ou ja adicionado na lista')
    }

    num.value = ''
    num.focus()
}

// aqui pra cima e onde adciona os numeros na lista

function finalinar(){
    if (valor.length == 0){
        window.alert ('A lista esta vazia preencha os campos antes de finalizar!')
    }else {
        let total = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0
        for (let pos in valor){
            soma += valor[pos]
            if (valor[pos] > maior)
                maior = valor[pos]
            if (valor[pos] < menor)
            menor = valor[pos]

        }

        media = soma / total

        resul.innerHTML = ''
        resul.innerHTML += `<p>Ao todo, temos ${total} cadastrado.</p>`
        resul.innerHTML += `<p>O mair numero informado foi ${maior}</p>`
        resul.innerHTML += `<p>O menor numero informado foi ${menor}</p>`
        resul.innerHTML += `<p>A soma de todos os valores adicionados é ${soma} </p>`
        resul.innerHTML += `<p>A media dos valores adicionados é de ${media} </p>`
    }
}