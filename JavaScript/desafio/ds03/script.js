function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#iano') //formulario do ano 
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique se preencheu os campos corretamente!');
    } else {
        var sexo = document.getElementsByName('sexo');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
        if (sexo[0].checked) {
            genero = 'Homem';
            if (idade >= 5 && idade < 10){
                img.setAttribute('src', 'imagem/garoto(1).png')
            } else if (idade < 23) {
                img.setAttribute('src', 'imagem/jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagem/homem.png')
            }else {
                img.setAttribute('src', 'imagem/senhor.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'; 
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagem/garota(1).png')
            } else if (idade < 23) {
                // jovem 
                img.setAttribute('src', 'imagem/mulhe-joven.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagem/mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagem/veiaaa.png')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos um gênero <strong>${genero}</strong> com <strong>${idade} anos</strong> </p>`;
        res.appendChild(img)
    }
    
}