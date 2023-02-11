import './index.css';
import { data } from './data.js';

const pauseIcon = 'pause.svg';

let curAudio;
let isPaused = false;
let volume = 0.5;

function playSound(newAudio) {
    if (curAudio !== newAudio) {
        curAudio?.pause();
        newAudio.volume = volume;
        newAudio.play();
        curAudio = newAudio;
        isPaused = false;
    } else {
        isPaused ? curAudio?.play() : curAudio.pause();
        isPaused = !isPaused;
    }
}

function changeBackground(backImage) {
    const back = document.querySelector('#back');
    back.style.background = `url('./assets/${backImage}')`;
}

function changeIcons(selectedEl) {
    data.forEach(
        el =>
            (el.butImage.src =
                el === selectedEl && isPaused
                    ? `assets/icons/${pauseIcon}`
                    : `assets/icons/${el.icon}`)
    );
}

function changeVolume(newVolume) {
    volume = newVolume;
    if (curAudio) {
        curAudio.pause();
        curAudio.volume = volume;
        !isPaused && curAudio.play();
    }
}

function init() {
    const buttons = document.querySelectorAll('#weather-buttons button');
    data.forEach((el, i) => {
        el.audio = new Audio(`assets/sounds/${el.sound}`);
        el.button = buttons[i];
        el.button.style.backgroundImage = `url('assets/${el.back}')`;
        el.butImage = el.button.querySelector('img');
        el.button.addEventListener('click', () => {
            playSound(el.audio);
            changeBackground(el.back);
            changeIcons(el);
        });
    });

    const ctrlVolume = document.getElementById('volume');
    ctrlVolume.value = volume * 100;
    ctrlVolume.addEventListener('change', event => changeVolume(event.target.value / 100));
}

init();
