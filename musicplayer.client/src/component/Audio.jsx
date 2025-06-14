import { Howl } from 'howler';

let audio;

export const getAudio = () => {
    if (!audio) {
        audio = new Howl({
            src: ['./assets/menutheme.mp3'],
            html5: true,
        });
    }
    return audio;
};

export const playAudio = () => getAudio.play();
export const pauseAudio = () => getAudio.pause();
export const stopAudio = () => getAudio.stop();
export const getDuraton = () => getAudio.duration();
export const getCurrTime = () => getAudio.seek();