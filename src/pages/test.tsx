import React, { useState } from 'react';

type IceCreamColor = 'vanilla' | 'chocolate' | 'strawberry' | 'mint' | 'bubblegum';

interface IceCreamColorOption {
    name: IceCreamColor;
    hexColor: string;
    description: string;
    price: number;
}

const IceCreamColorTest: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<IceCreamColor>('vanilla');
    const [quantity, setQuantity] = useState(1);
    const [favorites, setFavorites] = useState<IceCreamColor[]>([]);

    const colorOptions: IceCreamColorOption[] = [
        { name: 'vanilla', hexColor: '#F3E5AB', description: 'Classic Vanilla', price: 4.99 },
        { name: 'chocolate', hexColor: '#8B6F47', description: 'Rich Chocolate', price: 5.49 },
        { name: 'strawberry', hexColor: '#E85D75', description: 'Sweet Strawberry', price: 5.49 },
        { name: 'mint', hexColor: '#98FF98', description: 'Cool Mint', price: 5.99 },
        { name: 'bubblegum', hexColor: '#FF69B4', description: 'Fun Bubblegum', price: 6.49 },
    ];

    const currentColor = colorOptions.find((opt) => opt.name === selectedColor);
    const isFavorite = favorites.includes(selectedColor);

    const toggleFavorite = () => {
        setFavorites(prev =>
            isFavorite ? prev.filter(f => f !== selectedColor) : [...prev, selectedColor]
        );
    };

    const totalPrice = currentColor ? (currentColor.price * quantity).toFixed(2) : '0.00';

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Ice Cream Color Feature Test</h1>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Select an Ice Cream Flavor</h2>

                <div className="flex gap-4 mb-6">
                    {colorOptions.map((option) => (
                        <button
                            key={option.name}
                            onClick={() => setSelectedColor(option.name)}
                            className={`px-4 py-2 rounded-lg font-medium transition ${
                                selectedColor === option.name
                                    ? 'ring-2 ring-offset-2 ring-blue-500'
                                    : 'hover:opacity-80'
                            }`}
                            style={{
                                backgroundColor: option.hexColor,
                                color: ['vanilla', 'mint'].includes(option.name) ? '#000' : '#fff',
                            }}
                        >
                            {option.description}
                        </button>
                    ))}
                </div>

                {currentColor && (
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <p className="text-sm text-gray-600">Selected Flavor:</p>
                        <p className="text-lg font-semibold mb-2">{currentColor.description}</p>
                        <div
                            className="w-32 h-32 rounded-full shadow-lg"
                            style={{ backgroundColor: currentColor.hexColor }}
                        />
                        <p className="mt-2 text-sm text-gray-500">Color Code: {currentColor.hexColor}</p>

                        {/* New Features */}
                        <div className="mt-6 space-y-4">
                            <div>
                                <label className="text-sm font-medium">Quantity:</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                    className="ml-2 w-16 px-2 py-1 border rounded"
                                />
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="text-lg font-bold">Price: ${totalPrice}</p>
                                <button
                                    onClick={toggleFavorite}
                                    className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                                >
                                    {isFavorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
                                </button>
                            </div>
                        </div>

                        {favorites.length > 0 && (
                            <div className="mt-6 p-3 bg-pink-100 rounded-lg">
                                <p className="text-sm font-semibold">Your Favorites: {favorites.join(', ')}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default IceCreamColorTest;