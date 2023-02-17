import './index.css';
import { data, IWeatherElement } from './data';

const pauseIcon = 'pause.svg';

let curAudio: HTMLAudioElement = null;
let isPaused = false;
let volume = 0.5;

function playSound(newAudio: HTMLAudioElement) {
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

function changeBackground(backImage: string) {
    const back: HTMLElement = document.querySelector('#back');
    back.style.background = `url('./assets/${backImage}')`;
}

function changeIcons(selectedEl: IWeatherElement) {
    data.forEach(
        el =>
        (el.butImage.src =
            el === selectedEl && isPaused
                ? `assets/icons/${pauseIcon}`
                : `assets/icons/${el.icon}`)
    );
}

function changeVolume(newVolume: number) {
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
        el.button = buttons[i] as HTMLButtonElement;
        el.button.style.backgroundImage = `url('assets/${el.back}')`;
        el.butImage = el.button.querySelector('img');
        el.button.addEventListener('click', () => {
            playSound(el.audio);
            changeBackground(el.back);
            changeIcons(el);
        });
    });

    const ctrlVolume = document.getElementById('volume') as HTMLInputElement;
    ctrlVolume.value = (volume * 100).toString();
    ctrlVolume.addEventListener('change', (event: Event) => changeVolume(+(event.target as HTMLInputElement).value / 100));
}

init();
