import serene from '../assets/coverArt/serene.jpg';
import { Vibrant } from "node-vibrant/browser";
import '../styles.css';
import React, { useEffect } from 'react';

const GradientBG = ({ children }) => {
    useEffect(() => {
        Vibrant.from(serene)
            .getPalette()
            .then((palette) => {
                const [r, g, b] = palette.Vibrant.rgb;
                const strongColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
                const faintColor = `rgba(${r}, ${g}, ${b}, 0.4)`;

                document.documentElement.style.setProperty('--gradient-color-start', strongColor);
                document.documentElement.style.setProperty('--gradient-color-end', faintColor);
            });

    }, []);

    return <div className="gradient-background">{children}</div>;
};

export default GradientBG;