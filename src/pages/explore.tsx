import React, { useState, useEffect } from 'react';

interface IceCream {
    id: number;
    name: string;
    flavor: string;
    description: string;
    image: string;
    rating: number;
}

export default function ExplorePage() {
    const [iceCreamList, setIceCreamList] = useState<IceCream[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedFlavor, setSelectedFlavor] = useState<string>('all');

    useEffect(() => {
        // Fetch ice cream data
        const mockData: IceCream[] = [
            {
                id: 1,
                name: 'Vanilla Dream',
                flavor: 'vanilla',
                description: 'Classic vanilla ice cream',
                image: '/vanilla.jpg',
                rating: 4.5,
            },
            {
                id: 2,
                name: 'Chocolate Bliss',
                flavor: 'chocolate',
                description: 'Rich chocolate ice cream',
                image: '/chocolate.jpg',
                rating: 4.8,
            },
            {
                id: 3,
                name: 'Strawberry Delight',
                flavor: 'strawberry',
                description: 'Fresh strawberry ice cream',
                image: '/strawberry.jpg',
                rating: 4.6,
            },
        ];
        setIceCreamList(mockData);
        setLoading(false);
    }, []);

    const filtered =
        selectedFlavor === 'all'
            ? iceCreamList
            : iceCreamList.filter((item) => item.flavor === selectedFlavor);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">Explore Ice Cream</h1>

            <div className="mb-6">
                <select
                    value={selectedFlavor}
                    onChange={(e) => setSelectedFlavor(e.target.value)}
                    className="px-4 py-2 border rounded-lg"
                >
                    <option value="all">All Flavors</option>
                    <option value="vanilla">Vanilla</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="strawberry">Strawberry</option>
                </select>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filtered.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4 shadow-lg">
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded" />
                            <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
                            <p className="text-gray-600">{item.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-yellow-500">★ {item.rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
<div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">Add Your Review</h2>
    <form
        onSubmit={(e) => {
            e.preventDefault();
            // Handle review submission logic here
        }}
        className="flex flex-col space-y-4"
    >
        <textarea
            placeholder="Write your review..."
            className="border rounded-lg p-2"
            rows={4}
        />
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
            Submit Review
        </button>
    </form>
</div>