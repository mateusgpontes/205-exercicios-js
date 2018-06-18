let idade = Number('Qual sua idade?');
if(idade >= 22 && idade <= 55){
    let emprestimo = Number(prompt('Quanto você quer de empréstimo?'));
    let mes = Number(prompt('Quanto você ganha por mês?'));
    let limiteEmprestimo = 15 * mes;
    if(emprestimo >= 1000 && emprestimo <= limiteEmprestimo){
        alert('Aceito');
    }
    else{
        alert('Não aceito');
    }
}
else{
    alert('Você é muito Jovem');
}