let nome = prompt('Qual seu nome?');
let login = prompt('Qual seu login?');
let senha = prompt('Qual sua senha?');
let data = prompt('Qual sua data de nascimento\n Use o formato DD/MM/AAAA');
let premium = confirm('Você é VIP?');

let idade = 2018 - Number(data[6] + data[7] + data[8] + data[9]) - 1;
if(Number(data[3] + data[4]) <= 07 && Number(data[0] + data[1]) <= 15){
    idade++;
}

let pessoa = {
    nome: nome,
    login: login,
    senha: senha,
    data: data,
    premium: premium,
    idade: idade
}

for(let item in pessoa){
    console.log(`O ${item} da pessoa é ${pessoa[item]}`);
}
