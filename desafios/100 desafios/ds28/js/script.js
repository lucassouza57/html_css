pizzaJson.map((item, index) => {
    // Clonar o modelo de item de pizza
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);

    // Adicionar o item clonado na área de pizzas
    document.querySelector('.pizza-area').append(pizzaItem);

    // Preencher dados de cada pizza
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    // Quando clicar na pizza
    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Clicou na pizza');

     // Abrir janela modal
        document.querySelector('.pizzaWindowArea').style.display = 'flex'

    // Preenchimento dos dados da janela modal
        document.querySelector('.pizzaInfo h1').innerHTML = item.name
        document.querySelector('.pizzaBig img').src = item.img;
        document.querySelector('.pizzaInfo--desc').innerHTML = item.description
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
    });

    // Fechar janela modal
    document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', () => {
        document.querySelector('.pizzaWindowArea').style.display = 'none'
    })

    // Fechar janela modal mobile
    document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click', () => {
        document.querySelector('.pizzaWindowArea').style.display = 'none'
    })
});
