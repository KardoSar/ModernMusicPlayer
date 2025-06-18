import { Howl } from 'howler';
import menutheme from '../assets/menutheme.mp3';
//import mysterious from '../assets/Mysterious.mp3';
//import groovyBassLoop from '../assets/GroovyBassLoop.mp3';


let audio;

export const getAudio = (onLoadCallBack) => {
    if (!audio) {
        audio = new Howl({
            src: [menutheme],
            html5: true,
            preload: 'auto',
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



/*const songs = [
    {
        id: 1,
        title: "Menu Theme",
        src: "../assets/menutheme.mp3",
    },
    {
        id: 2,
        title: "Mysterious",
        src: mysterious,
    },
    {
        id: 3,
        title: "Groovy Bass Loop",
        src: groovyBassLoop,
    }
];

const mapAudio = {};

songs.foreach(song => {
    mapAudio[song.id] = new Howl({
        src: [song.src],
        html5: true,
        preload: 'auto',
        onload: () => {
            console.log(`Audio for ${song.title} loaded successfully`);
        },
        onloaderror: (id, error) => {
            console.error(`Error loading audio for ${song.title}:`, error);
        },
    });
});

const playSpecificAudio = (songId) => {
    const audio = mapAudio[songId];
    if (audio) {
        return audio;
    }
}

export const playAudioById = (songId) => {
    playSpecificAudio(songId).play();
}
*/



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