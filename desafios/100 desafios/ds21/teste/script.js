// Exemplo de lista de pizzas
const pizzas = [
    { id: 1, nome: 'Pizza de Queijo', preco: 20 },
    { id: 2, nome: 'Pizza de Pepperoni', preco: 25 },
    { id: 3, nome: 'Pizza Vegetariana', preco: 22 },
    // Adicione mais pizzas conforme necessário
];

// Função para exibir o menu de pizzas
function exibirMenu() {
    const menuSection = document.querySelector('.menu');
    
    pizzas.forEach(pizza => {
        const pizzaItem = document.createElement('div');
        pizzaItem.classList.add('pizza-item');
        pizzaItem.innerHTML = `
            <h3>${pizza.nome}</h3>
            <p>Preço: $${pizza.preco}</p>
            <button onclick="adicionarAoCarrinho(${pizza.id})">Adicionar ao Carrinho</button>
        `;
        menuSection.appendChild(pizzaItem);
    });
}

// Função para adicionar uma pizza ao carrinho
function adicionarAoCarrinho(pizzaId) {
    // Implemente a lógica para adicionar a pizza ao carrinho aqui
}

// Inicialização
exibirMenu();
