import React, { useState } from 'react';

interface HyperFocusTextProps {
    text: string;
    focusColor?: string;
    blurColor?: string;
    focusWordIndex?: number;
}

export const HyperFocusText: React.FC<HyperFocusTextProps> = ({
    text,
    focusColor = '#ff6b6b',
    blurColor = '#cccccc',
    focusWordIndex = 0,
}) => {
    const [focusIndex, setFocusIndex] = useState(focusWordIndex);
    const words = text.split(' ');

    return (
        <div className="hyper-focus-container p-8">
            <div className="text-2xl leading-relaxed">
            {words.map((word, index) => {
                let opacity = 0.3;
                if (index === focusIndex) opacity = 1;
                else if (Math.abs(index - focusIndex) === 1) opacity = 0.6;
                
                return (
                <span
                    key={index}
                    onClick={() => setFocusIndex(index)}
                    onMouseEnter={() => setFocusIndex(index)}
                    style={{
                    color: index === focusIndex ? focusColor : blurColor,
                    opacity: opacity,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontWeight: index === focusIndex ? 'bold' : 'normal',
                    textShadow: index === focusIndex ? `0 0 8px ${focusColor}40` : 'none',
                    transform: index === focusIndex ? 'scale(1.05)' : 'scale(1)',
                    }}
                    className="mr-2 inline-block"
                >
                    {word}
                </span>
                );
            })}
            </div>
        </div>
    );
};

export default HyperFocusText;