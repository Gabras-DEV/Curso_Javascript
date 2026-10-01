//nome : caracter
//Escreval ("Qual é o seu nome?")
//Leia (nome)
//Escreval("Olá ", nome)
const leia = require('readline-sync')
let nome = leia.question("Qual eh o seu nome?")
console.log("Ola " + nome);