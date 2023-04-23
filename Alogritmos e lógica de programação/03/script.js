/*
    Capturar dois números e fazer as operações
    matemáticas de soma, subtração, multiplicação,
    divisão e resto da divisão.

    E para cada operação, mostrar um alerta
    com o resultado
*/

let firstNumber = Number(prompt('Digite o primeiro número:'))
let secondNumber = Number(prompt('Digite o segundo número:'))

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert(`Soma: ${sum}`)
alert(`Subtração: ${sub}`)
alert(`Multiplicação: ${mult}`)
alert(`Divisão: ${div}`)
alert(`Resto da divisão: ${rest}`)