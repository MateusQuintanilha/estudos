(function(){
    // Primeira forma
    // function getData(){
    //     const dataHoje = new Date();
    //     const diaDaSemana = getDiaSemana(dataHoje.getDay());
    //     const diaDoMes = dataHoje.getDate();
    //     const mes = getMes(dataHoje.getMonth());
    //     const ano = dataHoje.getFullYear();
    //     const hora = dataHoje.getHours();
    //     const minuto = getMinuto(dataHoje.getMinutes());

    //     return {diaDaSemana, diaDoMes, mes, ano, hora, minuto};
    // }

    // function getDiaSemana(diaDaSemana) {
    //     switch(diaDaSemana){
    //         case 0:
    //             return 'Domingo';
    //         case 1:
    //             return 'Segunda-Feira';
    //         case 2:
    //             return 'Terça-Feira';
    //         case 3:
    //             return 'Quarta-Feira';
    //         case 4:
    //             return 'Quinta-Feira';
    //         case 5:
    //             return 'Sexta-Feira';
    //         case 6:
    //             return 'Sábado';
    //     };
    // }
    // function getMes(mes) {
    //     switch(mes){
    //         case 0:
    //             return 'Janeiro';
    //         case 1:
    //             return 'Fevereiro';
    //         case 2:
    //             return 'Março';
    //         case 3:
    //             return 'Abril';
    //         case 4:
    //             return 'Maio';
    //         case 5:
    //             return 'Junho';
    //         case 6:
    //             return 'Julho';
    //         case 7:
    //             return 'Agosto';
    //         case 8:
    //             return 'Setembro';
    //         case 9:
    //             return 'Outubro';
    //         case 10:
    //             return 'Novembro';
    //         case 11:
    //             return 'Dezembro';
    //     };
    // }

    // function getMinuto(minuto) {
    //     return minuto < 10 ? `0${minuto}`: minuto
    // }

    // function setMessage(diaDaSemana, diaDoMes, mes, ano, hora, minuto){
    //     const dataContainer = document.querySelector('#data');
    //     dataContainer.innerText = `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano} ${hora}:${minuto}`;
    // }

    // setMessage(getData().diaDaSemana, getData().diaDoMes, getData().mes, getData().ano, getData().hora, getData().minuto);

// Segunda forma

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemana(diaSemana) {
//     const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feita', 'Sexta-Feira', 'Sábado'];
//     return diasSemana[diaSemana];
// }

// function getNomeMes(numeroMes) {
//     const meses = ['Janeiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//     return meses[numeroMes];
// }

// function zeroAEsquerda(numero) {
//     return numero < 10 ? `0${numero}`: numero;
// }

// function criaData(data) {
//     const diaDaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemana(diaDaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` +
//         ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//     );
// }

// h1.innerText = criaData(data);

// Terceira forma
const dataContainer = document.querySelector('#data');
dataContainer.innerText = new Date().toLocaleString('pt-BR', {dateStyle: 'full',timeStyle: "short"});

})();

