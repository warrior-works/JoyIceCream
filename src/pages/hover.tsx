import React, { useState } from 'react';

export default function HoverPage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                🍦
            </div>
        </div>
    );
}