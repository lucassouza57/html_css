// Função para reiniciar o jogo
function restart() {
  // Limpa o resultado
  document.querySelector(".result").innerHTML = "";
}

// Função para obter a escolha do jogador
function getPlayerChoice() {
  // Obtém todos os elementos com a classe "item"
  const items = document.querySelectorAll(".item");

  // Adiciona um evento de clique a cada item
  items.forEach((item) => {
    item.addEventListener("click", () => {
      // Obtém o valor do atributo "data-item" do item clicado
      const playerChoice = item.getAttribute("data-item");

      // Chama a função para iniciar o jogo com a escolha do jogador
      startGame(playerChoice);
    });
  });
}

// Função para obter a escolha do computador
function getComputerChoice() {
  // Gera um número aleatório entre 0 e 2
  const randomNum = Math.floor(Math.random() * 3);

  // Retorna a escolha do computador com base no número gerado
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Função para determinar o vencedor
function determineWinner(playerChoice, computerChoice) {
  // Verifica se houve empate
  if (playerChoice === computerChoice) {
    return "tie";
  }

  // Verifica todas as possibilidades de vitória do jogador
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "player";
  }

  // Caso contrário, o computador vence
  return "computer";
}

// Função para exibir o resultado
function displayResult(winner, playerChoice, computerChoice) {
  const resultDiv = document.querySelector(".result");

  // Limpa o resultado anterior
  resultDiv.innerHTML = "";

  // Cria elementos <img> para exibir as imagens
  const playerImage = document.createElement("img");
  playerImage.style.borderColor = 'red'
  playerImage.src = `images/icon-${playerChoice.toLowerCase()}.svg`;
  playerImage.alt = playerChoice;
  
  const computerImage = document.createElement("img");
  computerImage.style.borderColor = 'blue'
  computerImage.src = `images/icon-${computerChoice.toLowerCase()}.svg`;
  computerImage.alt = computerChoice;

  // Adiciona os elementos de imagem ao resultado
  resultDiv.appendChild(playerImage);
  resultDiv.appendChild(computerImage);

  // Cria elementos <p> para exibir as mensagens de resultado
  const playerResult = document.createElement("p");
  
  const computerResult = document.createElement("p");
  
  const winnerResult = document.createElement("p");
  // Verifica o vencedor e exibe a mensagem correspondente
  if (winner === "player") {
    winnerResult.classList.add("player-one-win");
    winnerResult.textContent = "Jogador venceu!";
  } else if (winner === "computer") {
    winnerResult.classList.add("player-two-win");
    winnerResult.textContent = "A casa venceu!";
  } else {
    winnerResult.classList.add("tie");
    winnerResult.textContent = "Empate!";
  }

  // Adiciona os elementos ao resultado
  resultDiv.appendChild(playerResult);
  resultDiv.appendChild(playerImage);  // Adiciona a imagem do jogador
  resultDiv.appendChild(computerResult);
  resultDiv.appendChild(computerImage); // Adiciona a imagem do computador
  resultDiv.appendChild(winnerResult);
}

// Função para iniciar o jogo
function startGame(playerChoice) {
  // Obtém a escolha do computador
  const computerChoice = getComputerChoice();

  // Determina o vencedor
  const winner = determineWinner(playerChoice, computerChoice);

  // Exibe o resultado
  displayResult(winner, playerChoice, computerChoice);
}

// Chama a função para obter a escolha do jogador
getPlayerChoice();