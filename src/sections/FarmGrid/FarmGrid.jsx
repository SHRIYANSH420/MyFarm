import React from 'react';

const farmData = [
  { name: 'Farm 1', image: '/src/assets/farm1.jpg' },
  { name: 'Farm 2', image: '/src/assets/Farm2.jpg' },
  { name: 'Farm 3', image: '/src/assets/Farm3.jpg' },
  { name: 'Farm 4', image: '/src/assets/farm4.jpg' }
];

const FarmGrid = () => {
  return (
    <section className="bg-green-700 text-white p-8">
      <h2 className="text-2xl mb-4">Our Local Farms</h2>
      <div className="grid grid-cols-2 gap-4">
        {farmData.map((farm, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img 
              src={farm.image} 
              alt={farm.name} 
              className="rounded-full w-24 h-24 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">{farm.name}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FarmGrid;