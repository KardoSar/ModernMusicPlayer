import { Howl } from 'howler';
import menutheme from '../assets/menutheme.mp3';

let audio;

export const getAudio = (onLoadCallBack) => {
    if (!audio) {
        audio = new Howl({
            src: [menutheme],
            html5: true,
            onload: () => {
                console.log("Audio loaded successfully");
                if (onLoadCallBack)
                    onLoadCallBack();
            },
            onloaderror: (id, error) => {
                console.error("Error loading audio:", error);
            },
        });
    }
    else {
        if (audio.state() === 'loaded' && onLoadCallBack) {
            onLoadCallBack();
        }
    }
    return audio;
};

export const playAudio = () => getAudio().play();
export const pauseAudio = () => getAudio().pause();
export function stopAudio() {
    const audio = getAudio();
    if (audio) {
        audio.stop();
        audio.seek(0);
    }
}

export const getDuration = () => {
    const au = getAudio();
    return au.duration();
}

export const getCurrTime = () => getAudio().seek();
export const seekAudio = (seconds) => getAudio().seek(seconds);