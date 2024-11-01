// Funções auxiliares
const seleciona = (elemento) => document.querySelector(elemento);
const selecionaTodos = (elemento) => document.querySelectorAll(elemento);

const abrirModal = () => {
    seleciona('.pizzaWindowArea').style.opacity = 0;
    seleciona('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
        seleciona('.pizzaWindowArea').style.opacity = 1;
    }, 150);
}

const fecharModal = () => {
    seleciona('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        seleciona('.pizzaWindowArea').style.display = 'none';
    }, 500);
}

const botoesFechar = () => {
    // Botões para fechar modal
    selecionaTodos('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
        item.addEventListener('click', fecharModal);
    });
}

// Preencher dados de cada pizza
const preencherDadosDasPizzas = (pizzaItem, item) => {
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
}

// Inicializar a função para fechar o modal nos botões
botoesFechar();

// Mapear pizzaJson para gerar listas de pizzas
pizzaJson.map((item, index) => {
    // Clonar o modelo de item de pizza
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);

    // Adicionar o item clonado na área de pizzas
    seleciona('.pizza-area').append(pizzaItem);

    // Preencher dados de cada pizza
    preencherDadosDasPizzas(pizzaItem, item);

    // Quando clicar na pizza
    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Clicou na pizza');

        // Abrir janela modal
        abrirModal();

        // Preenchimento dos dados da janela modal
        document.querySelector('.pizzaInfo h1').innerHTML = item.name;
        document.querySelector('.pizzaBig img').src = item.img;
        document.querySelector('.pizzaInfo--desc').innerHTML = item.description;
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`;
    });
});
