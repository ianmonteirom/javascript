const num = Number(prompt('Digite um número:'));
const numeroTitulo = document.querySelector('span#numero-titulo');
const texto = document.querySelector('div#texto');

numeroTitulo.innerHTML = num;
texto.innerHTML = `
                    <p>Seu número +2 é ${num + 2}</p>
                    <p>Raiz quadrada: ${num ** 0.5}</p>
                    <p>${num} é inteiro: ${Number.isInteger(num)}</p>
                    <p>É NaN: ${Number.isNaN(num)}</p>
                    <p>Arredondado para baixo: ${Math.floor(num)}</p>
                    <p>Arredondado para cima: ${Math.ceil(num)}</p>
                    <p>Com duas casas decimais: ${num.toFixed(2)}</p>`


