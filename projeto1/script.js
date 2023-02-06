function carregar(){
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var msg3 = window.document.getElementById('msg3')
    var msg4 = window.document.getElementById('msg4')
    var msg5 = window.document.getElementById('msg5')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var dia = new Date()
    var ndia = dia.getDate()
    var mes = new Date()
    var nmes = mes.getUTCMonth()
    var ano = new Date()
    var nano = ano.getFullYear()

    
    msg.innerHTML = `Agora são ${hora} horas.` 
    msg2.innerHTML = `Dia ${ndia}`
    msg3.innerHTML = `Mês ${nmes}`
    msg4.innerHTML = `Ano ${nano}`
    msg5.innerHTML = "O meses são contados a partir do 0 (janeiro), 1 (fevereiro) ..."
    if (hora >= 0 && hora < 12){
        img.src = 'imagem-manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagem-tarde.png'
        document.body.style.background  = '#b9846f'

    } else {
        img.src = 'imagem-noite.png'
        document.body.style.background = '#515154'
    }

}



