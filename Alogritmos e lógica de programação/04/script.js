/*
    Solicitar o nome do aluno e as três notas
    do bimestre e calcular a média daquele aluno.

    Se o aluno passou no bimestre, dar os parabéns.

    Se o aluno não passou no bimestre,
    motivar o aluno a dar seu melhor na prova
    de recuperação.

    Em ambos os casos, mostre uma mensagem com o 
    nome do aluno e a nota
*/

let name = prompt('Qual o seu nome?')
let numberOne = Number(prompt('Primeira nota:'))
let numberSecond = Number(prompt('Segunda nota:'))
let numberThree = Number(prompt('Terceira nota:'))

let result

function media() {
    result = (numberOne + numberSecond + numberThree) / 3
    return result.toFixed(2)
}

if(media() >= 15) {
    alert(`Parabéns ${name}! Você foi aprovado! Sua média é ${result}`)
} else if(media() >= 10) {
    alert(`Recuperação! ${name}, sua média é ${result}`)
} else {
    alert(`Reprovado! ${name}, sua média é ${result}`)
}

