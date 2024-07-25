import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { name: 'Vegetables', image: '/src/assets/friut1.jpg' },
  { name: 'Fruits', image: '/src/assets/friut2.jpg' },
  { name: 'Citrus', image: '/src/assets/friut3.jpg' },
  { name: 'Berries', image: '/src/assets/friut4.jpg' },
  { name: 'Melons', image: '/src/assets/friut5.jpg' },
  { name: 'Leafy Greens', image: '/src/assets/friut6.jpg' },
  { name: 'Root Vegetables', image: '/src/assets/friut1.jpg' },
  { name: 'Tropical Fruits', image: '/src/assets/friut2.jpg' },
  { name: 'Stone Fruits', image: '/src/assets/friut3.jpg' },
  { name: 'Squash', image: '/src/assets/friut4.jpg' },
  { name: 'Herbs', image: '/src/assets/friut5.jpg' },
  { name: 'Peppers', image: '/src/assets/friut6.jpg' },
];

const ProductGrid = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 3 < products.length ? prevIndex + 3 : 0));
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 3 >= 0 ? prevIndex - 3 : Math.floor(products.length / 3) * 3));
  };

  const visibleProducts = products.slice(startIndex, startIndex + 3);

  return (
    <section className="p-8 relative">
      <h2 className="text-2xl mb-4">WHAT'S NEW?</h2>
      <div className="grid grid-cols-3 gap-4">
        {visibleProducts.map((product, index) => (
          <div key={index} className="text-center border-black w-full">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default ProductGrid;
