const nome = 'Ian';
const sobrenome = 'Monteiro';
const idade = 21;
const peso = 79;
const altura = 1.70;
let imc = peso / (altura * altura)
let anoNascimento = 2023 - idade 

// template strings 

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)