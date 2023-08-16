const generateBtn = document.getElementById("generateBtn")
const adviceContainer = document.getElementById("adviceContainer")

generateBtn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice?lang=pt")
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            adviceContainer.innerHTML = `<p>${advice}</p>`
        })
        .catch(error => {
            console.error("Erro ao obter conselho:", error)
            adviceContainer.innerHTML = "<p>There was an error getting advice.</p>"
            adviceContainer.style.color = 'red'
            adviceContainer.style.fontWeight = 'bold'
        })
})
