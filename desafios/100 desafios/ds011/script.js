var notasSelecionadas = 0;
var mensagemAvaliacao = document.getElementById("avaliaçao");

function selecionarBotao() {
  var botaoSelecionado = event.target;
  var botoes = document.getElementsByClassName("botao-nota");

  // Limpar todas as seleções anteriores
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove("selecionado");
  }

  // Selecionar o botão atual
  botaoSelecionado.classList.add("selecionado");

  notasSelecionadas = parseInt(botaoSelecionado.value);
}

function nota() {
  var secaoInicio = document.getElementById("inicio");
  var secaoFim = document.getElementById("fim");

  secaoInicio.style.display = "none";
  secaoFim.style.display = "block";

  mensagemAvaliacao.textContent = `Você selecionou ${notasSelecionadas} de 5`
}
