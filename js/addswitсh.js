import sound from './timer.js'

export function addSwitch() {
    const buttonTimer = document.querySelector('#button__timer');
    const buttonCalc = document.querySelector('#button__calc');
    const showTimer = document.querySelector('#timer');
    const showCalc = document.querySelector('#datecalc');

    buttonTimer.addEventListener('click', () => {
        showTimer.style.display = 'block';
        showCalc.style.display = 'none';
    });

    buttonCalc.addEventListener('click', () => {
        showCalc.style.display = 'block';
        showTimer.style.display = 'none';
        sound.stop()
    });
}

addSwitch();