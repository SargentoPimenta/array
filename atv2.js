
//primeira atv.

const elementos = ["Melancia", "Banana", "Cereja"];
const primeirasLetras = elementos.map(item => item[0]);
console.log(primeirasLetras);

//segunda atv.

const numeros = [10, 5, 23, 8, 15];
let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log(`O maior número é: ${maiorNumero}`);


//terceira atv.

const numeros = [15, 7, 22, 43, 10];
let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log(`O maior número do array é: ${maiorNumero}`);

//quarta atv
const valores = [10, 20, 30, 40, 50];  // Array com os valores
let soma = 0;

for (let i = 0; i < valores.length; i++) {
  soma += valores[i];  // Somando os valores do array
}

const media = soma / valores.length;  // Calculando a média

console.log(`A soma dos valores é: ${soma}`);
console.log(`A média dos valores é: ${media}`);


// quinta atv.

const numeros = [15, 7, 22, 43, 10];
let menorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < menorNumero) {
    menorNumero = numeros[i];
  }
}

console.log(`O menor número do array é: ${menorNumero}`);
 
//sexta atv.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = [];
const numerosImpares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    numerosPares.push(numeros[i]);
  } else {
    numerosImpares.push(numeros[i]);
  }
}

console.log("Números pares:", numerosPares);
console.log("Números ímpares:", numerosImpares);

//EX1
let objeto = [1,3,4,1,4,5]
for (let i = 0; i< objeto.length; i++ ){ 
if (objeto[i]%objeto[i] === 0)
{
    console.log ("não está vazio")
} if (objeto.length === 0 ) { 
    console.log("está vazio")
}
}

