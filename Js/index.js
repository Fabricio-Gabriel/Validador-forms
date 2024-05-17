
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
        
    }
}

const valida = new ValidaForm();