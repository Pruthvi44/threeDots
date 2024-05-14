import React, { useState, useEffect } from 'react';
import './Achievment.css';

const Auto = ({ texts, interval = 2000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [texts, interval]);

    return (
        <div className="auto-text-box-slider">
            <p>{texts[currentIndex]}</p>
        </div>
    );
};

// Usage
const Achievment = () => {
    const texts = [
       <p>We Know, We Serve <br></br>
        We beleiev advertising must build reputation</p>,
        <p>360 Advertising solution<br></br>
        one stop destination for all advertising solutions</p>,
        <p>Grow bigger and emerge stronger<br></br>
       seeking continous growth for our clients</p>,
    ];

    return (
        <div className="achiv-main">
            <Auto texts={texts} interval={3000} />
        </div>
    );
};

export default Achievment;