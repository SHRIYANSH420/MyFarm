import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center justify-center bg-pink-100 p-8">
      <div className="w-1/2 text-center">
        <h1 className="text-4xl text-green-700 mb-4">
          From our farms to your kitchen.
        </h1>
        <p className="mb-4">
          Support local farmers and get fresh produce delivered to your
          doorstep.
        </p>
        <button className="bg-green-700 text-white px-4 py-2 rounded">
          SHOP NOW
        </button>
      </div>
      <div className="w-1/2">
        <img
          src="/src/assets/Farmer Produce.jpg"
          alt="Farmer with produce"
          className="rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
