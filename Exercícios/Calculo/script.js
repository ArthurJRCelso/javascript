let firstNumber = Number(prompt('Digite um número:'))
let secondNumber = Number(prompt('Digite outro número:'))

let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let multi = firstNumber * secondNumber
let div = (firstNumber / secondNumber).toFixed(2)
let rest = firstNumber % secondNumber

alert(`A soma dos dois número é ${sum}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${multi}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${rest}`)

if (rest == 0) {
    alert('A soma dos dois números é par!')
} else {
    alert('A soma dos números é ímpar!')
}

if (firstNumber == secondNumber) {
    alert('Os dois números inseridos são iguais!')
} else {
    alert('Os números inseridos são diferentes!')
}