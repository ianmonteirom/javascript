let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varA2 = 'A';
let varB2 = 'B';
let varC2 = 'C';

varA = varB2;
varB = varC2;
varC = varA2;

console.log(varA, varB, varC);