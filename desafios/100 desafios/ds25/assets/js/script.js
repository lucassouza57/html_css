function toggleAnswer(answerId) {
    var answerElement = document.getElementById(answerId);
  
    if (answerElement.style.display === "none" || answerElement.style.display === "") {
      // Se a resposta estiver oculta ou não definida, mostre-a
      answerElement.style.display = "block";
    } else {
      // Se a resposta estiver visível, oculte-a
      answerElement.style.display = "none";
    }
  }
  