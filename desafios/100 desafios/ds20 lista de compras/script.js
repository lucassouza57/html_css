// Função para adicionar itens à lista
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return; // Não adiciona itens em branco
    }

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-button" onclick="completeTask(this)">Concluir</button>
        <button class="delete-button" onclick="deleteTask(this)">Excluir</button>
    `;
    taskList.appendChild(listItem);

    // Limpa o campo de entrada após adicionar o item
    taskInput.value = "";

    
}

// Função para concluir uma tarefa
function completeTask(button) {
    const taskText = button.previousElementSibling; // Captura o elemento de texto de item
    taskText.style.textDecoration = "line-through"; // Aplica estilo de risco na item comprado 
    taskText.style.color = "grey" // Muda a cor na hora da conclusão 
    button.disabled = true; // Desabilita o botão "Concluir"
}

// Função para excluir o item 
function deleteTask(button) {
    const listItem = button.parentElement;
    const taskList = document.getElementById("taskList");
    taskList.removeChild(listItem);
}
