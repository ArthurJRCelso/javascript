const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTime')
const buttonRemoveTime = document.querySelector('.removeTime')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFireplace = document.querySelector('.fireplace')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let minute = 25


buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    countdown()
})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function() {
    buttonStop.classList.add('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
})

buttonAddTime.addEventListener('click', function() {
    minutes.textContent = ++minute
})

buttonRemoveTime.addEventListener('click', function() {
    minutes.textContent = --minute
})

function updateDisplay(newMinutes, seconds) {
    minutes.textContent = String(newMinutes).padStart(2, '0')
    seconds.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
    timerTimeOut = setTimeout(function() {
        let min = Number(minutes.textContent)
        let sec = Number(seconds.textContent)
        
        updateDisplay(min, 0)

        if (sec <= 0) {
            sec = 60
            --min
        }

        updateDisplay(min, String(sec - 1))

        countdown()
    }, 1000)
}