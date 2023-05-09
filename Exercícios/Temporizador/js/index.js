import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {  
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    buttonStop,
    minutesDisplay,
    secondsDisplay } from "./elements.js"

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sound()

buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.buttonPressAudio()
}) 

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.buttonPressAudio()
})

buttonStop.addEventListener('click', function() {
    timer.reset()
    controls.reset()
    sound.buttonPressAudio()
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
    }
)