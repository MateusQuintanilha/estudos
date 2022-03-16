( function() {
    const form = document.querySelector('#form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formPeso = form.querySelector('#peso');
        const formAltura = form.querySelector('#altura');
        const peso = Number(formPeso.value);
        const altura = Number(formAltura.value);

        if(peso && altura) {
            calcularImc(peso, altura);
        } else {
            mostrarResultado('Você digitou um valor Invalido', 'erro');
        }
    });

    function calcularImc(peso, altura) {
        const calculoImc = (peso / (altura * altura)).toFixed(2);

        if(calculoImc < 18.5) {
            mostrarResultado(`Seu IMC é ${calculoImc} - Abaixo do peso`, 'amarelo');
        } else if(calculoImc >= 18.5 && calculoImc <= 24.9) {
            mostrarResultado(`Seu IMC é ${calculoImc} - Peso normal`, 'verde');
        } else if(calculoImc >= 25 && calculoImc <= 29.9) {
            mostrarResultado(`Seu IMC é ${calculoImc} - Sobrepeso`, 'verde');
        } else if(calculoImc >= 30 && calculoImc <= 34.9) {
            mostrarResultado(`Seu IMC é ${calculoImc} - Obesidade grau 1`, 'amarelo');
        } else if(calculoImc >= 35 && calculoImc <= 39.9) {
            mostrarResultado(`Seu IMC é ${calculoImc} - Obesidade grau 2`, 'laranja');
        } else if (calculoImc > 40) {
            mostrarResultado(`Seu IMC é ${calculoImc} - Obesidade grau 3`, 'vermelho');
        } else {
            mostrarResultado('Erro, valor não esperado', 'vermelho');
        }
    }

    function mostrarResultado (resultadoDoImc, classeAlerta) {
        const containerResultado = document.getElementById('resultado');

        containerResultado.innerHTML = `
        <div class="${classeAlerta}">${resultadoDoImc}</div>
        `;
    }
}) ();
