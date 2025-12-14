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

const IceCreamFlow: React.FC = () => {
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
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '40px 20px',
            fontFamily: 'Arial, sans-serif',
        }}>
            <div style={{
                maxWidth: '500px',
                margin: '0 auto',
                textAlign: 'center',
            }}>
                <h1 style={{ color: 'white', marginBottom: '30px' }}>Pick Your Flavor</h1>
                
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    padding: '40px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                }}>
                    <div style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        backgroundColor: selectedColor,
                        margin: '0 auto 30px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease',
                    }} />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        {iceCreamColors.map((flavor) => (
                            <button
                                key={flavor.name}
                                onClick={() => setSelectedColor(flavor.color)}
                                style={{
                                    backgroundColor: flavor.color,
                                    border: selectedColor === flavor.color ? '4px solid #333' : '2px solid #ddd',
                                    borderRadius: '12px',
                                    padding: '15px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    transition: 'all 0.3s ease',
                                    transform: selectedColor === flavor.color ? 'scale(1.05)' : 'scale(1)',
                                }}
                            >
                                {flavor.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IceCreamFlow;

<div style={{ color: 'red', padding: '20px' }}>
    <h1>Red Color</h1>
<div style={{ 
    backgroundColor: 'red', 
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '80px'
}}>
    🍦
</div>
);
};

export default IceCreamFlow;