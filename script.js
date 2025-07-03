function alunotchola() {
    let aluno = {
        aluno: 'Nobru',
        idade: 43,
        altura: 1.22 ,
        hs: 100 ,
    };
//alert(aluno.nome);

    document.getElementById('nome_aluno').textContent = 'Nome: ' + aluno.aluno;
    document.getElementById('idade_aluno').textContent = 'Idade: ' + aluno.idade;
    document.getElementById('altura_aluno').textContent = 'Altura: ' + aluno.altura;
    document.getElementById('hs_aluno').textContent = 'Taxa de HS: ' + aluno.hs + '%';
}
