function contar() {
    let init = document.querySelector('input#txtini')
    let fimt = document.querySelector('input#txtfim')
    let past = document.querySelector('input#txtpas')
    let ini = Number(init.value)
    let fim = Number(fimt.value)
    let pas = Number(past.value)
    let res = document.querySelector('div#res')
    if (past.value.length == 0 || pas == 0) {
        alert('Passo inválido! Considerando PASSO 1')
        pas = 1
    }
    res.innerHTML = 'Contando: </br>'
    if (fimt.value.length == 0) {
        res.innerHTML = 'Impossível contar!' 
    } else if (ini > fim) {
        for(ini;ini>=fim;ini-=pas) {
            res.innerHTML += ini
            res.innerHTML += ' 👉 '
        }
        res.innerHTML += '🏁'    
    } else {
        for(ini;ini<=fim;ini+=pas) {
            res.innerHTML += ini
            res.innerHTML += ' 👉 '
            }
        res.innerHTML += '🏁'
        }
    }
