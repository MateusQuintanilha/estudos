function meuEscopo () {
    const form = document.querySelector('#form');
    const dadosTabela = document.querySelector('#body');

    const pessoas = [];

    function getEventForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        const dadosPessoas = dadosEmObjeto(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(dadosPessoas);
        imprimeDadosNaTabela(dadosPessoas);
        console.log(pessoas);
    }

    function dadosEmObjeto(nome, sobrenome, peso, altura) {
        return {nome, sobrenome, peso, altura};
    }

    function imprimeDadosNaTabela (dadosPessoas) {
        dadosTabela.innerHTML += `
        <tr>
            <td>${dadosPessoas.nome}</td>
            <td>${dadosPessoas.sobrenome}</td>
            <td>${dadosPessoas.peso}</td>
            <td>${dadosPessoas.altura}</td>
        </tr>
        `;
    }

    form.addEventListener('submit', getEventForm);
}
meuEscopo();
