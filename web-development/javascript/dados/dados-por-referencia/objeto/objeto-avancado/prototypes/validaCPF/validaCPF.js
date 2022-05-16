function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    const cpfLimpo = this.cpfLimpo;
    const cpfCalculado = this.calcularCPF(cpfLimpo);
    if(typeof cpfLimpo === 'undefined') return false;
    if(cpfLimpo.length !== 11) return false;
    if(cpfLimpo !== cpfCalculado) return false;
    console.log(cpfCalculado)
    return true;
}

ValidaCPF.prototype.calcularCPF = function() {
    const cpfNove = this.cpfLimpo.slice(0, -2);
    const cpfArrayNove = Array.from(cpfNove);
    const primeiroDigito = calcularDigito(cpfArrayNove);

    const cpfArrayDez = [...cpfArrayNove];
    cpfArrayDez.push(primeiroDigito);

    const segundoDigito = calcularDigito(cpfArrayDez);

    const cpfArrayCompleto =  cpfArrayDez.concat(segundoDigito);
    const cpfCompleto = cpfArrayCompleto.join('');

    
    return cpfCompleto;
}

function calcularDigito(cpf){
    let multiplicador = cpf.length + 1;
    let resultado = 0;
    for(const numero of cpf) {
        resultadoSoma = numero * multiplicador
        multiplicador -= 1;
        resultado += resultadoSoma;
    }
    const digito = ( 11 - (resultado % 11));
    if(digito > 9) return 0;
    return digito;
}


const cpf1 = new ValidaCPF('705.484.450-52');
const cpf2 = new ValidaCPF('070.987.720-03');


console.log(cpf1.valida());
console.log(cpf2.valida());