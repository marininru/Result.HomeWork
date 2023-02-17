export interface IWeatherElement {
    sound: string,
    back: string,
    icon: string,
    audio?: HTMLAudioElement,
    button?: HTMLButtonElement,
    butImage?: HTMLImageElement
}

export const data: IWeatherElement[] = [
    {
        sound: 'summer.mp3',
        back: 'summer-bg.jpg',
        icon: 'sun.svg'
    },
    {
        sound: 'rain.mp3',
        back: 'rainy-bg.jpg',
        icon: 'cloud-rain.svg'
    },
    {
        sound: 'winter.mp3',
        back: 'winter-bg.jpg',
        icon: 'cloud-snow.svg'
    }
];
