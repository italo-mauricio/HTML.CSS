function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > ano || fano.value < 0) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10){
                gênero = 'criança'
                img.setAttribute('src', 'criança.png')
            }else if (idade < 21){
                gênero = 'jovem adulto'
                img.setAttribute('src', 'homem-jovem.png')
            }else if (idade > 50){
                gênero = 'idoso'
                img.setAttribute('src', 'homem-velho.png')
            }else{

            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                gênero = 'criança'
                img.setAttribute('src', 'criança.png')
            }else if (idade < 21){
                gênero = 'jovem adulta'
                img.setAttribute('src', 'mulher-jovem.jpg')
            }else if (idade > 50){
                gênero = 'idosa'
                img.setAttribute('src', 'mulher-idosa.jpg')
            }else{
                
            }
        }
        res.style.textAlign = 'center'
        res.style.fontFamily = 'Arial'
        res.style.fontWeight = 'bolder'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}


