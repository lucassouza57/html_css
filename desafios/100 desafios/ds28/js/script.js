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
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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

const adicionarCarrinho = () => {
    seleciona('.pizzaInfo--addButton').addEventListener('click', () => {
        console.log('Adicionar no carrinho')

        //pegar dados de janelas modal atual
        // qual pizza? Pegue oi modalkey para usar pizzaJaon[modalKey]
        console.log('Pizza' + modalKey)
        // Tamanho
        let size = seleciona('.pizzaInfo--size.selected').getAttribute('data-key')
        //quantidade
        console.log('Quant.' + quantidadePizzas)
        //Preço
        let price = seleciona('.pizzaInfo--actualPrice').innerHTML.replace('R$&nbsp;', '')

        // criar um identificador que junte id e tamanho
        // concatene as duas informações por um simbulo
        let indetificador = pizzaJson[modalKey].id + 't' + size

        //antes de adicionar verifique se ja tem aquele codigo e tamanho
        //para addcionar a quantidade
        let key = cart.findIndex((item) => item.indetificador == indetificador)
        console.log(key)

        if (key > -1) {
            //se acontrar aumnete a quantidade  
            cart[key].qt += quantidadePizzas
        } else {
            //adicionar objeto pizza no carrinho
            let pizza = {
                indetificador,
                id: pizzaJson[modalKey].id,
                size, // size : size
                qt: quantidadePizzas,
                price: parseFloat(price) //price : price
            }
            cart.push(pizza)
            console.log(pizza)
            console.log('Sub total R$' + (pizza.qt * pizza.price).toFixed(2))
        }

        fecharModal()
        abrirCarrinho()
        AtualizarCarrinho()

    })
}

const abrirCarrinho = () => {
    console.log('qtd de itens no carrinho' + cart.length)
    if (cart.length > 0) {
        // mostrar o carrinho 
        seleciona('aside').classList.add('show')
        seleciona('header').style.display = 'flex' // mostra a barra superior
    }

    // exibir aside do carrinho no modo mobile
    seleciona('.menu-openner').addEventListener('click', () => {

        if (cart.length > 0) {
            seleciona('aside').classList.add('show')
            seleciona('aside').style.left = '0'
        }
    })
}



const AtualizarCarrinho = () => {
    // Exibir número de itens no carrinho
    seleciona('.menu-openner span').innerHTML = cart.length;

    // Mostrar ou esconder o carrinho
    if (cart.length > 0) {
        seleciona('aside').classList.add('show');

        // Limpar o conteúdo do carrinho para evitar duplicações
        seleciona('.cart').innerHTML = '';

        // Variáveis para calcular subtotal, desconto e total
        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for (let i in cart) {
            // Encontrar o item da pizza pelo id
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);
            console.log(pizzaItem);

            // Calcular subtotal para cada item
            subtotal += cart[i].price * cart[i].qt;

            // Clonar o modelo de item do carrinho, exibir na tela e preencher com as informações
            let cartItem = seleciona('.models .cart--item').cloneNode(true);
            seleciona('.cart').append(cartItem);

            let pizzaSizeName = cart[i].size;
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;

            // Botão + para aumentar quantidade
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++;
                AtualizarCarrinho();
            });

            // Botão - para diminuir quantidade, com limite de 1
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if (cart[i].qt > 1) {
                    cart[i].qt--;
                } else {
                    cart.splice(i, 1);
                }
                AtualizarCarrinho();
            });
        }

        // Calcular desconto e total
        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        // Exibir os valores na tela
        seleciona('.subtotal span:last-child').innerHTML = formatoReal(subtotal);
        seleciona('.desconto span:last-child').innerHTML = formatoReal(desconto);
        seleciona('.total span:last-child').innerHTML = formatoReal(total);

    } else {
        // Ocultar o carrinho
        seleciona('aside').classList.remove('show');
        seleciona('aside').style.left = '100vw';
    }
};

// Função para fechar o carrinho
const fecharCarrinho = () => {
    seleciona('.menu-closer').addEventListener('click', () => {
        seleciona('aside').style.left = '100vw'; // Usando 100vw para esconder o carrinho
        seleciona('header').style.display = 'flex';
    });
}

// Função para finalizar a compra
const finalizarCompra = () => {
    seleciona('.cart--finalizar').addEventListener('click', () => {
        console.log('Finalizar compra');
        seleciona('aside').classList.remove('show'); // Oculta o carrinho
        seleciona('aside').style.left = '100vw';
        seleciona('header').style.display = 'flex';
        cart = []; // Limpa o carrinho
        AtualizarCarrinho(); // Atualiza a interface do carrinho
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

        adicionarCarrinho();
        AtualizarCarrinho();
        fecharCarrinho();
        finalizarCompra();
    });
});
