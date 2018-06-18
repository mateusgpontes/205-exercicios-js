let tamanho = Number(prompt("Qual tamanho da escada?"));
let degrau = prompt("Qual o modelo de degrau?");
let contador = 0;
let escada = "";

while(contador < tamanho){
    escada = escada + degrau;
    console.log(escada);
    contador++;
}