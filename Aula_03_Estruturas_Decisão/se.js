const leia = require('readline-sync');

console.log ("Bem vindo ao cáuculo da média");
console.log ("Informe as notas a seguir:");

let primeira_nota = leia.questionFloat("Digite a primeira nota:");
let segunda_nota = leia.questionFloat("Digite a segunda nota:");

let media =(primeira_nota + segunda_nota) / 2;

console.log ("Sua média é "+ media);

if (media > 6 ){
    console.log("Resultado: ");
    console.log ("Você foi aprovado!");
}else
    console.log("Você foi reprovado");

console.log("Fim do Script");