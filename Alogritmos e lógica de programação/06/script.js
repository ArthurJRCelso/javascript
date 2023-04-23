/*
    ** Jogo da advinhação **

    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando entre 0 e 10"

    Crie uma lógica para gerar um número aleatório
    e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

    Enquanto o usuário não advinhar o número, mostrar a mensagem:
    "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você advinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas
*/

let result = Number(prompt("Advinhe o número que estou pensando entre 0 e 10"))
let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1

while(result != randomNumber) {
    result = prompt("Erro, tente novamente:")
    xAttemps++
}

if(xAttemps == 1) {
    alert(`Parabéns! Você advinhou o número em ${xAttemps} tentativa`)
} else {
    alert(`Parabéns! Você advinhou o número em ${xAttemps} tentativas`)
}