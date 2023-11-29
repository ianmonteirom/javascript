function verificar() {
    var data = new Date()
    var atual = data.getFullYear()
    var anonasc = document.querySelector('input#inputnasc')
    var nasc = Number(anonasc.value)
    var idade = atual - nasc
    var res = document.querySelector('div#res')
    var img = document.querySelector('img#foto')
    if (nasc = 0 || nasc > atual || idade > 130) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var gênero = ''
        var sex = document.getElementsByName('radsex')
        if (sex[0].checked) {
            gênero = ' Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade < 29) {
                //Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homemvelho.png')
            }
        } else {
            gênero = 'a Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade < 29) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 60) {
                //Adulta
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //Idosa
                img.setAttribute('src', 'mulhervelha.png')
            }
        }
        res.innerHTML = `Detectamos um${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}