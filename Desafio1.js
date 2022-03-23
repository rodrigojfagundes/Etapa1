var valorSolicitado = 130;

var ced100 = 100;
var totalCed100 = 0;
var ced50 = 50;
var totalCed50 = 0;
var ced10 = 10;
var totalCed10 = 0;
var ced5 = 5;
var totalCed5 = 0;
var ced2 = 2;
var totalCed2 = 0;
var ced1 = 1;
var totalCed1 = 0;


while (valorSolicitado >= ced100){
valorSolicitado = valorSolicitado - 100;
totalCed100 = totalCed100 +1;

}

while (valorSolicitado >= ced50){
valorSolicitado = valorSolicitado - 50;
totalCed50 = totalCed50 + 1;
}


while (valorSolicitado >= ced10){
valorSolicitado = valorSolicitado - 10;
totalCed10 = totalCed10 + 1;
}

while (valorSolicitado >= ced5){
valorSolicitado = valorSolicitado - 5;
totalCed5 = totalCed5 + 1;
}

while (valorSolicitado >= ced2){
valorSolicitado = valorSolicitado - 2;
totalCed2 = totalCed2 + 1;
}

while (valorSolicitado >= ced1){
valorSolicitado = valorSolicitado - 1;
totalCed1 = totalCed2 + 1;
}
console.log("total de notas de 100: =>",totalCed100, "\n total de notas de 50: =>",totalCed50,"\n total de notas de 10: =>", totalCed10, "\n total de notas de 5: =>",totalCed5, "\n total de notas de 2: =>",totalCed2, "\n total de notas de 1: =>",totalCed1);