const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const AlertError = {
    element: document.querySelector('.alert-error'),
    open() {
        AlertError.element.classList.add('open')
    },
    close() {
        AlertError.element.classList.remove('open')
    }
}

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    },
}

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
    event.preventDefault()

    let weight = inputWeight.value
    let height = inputHeight.value

    const valueNaN = notANumber(weight) || notANumber(height)
    
    if (valueNaN) {
        AlertError.open()
        return;
    }

    const result = calculateIMC(weight, height)

    let message = `Seu IMC é de ${result}`
    Modal.message.innerHTML = message

    Modal.open()
}

Modal.buttonClose.onclick = function() {
    Modal.close()
}

function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function notANumber(value) {
    return isNaN(value) || value == ''
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
    if (event.key == 'Escape') {
        Modal.close()
    }
}


