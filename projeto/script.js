function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12){
        img.src = 'imagem-manha.png'
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagem-tarde.png'

    } else {
        img.src = 'imagem-noite.png'
    }

}


