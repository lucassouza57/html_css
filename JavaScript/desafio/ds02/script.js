
function carregar (){
    msg = window.document.querySelector('#msg')
    img = window.document.querySelector('#imagem')
    data = new Date()
    hora = data.getHours()
    //hora = 7
    msg.innerHTML = `<p>Agora são <strong>${hora}  horas</strong></p>`

    if (hora >= 0 && hora < 12){
        //bom dia 
        img.src = 'imagens/manha(1).jpg'
        document.body.style.background = '#F2BB9B'
        msg.style.color = '#735702'
    }
        else if (hora >= 12 && hora < 18){
            //boa tarde
            img.src = 'imagens/tarde(1).jpg'
            document.body.style.background = '#637AA6'
            msg.style.color = '#637AA6'
        }
            else {
                //boa noite
                img.src = "imagens/noite(1).jpg"
                document.body.style.background = '#012326'
                msg.style.color = '#054159'
            }
        }

