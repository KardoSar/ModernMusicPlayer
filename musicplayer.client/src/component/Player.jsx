import { useEffect, useState } from "react";
//import useSound from "use-sound";
//import menutheme from "../assets/menutheme.mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import '../styles.css';

import { playAudio, pauseAudio, seekAudio, stopAudio, getCurrTime, getDuration, getAudio } from './Audio';



export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false);

    const [time, setTime] = useState({
        minute: "",
        second: "",
    });

    const [currentTime, setCurrentTime] = useState({
        minute: "",
        second: "",
    });

    const [seconds, setSeconds] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);


    // controls the slider
    useEffect(() => {
        const audio = getAudio();

        const updateSlider = () => {
            const audioDuration = getDuration();
            setTotalSeconds(audioDuration);
            const min = Math.floor(audioDuration / 60);
            // formats seconds to always show two digits
            const sec = Math.floor(audioDuration % 60).toString().padStart(2, '0');
            setTime({
                minute: min,
                second: sec
            });

        };

        if (audio.state() === 'loaded') {
            updateSlider();
        }
        else {
            audio.once('load', updateSlider);
        }

    }, []);
        

    useEffect(() => {
        const interval = setInterval(() => {
            const currTime = getCurrTime();
            const minute = Math.floor(currTime / 60);
            const second = Math.floor(currTime % 60).toString().padStart(2, '0');
            setCurrentTime({
                minute,
                second
            });
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log("Player mounted");
        return () => console.log("Player unmounted");
    }, []);

    useEffect(() => {
        return () => {
            stopAudio();
            setIsPlaying(false);
        };
    }, []);


    const playingButton = () => {
        if (isPlaying) {
            //pause();
            pauseAudio();
            setIsPlaying(false);
        }
        else {
            playAudio();
            setIsPlaying(true);
        }
    };

    return (
        <div className="component">
            <h2>Now Playing: </h2>
            <img
                className="musicCover"
                src="https://picsum.photos/200/200"
            />
            <div>
                <h3 className="title">Menu Theme</h3>
                <p className="subTitle">Myself</p>
            </div>
            <div>
                <div className="time">
                    <p>
                        {currentTime.minute}:{currentTime.second}
                    </p>
                    <p>
                        {time.minute}:{time.second}
                    </p>
                </div>
                <input
                    type="range"
                    min="0"
                    max={totalSeconds ? totalSeconds : 0}
                    value={seconds || 0}
                    //default="0"
                    step={0.1}
                    value={seconds}
                    className="timeline"
                    onChange={(e) => {
                        const newTime = parseFloat(e.target.value);
                        setSeconds(newTime);
                    }}
                    onMouseUp={(e) => {
                        const newTime = parseFloat(e.target.value);
                        seekAudio(newTime);
                    }}
                />
            </div>
            <div>
                <button className="playButton">
                    <IconContext.Provider value={{ size: "3em", color: "#5D3FD3" }}>
                        <BiSkipPrevious />
                    </IconContext.Provider>
                </button>
                {!isPlaying ? (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "3em", color: "#5D3FD3" }}>
                            <IoPlayCircleOutline />
                        </IconContext.Provider>
                    </button>
                ) : (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "3em", color: "#5D3FD3" }}>
                            <IoPauseCircleOutline />
                        </IconContext.Provider>
                    </button>
                )}
                <button className="playButton">
                    <IconContext.Provider value={{ size: "3em", color: "#5D3FD3" }}>
                        <BiSkipNext />
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    );

}




