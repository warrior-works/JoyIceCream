export default function IceCreamText() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1 style={{ 
                background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '48px', 
                fontWeight: 'bold' 
            }}>
                🍦 Ice Cream 🍦
            </h1>
            <p style={{ 
                background: 'linear-gradient(90deg, #ff69b4, #00bfff, #32cd32, #ffd700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '24px' 
            }}>
                Enjoy delicious ice cream!
            </p>
        </div>
    );
}