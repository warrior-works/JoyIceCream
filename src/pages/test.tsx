import React, { useState } from 'react';

type IceCreamColor = 'vanilla' | 'chocolate' | 'strawberry' | 'mint' | 'bubblegum';

interface IceCreamColorOption {
    name: IceCreamColor;
    hexColor: string;
    description: string;
}

const IceCreamColorTest: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<IceCreamColor>('vanilla');

    const colorOptions: IceCreamColorOption[] = [
        { name: 'vanilla', hexColor: '#F3E5AB', description: 'Classic Vanilla' },
        { name: 'chocolate', hexColor: '#8B6F47', description: 'Rich Chocolate' },
        { name: 'strawberry', hexColor: '#E85D75', description: 'Sweet Strawberry' },
        { name: 'mint', hexColor: '#98FF98', description: 'Cool Mint' },
        { name: 'bubblegum', hexColor: '#FF69B4', description: 'Fun Bubblegum' },
    ];

    const currentColor = colorOptions.find((opt) => opt.name === selectedColor);

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
                    </div>
                )}
            </div>
        </div>
    );
};

export default IceCreamColorTest;