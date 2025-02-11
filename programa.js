//Variável das notas
var notas = [7.0, 6.0, 10.0];

//Soma das notas
var soma = 0

for(var i = 0; i < 3; i++) {
    soma += notas[i];
}

//Média das notas
var media = soma / 3.0;

 //Média mínima
if (media >= 7.0) {
    console.log("Aprovado"); //Status aprovado
    console.log("Chama na botinha! Você tá salvo e vai direto pras ferias, sua média foi: " + media.toFixed(2) + "."); //Declaração de aprovação
    console.log('Nota 1: ', notas[0]); //Nota 1
    console.log('Nota 2: ', notas[1]); //Nota 2
    console.log('Nota 3: ', notas[2]); //Nota 3
} else {
    console.log("Reprovado"); //Status reprovado
    console.log("Rodou legal! Vai estudar até o natal, sua média foi: " + media.toFixed(2) + "."); //Declaração de reprovação
    console.log('Nota 1: ', notas[0]); //Nota 1
    console.log('Nota 2: ', notas[1]); //Nota 2
    console.log('Nota 3: ', notas[2]); //Nota 3
}