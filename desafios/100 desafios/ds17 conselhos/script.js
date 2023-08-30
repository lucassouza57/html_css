const generateBtn = document.getElementById("generateBtn");
const adviceContainer = document.getElementById("adviceContainer");

generateBtn.addEventListener("click", () => {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            const advice = data.content;
            adviceContainer.innerHTML = `<p>${advice}</p>`;
        })
        .catch(error => {
            console.error("Erro ao obter conselho:", error);
            adviceContainer.innerHTML = "<p>Ocorreu um erro ao obter um conselho.</p>";
            adviceContainer.style.color = 'red'
            adviceContainer.style.fontWeight = 'bold'
        })
})
