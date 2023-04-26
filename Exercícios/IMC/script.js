const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')

const Modal = {
    
}

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    modalMessage.innerHTML = message
    modalWrapper.classList.add('open')
}

modalBtnClose.onclick = function() {
    modalWrapper.classList.remove('open')
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}