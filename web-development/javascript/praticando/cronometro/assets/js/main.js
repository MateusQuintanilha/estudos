(function() {
    const cronometro = document.getElementById('timer');
    let segundos = 0;
    let timer;

    function pegarSegundosDoTempo(segundos) {
        const milissegundos = segundos * 1000;
        const data = new Date(milissegundos);
        return data.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'GMT'
        });
    }

    function iniciarCronometro() {
        timer = setInterval(() => {
            segundos++;
            cronometro.innerText = pegarSegundosDoTempo(segundos);
        }, 1000);
    }

    document.addEventListener('click', (event) => {
        const elemento = event.target;

        if(elemento.classList.contains('iniciar')){
            iniciarCronometro();
            cronometro.classList.remove('pausado');
        }
        if(elemento.classList.contains('pausar')){
            clearInterval(timer);
            cronometro.classList.toggle('pausado');
        }
        if(elemento.classList.contains('zerar')){
            clearInterval(timer);
            segundos = 0;
            cronometro.innerText = pegarSegundosDoTempo(segundos);
            cronometro.classList.remove('pausado');
        }
    });
})();