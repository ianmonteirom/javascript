let nums = []
let res = document.querySelector('div#res')
function adicionar() {

    //Limpa o Resultado antigo
    res.innerHTML = ''

    //Declaração de Variáveis
    let lista = document.querySelector('select#lista')
    let numt = document.querySelector('input#txtnum')
    let num = Number(numt.value)
    let ind = nums.indexOf(num)

    // Teste
    if (numt.value.length == 0 || numt.value < 1 || numt.value > 100 || ind != -1) {
        alert('Valor inválido ou já encontrado na lista.')

    // Passou no teste, adiciona ao vetor
    } else if (ind == -1){
        nums.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
    }
    numt.value = ''
    numt.focus()
}

function finalizar() {

    //Limpa o Finalizar Antigo
    res.innerHTML = ''

    //Cálculo da soma, do maior e menor número
    let mai = nums[0]
    let men = nums[0]
    let soma = 0
    for (let pos in nums) {
        soma += nums[pos]
        if (nums[pos] > mai) 
            mai = nums[pos]
        if (nums[pos] < men) 
            men = nums[pos]
    }

    //Cálculo da Média
    let média = 0
    média = soma / nums.length

    // Resultado Final
    if (nums.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
    res.innerHTML += `<p>Ao todo, temos ${nums.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${mai}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${men}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${média}.</p>`
    }
}