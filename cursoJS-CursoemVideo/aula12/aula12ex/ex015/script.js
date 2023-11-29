function verificar() {
    var data = new Date()
    var atual = data.getFullYear()
    var anonasctxt = window.document.querySelector('input#txtnasc')
    var nasc = Number(anonasctxt.value)
    var res = document.querySelector('div#res')
    var idade = atual - nasc
    // var img = document.createElement('img')
    // img.setAttribute('id', 'foto') // Adicionar imagem via JS
    var img = document.querySelector('img#foto')
    if (nasc == 0 || nasc > atual || idade > 130) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var gênero = ''
        if (fsex[0].checked) {
            gênero = ' Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
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
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulhervelha.png')
            }
        }
        res.innerHTML = `Detectamos um${gênero} com ${idade} anos.`
        res.appendChild(img)

    }

}