// Variáveis
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyEnter)

// Funções
function handleTryClick(event) {
    event.preventDefault()
    const inputNumber = document.querySelector('#inputNumber')

    if (inputNumber.value < 0 || inputNumber.value > 10 || inputNumber.value == '') {
        return alert('Valor inválido!')
    }

    if (Number(inputNumber.value) == randomNumber) {
        toogleScreen()
        screen2.querySelector('h2').innerHTML = `Acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""
    xAttempts++
    
}

function handleResetClick() {
    toogleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toogleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function keyEnter(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}

