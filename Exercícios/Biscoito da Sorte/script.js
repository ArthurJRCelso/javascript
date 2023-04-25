const cookie1 = document.querySelector('.cookie1')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const button = document.querySelector('button')
let phrase = document.querySelector('span p')
let randomNumber = Math.round(Math.random() * 10)


cookie1.addEventListener('click', cookieOpen)
button.addEventListener('click', screenChange)

function screenChange() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function cookieOpen() {

    randomNumber = Math.round(Math.random() * 10)

    screenChange()

    if (randomNumber == 1) {
        phrase.innerHTML = 'aaaaaaaaa'
    } else if (randomNumber == 2) {
        phrase.innerHTML = 'bbbbbbbbb'
    } else if (randomNumber == 3) {
        phrase.innerHTML = 'ccccccccc'
    } else if (randomNumber == 4) {
        phrase.innerHTML = 'ddddddd'
    } else if (randomNumber == 5) {
        phrase.innerHTML = 'eeeeeee'
    } else if (randomNumber == 6) {
        phrase.innerHTML = 'fffffff'
    } else if (randomNumber == 7) {
        phrase.innerHTML = 'ggggggg'
    } else if (randomNumber == 8) {
        phrase.innerHTML = 'hhhhhhh'
    } else if (randomNumber == 9) {
        phrase.innerHTML = 'iiiiiii'
    } else {
        phrase.innerHTML = 'jjjjjjj'
    }
}
