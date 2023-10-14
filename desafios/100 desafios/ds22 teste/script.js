// Galeria de bolos grandes
let imagens = Array.from(document.getElementsByClassName("img-container"));
let mainPhoto = document.getElementById("mainPhoto");

function updateImage(event) {
    let image = event.target;
    mainPhoto.src = image.src;
}

imagens.forEach(function(image) {
    image.addEventListener("click", updateImage);
});

// Galeria de bolos de pote
let imagens02 = Array.from(document.getElementsByClassName("img-container02"));
let mainPhoto02 = document.getElementById("mainPhoto02");

function updateImage02(event) {
    let image = event.target;
    mainPhoto02.src = image.src;
}

imagens02.forEach(function(image) {
    image.addEventListener("click", updateImage02);
});
