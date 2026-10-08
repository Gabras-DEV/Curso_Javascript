const leia = require('readline-sync');

console.log("Bem vindo ao Sistema da Pizzaria");
console.log(" ");
console.log("Escolha uma das opções a seguir:");
console.log(" ");
console.log("1 - Iniciar atendimento");
console.log("2 - Acompanhar meu pedido");
console.log("3 - Falar com atendente");
console.log("4 - Fazer uma reclamação")
let opcao = leia.questionInt("Digite a opção: ");

switch (opcao) {

    case 1:
        console.log("Vamos iniciar seu atendimento!");
        break;

    case 2:
        console.log("Vamos acompanhar seu pedido!");
        break;

    case 3:
    case 4:
        console.log("Encaminhando seu atendimento para um atendente...");
        break;

    default:
        console.log("Opção inválida!");

}
console.log(" ");
console.log("Fim do Script.");