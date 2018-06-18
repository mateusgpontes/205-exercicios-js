let numero = Math.floor(Math.random() * 51);

let tentativa = Number(prompt('Qual o número que eu estou pensando?'));


while(tentativa !== numero){
    if(tentativa < numero){
        alert('O número que eu estou pensando é MAIOR');
    }
    else{
        alert('O número que eu estou pensando é MENOR');
    }
    tentativa = Number(prompt('Mais uma tentativa!\nQual o número que eu estou pensando?'));
}

alert('Você acertou');