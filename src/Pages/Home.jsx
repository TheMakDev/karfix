import React from 'react';
import Hero from '../Component/Hero';
import lady from '../assets/lady.webp';
import tireman from '../assets/tireman.webp';

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="bg-gray-100 py-10 px-4">
  <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-[1fr_auto_1fr] items-stretch">


    <div
      className="relative bg-cover bg-center rounded-3xl overflow-hidden shadow-md h-[300px] flex items-end p-6"
      style={{ backgroundImage: `url(${lady})` }}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative z-10">
        <p className="text-white font-semibold mb-35">/ FREE SERVICES /</p>
        <h2 className="text-2xl font-bold mb-4 text-white">Free Evaluation Of Your Car Service</h2>
      </div>
      <div className='bg-white rounded-full p-8 absolute bottom-0 right-8'>
        <button className="absolute bottom-2 right-2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
        ↗
      </button>
      </div>
      
    </div>


    <div className="flex justify-center items-center">
      <div className="bg-blue-600 text-white rounded-3xl overflow-hidden shadow-md px-4 py-6 w-full md:w-[200px] flex flex-col justify-center items-center h-[300px]">
        <h2 className="text-5xl font-extrabold mb-2">
          520<span className="text-white text-4xl">+</span>
        </h2>
        <p className="text-sm text-center">
          Professional and Experienced staff ready to help you
        </p>
      </div>
    </div>


    <div
      className="relative bg-cover bg-center rounded-3xl overflow-hidden shadow-md h-[300px] flex items-end p-6"
      style={{ backgroundImage: `url(${tireman})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-8 text-white">Easy Booking & Fast Communication</h2>
      </div>
      <button className="absolute bottom-4 right-4 bg-blue-600 text-white px-6 py-2 rounded-full text-sm flex items-center gap-1">
        Book Now ↗
      </button>
    </div>

  </div>
</section>

    </div>
  );
};

export default Home;
