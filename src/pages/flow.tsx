import React, { useState } from 'react';

const IceCreamColor: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<string>('#FF69B4');

    const iceCreamColors = [
        { name: 'Strawberry', color: '#FF69B4' },
        { name: 'Vanilla', color: '#F3E5AB' },
        { name: 'Chocolate', color: '#8B4513' },
        { name: 'Mint', color: '#98FF98' },
        { name: 'Pistachio', color: '#93C572' },
        { name: 'Cookie Dough', color: '#D2B48C' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>Ice Cream Color Selector</h1>
            
            <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                backgroundColor: selectedColor,
                margin: '20px 0',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }} />

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {iceCreamColors.map((flavor) => (
                    <button
                        key={flavor.name}
                        onClick={() => setSelectedColor(flavor.color)}
                        style={{
                            backgroundColor: flavor.color,
                            border: selectedColor === flavor.color ? '3px solid black' : 'none',
                            borderRadius: '8px',
                            padding: '10px 15px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        {flavor.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default IceCreamColor;