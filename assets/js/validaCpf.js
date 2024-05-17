// 705.484.450-52  070.987.720-03
class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            enumerable: true,
            writable: false,
            configurable: false
        });
    }

    isSequence() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNum of cpfSemDigitos) {
            total += reverso * Number(stringNum);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    geraNovoCpf() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigito);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1);

        return cpfSemDigito + digito1 + digito2;
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequence()) return false;
        
        

        return this.geraNovoCpf() === this.cpfLimpo;
    }

}

// let validaCpf = new ValidaCpf('070.987.720-03');
// //validaCpf = new ValidaCpf('999.999.999-99');
// if(validaCpf.valida()) {
//     console.log(`cpf válido`);
// } else {
//     console.log(`cpf inválido`);
// }