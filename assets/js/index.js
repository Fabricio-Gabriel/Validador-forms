
class ValidaForm {
    constructor() {
        this.formulario = document.querySelector('.forms');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const campoValido = this.isValid();
        const senhasValidas = this.validaSenha();
    }

    validaSenha() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repeteSenha = this.formulario.querySelector('.rep-senha')

        if (senha.value !== repeteSenha.value) {
            this.criaErro(senha, "Campos senha e repetir senha precisam ser iguais")
            this.criaErro(repeteSenha, "Campos senha e repetir senha precisam ser iguais")
            valid = false
        }

        if (senha.length < 6 || senha.length > 12) {
            this.criaErro(senha, "Senha precisa ter entre 6 e/ou 12 caracteres.")
            valid = false;
        }

        return valid;
    }

    isValid() {
        let valid = true;
        const campos = document.querySelectorAll('.valid');
        const erro = document.querySelectorAll('.erro-text');
        erro.forEach(e => {
            e.remove();
        });
        
        campos.forEach(campo => {
            let label = campo.previousElementSibling.innerText;
            label = label.replace(":", '');
            if(!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        });

        return valid;
    }

    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value);
        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        return true
    }

    validaUsuario(campo) {
        let valid = true;

        if(campo.value.length < 3 || campo.value.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!campo.value.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, "Usuário deve conter apenas letras e/ou números.");
            valid = false;
        }

        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('erro-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaForm();