// Variável modalKey será global
let modalKey = 0;

// Variável para controlar a quantidade inicial de pizzas no modal
let quantidadePizzas = 1;

// Carrinho
let cart = [];

// Funções auxiliares
const seleciona = (elemento) => document.querySelector(elemento);
const selecionaTodos = (elemento) => document.querySelectorAll(elemento);

const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

const formatoMonetario = (valor) => {
    if (valor) {
        return valor.toFixed(2);
    }
}

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
const preencherDadosDasPizzas = (pizzaItem, item, index) => {
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price[0].toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
}

// Preenchimento dos dados da janela modal
const preencheDadosModal = (item) => {
    seleciona('.pizzaInfo h1').innerHTML = item.name;
    seleciona('.pizzaBig img').src = item.img;
    seleciona('.pizzaInfo--desc').innerHTML = item.description;
    seleciona('.pizzaInfo--actualPrice').innerHTML = formatoReal(item.price[2]);
}

// Função para pegar o índice da pizza clicada
const pegarKey = (e) => {
    let key = e.target.closest('.pizza-item').getAttribute('data-key');
    console.log('Clicou na pizza', key);
    console.log(pizzaJson[key]);

    // Garantir que a quantidade inicial da pizza seja 1
    quantidadePizzas = 1;

    // Manter a informação de qual pizza foi clicada
    modalKey = key;

    return key;
}

// Preencher tamanhos
const preencherTamanhos = (key) => {
    // Tira a seleção de tamanho atual e seleciona o tamanho grande
    seleciona('.pizzaInfo--size.selected').classList.remove('selected');

    // Seleciona todos os tamanhos
    selecionaTodos('.pizzaInfo--size').forEach((size, sizeIndex) => {
        // Seleciona o tamanho grande
        (sizeIndex == 2) ? size.classList.add('selected') : '';
        size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
    });
}

// Escolher o tamanho e atualizar o preço
const escolherTamanhoPreco = (key) => {
    // Ações nos botões de tamanho
    selecionaTodos('.pizzaInfo--size').forEach((size, sizeIndex) => {
        size.addEventListener('click', () => {
            // Tirar a seleção de tamanho atual e selecionar o tamanho escolhido
            seleciona('.pizzaInfo--size.selected').classList.remove('selected');
            size.classList.add('selected');

            // Atualizar o preço de acordo com o tamanho
            seleciona('.pizzaInfo--actualPrice').innerHTML = formatoReal(pizzaJson[key].price[sizeIndex]);
        });
    });
}

// Mudar a quantidade de pizzas
const mudarQuantidade = () => {
    // Ações nos botões de + e - na janela modal
    seleciona('.pizzaInfo--qtmais').addEventListener('click', () => {
        quantidadePizzas++;
        seleciona('.pizzaInfo--qt').innerHTML = quantidadePizzas;
    });
    seleciona('.pizzaInfo--qtmenos').addEventListener('click', () => {
        if (quantidadePizzas > 1) {
            quantidadePizzas--;
            seleciona('.pizzaInfo--qt').innerHTML = quantidadePizzas;
        }
    });
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
    preencherDadosDasPizzas(pizzaItem, item, index);

    // Quando clicar na pizza
    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault();
        let chave = pegarKey(e);

        // Abrir janela modal e preencher com os dados da pizza clicada
        abrirModal();

        // Preenchimento dos dados
        preencheDadosModal(item);

        // Pegar tamanho selecionado
        preencherTamanhos(chave);

        // Definir quantidade inicial como 1
        seleciona('.pizzaInfo--qt').innerHTML = quantidadePizzas;

        // Selecionar o tamanho e preço com o clique no botão
        escolherTamanhoPreco(chave);

        // Inicializar controle de quantidade
        mudarQuantidade();
    });
});
