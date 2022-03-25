
function getTimeForSeconds(segundos) {
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

const cronometro = document.getElementById('timer');
const buttonIniciar = document.getElementById('iniciar');
const buttonPausar = document.getElementById('pausar');
const buttonZerar = document.getElementById('zerar');
let segundos = 0;
let timer;

function iniciarCronometro() {
    timer = setInterval(() => {
        segundos++;
        cronometro.innerText = getTimeForSeconds(segundos);
    }, 1000);
}

buttonIniciar.addEventListener('click', () => iniciarCronometro());
buttonPausar.addEventListener('click', () => clearInterval(timer));
buttonZerar.addEventListener('click', () => {
    clearInterval(timer);
    segundos = 0;
    cronometro.innerText = getTimeForSeconds(segundos);
});