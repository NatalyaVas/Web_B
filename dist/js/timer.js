import {Howl} from 'howler'

export var sound = new Howl ({
    src: ['./sound.mp3']
})

const getInput = document.getElementById('input')
const blockTime = document.querySelector('.time')
let interval


blockTime.innerHTML = 0
getInput.value = 0

document.querySelector('#start').addEventListener('click', ()=> {
    blockTime.innerHTML = getInput.value
        clearInterval(interval)
        interval = setInterval(()=>{
            getInput.value--
            blockTime.innerHTML --
            if (blockTime.innerHTML == 0){
                clearInterval(interval)
                sound.play()
            }
        },1000) 
})

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(interval)
    sound.stop()
})
