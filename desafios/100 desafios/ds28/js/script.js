pizzaJson.map((item, index ) => {
    //console.log(item)
    //clonar os itens
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)
    //console.log(pizzaItem)
    //mostras os itens na tela
    document.querySelector('.pizza-area').append(pizzaItem)

    // preencher os dados de cada pizza
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    //aqui eu coloquei para aparecer duas casas decimais 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

})
