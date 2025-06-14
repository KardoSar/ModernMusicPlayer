import React, { useState, useEffect } from 'react';
import CoverArts from './CoverArts.js';
import './SongView.css';

const Songs = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch('songs')
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setSongs(data)
            })
            .catch(err => {
                console.error("Failed to fetch songs.", err);
            })
    }, []);

    return (
        <main>
            <div className = "tableContainer">
            {
                (songs.length > 0) ? songs.map((song) => <h3 key={song.id}>{song.title}</h3>) : <div>Loading...</div>
                }
            </div>
        </main>
    )
}

export default Songs;