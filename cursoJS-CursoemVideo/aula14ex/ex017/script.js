function tabuada() {
    numt = document.querySelector('input#txtnum')
    if (numt.value.length == 0) {
        alert('Por favor, digite um número!')
    }
    num = Number(numt.value)
    res = document.querySelector('div#res')
    if (numt.value.length > 0) {
        res.innerHTML = ''
        for(let t = 1;t <= 10; t++) {
            res.innerHTML += `${num} x ${t} = ${num*t}</br>`
        }
    }
}