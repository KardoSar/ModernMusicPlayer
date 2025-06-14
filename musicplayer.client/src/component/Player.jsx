import { useEffect, useState } from "react";
import useSound from "use-sound";
import menutheme from "../assets/menutheme.mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import '../styles.css';
//import { playAudio, pauseAudio, stopAudio, getCurrTime, getDuration } from './Audio';



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

    const [seconds, setSeconds] = useState();

    const [play, { pause, duration, sound }] = useSound(menutheme);

    useEffect(() => {
        //const duration = getDuration();
        if (duration) {
            const second = duration / 1000;
            const minute = Math.floor(second / 60);
            const remainingSeconds = Math.floor(second % 60);
            setTime({
                minute: minute,
                second: remainingSeconds
            });
        }
    }, [duration, isPlaying]);
        

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([]));
                const minute = Math.floor(sound.seek([]) / 60);
                const second = Math.floor(sound.seek([]) % 60);
                setCurrentTime({
                    minute,
                    second,
                });
            }
        }, 1000);
        return () => clearInterval(interval);
        }, [sound]);

        const playingButton = () => {
            if (isPlaying) {
                pause();
                setIsPlaying(false);
            }
            else {
                play();
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
                        max={duration / 1000}
                        default="0"
                        value={seconds}
                        className="timeline"
                        onChange={(e) => {
                            sound.seek([e.target.value]);
                        }}
                    />
                </div>
                <div>
                    <button className="playButton">
                        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                            <BiSkipPrevious />
                        </IconContext.Provider>
                    </button>
                    {!isPlaying ? (
                        <button className="playButton" onClick={playingButton}>
                            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                <IoPlayCircleOutline />
                            </IconContext.Provider>
                        </button>
                    ) : (
                        <button className="playButton" onClick={playingButton}>
                            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                <IoPauseCircleOutline />
                            </IconContext.Provider>
                        </button>
                    )}
                    <button className="playButton">
                        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                            <BiSkipNext />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
        );

}




