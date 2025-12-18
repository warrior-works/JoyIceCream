import React, { useState } from 'react';

export default function HoverPage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    fontSize: isHovered ? '120px' : '80px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'scale(1.5) rotate(5deg)' : 'scale(1) rotate(0deg)',
                }}
            >
                🍦
            </div>
        </div>
    );
}

export const hoverStyles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
};