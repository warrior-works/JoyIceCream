type IceCreamColor = 'vanilla' | 'chocolate' | 'strawberry' | 'mint' | 'bubblegum' | 'pistachio' | 'cookie-dough' | 'salted-caramel';

const colorOptions: IceCreamColorOption[] = [
    { name: 'vanilla', hexColor: '#F3E5AB', description: 'Classic Vanilla', price: 4.99 },
    { name: 'chocolate', hexColor: '#8B6F47', description: 'Rich Chocolate', price: 5.49 },
    { name: 'strawberry', hexColor: '#E85D75', description: 'Sweet Strawberry', price: 5.49 },
    { name: 'mint', hexColor: '#98FF98', description: 'Cool Mint', price: 5.99 },
    { name: 'bubblegum', hexColor: '#FF69B4', description: 'Fun Bubblegum', price: 6.49 },
    { name: 'pistachio', hexColor: '#93C572', description: 'Creamy Pistachio', price: 6.99 },
    { name: 'cookie-dough', hexColor: '#D4A574', description: 'Cookie Dough', price: 6.49 },
    { name: 'salted-caramel', hexColor: '#C9A961', description: 'Salted Caramel', price: 6.99 },
];
// Get price range
const getPriceRange = () => {
    const prices = colorOptions.map(option => option.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
};

// Filter by price
const filterByPrice = (maxPrice: number) => {
    return colorOptions.filter(option => option.price <= maxPrice);
};

// Search by name or description
const searchFlavors = (query: string) => {
    const lowerQuery = query.toLowerCase();
    return colorOptions.filter(option =>
        option.name.includes(lowerQuery) || option.description.toLowerCase().includes(lowerQuery)
    );
};

// Get flavor by name
const getFlavor = (name: IceCreamColor) => {
    return colorOptions.find(option => option.name === name);
};

// Sort by price
const sortByPrice = (ascending: boolean = true) => {
    return [...colorOptions].sort((a, b) =>
        ascending ? a.price - b.price : b.price - a.price
    );
};