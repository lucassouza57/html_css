var dia = document.getElementById('idia')
var mes = document.getElementById('imes')
var ano = document.getElementById('inao')

var data = new Date()
var atual = data.getUTCFullYear()


function calcular() {
   

    var diaRes = Number(dia.value)
    var mesRes = Number(mes.value)
    var anoRes = atual - Number(ano.value) 
  
    if (dia.value.length === 0 || dia.value > 31 || mes.value.length === 0 || mes.value > 12 || ano.value.length === 0 || ano.value >= atual) {
      window.alert('[ERRO] Verifique se preencheu os campos corretamente!')
    } else {
      document.getElementById('resultado').innerHTML = `
        <p><strong>${anoRes}</strong> Ano</p>
        <hr>
        <p>&#11015;&#127881;&#127874;&#127881;&#11015;</p>
        <hr>
        <p><strong>${diaRes}</strong> Dia</p>
        <hr>
        <p><strong>${mesRes}</strong> Mês</p>
      `
    }
  }
  


