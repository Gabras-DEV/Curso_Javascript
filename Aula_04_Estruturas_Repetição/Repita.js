const leia = require('readline-sync');
console.log("Bem vindo ao Sysmatemática")

let opcao = 0;

do { //Faça
   console.log("Por favor escolha uma opção:");
   console.log("1 - Iniciar atendimento");
   console.log("2 - Acompanhar meu pedido");
   console.log("3 - Falar com atendente");
   opcao = leia.questionInt("Digite a opcao: ");
} while (opcao <= 0 || opcao > 3); // Enquanto

switch (opcao) {
   case 1:
      console.log("Vamos iniciar seu atendimento");
      break;
   case 2:
      console.log("Vamos acompanhar seu pedido");
      break;
   case 3:
      console.log("Encaminhando para um atendente aguarde.");
      break;
}