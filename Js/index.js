
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
            }
        });
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('erro-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaForm();