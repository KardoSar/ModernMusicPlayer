import { Howl } from 'howler';
import menutheme from '../assets/menutheme.mp3';

let audio;

export const getAudio = () => {
    if (!audio) {
        audio = new Howl({
            src: [menutheme],
            html5: true,
            onload: () => {
                console.log("Audio loaded successfully");
            },
            onloaderror: (id, error) => {
                console.error("Error loading audio:", error);
            },
        });
    }
    return audio;
};

export const playAudio = () => getAudio().play();
export const pauseAudio = () => getAudio().pause();
export const stopAudio = () => getAudio().stop();

export const getDuration = () => {
    const au = getAudio();
    return au.duration();
}

export const getCurrTime = () => getAudio().seek();
export const seekAudio = (seconds) => getAudio().seek(seconds);