import React from 'react';
import bg from '../assets/bg-img-01.webp';
import { FaCheck } from 'react-icons/fa';

const Story = () => {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-center min-h-screen bg-cover bg-center px-4 sm:px-8 lg:px-16 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full lg:w-1/2 h-full hidden lg:flex items-center justify-center">
      </div>


      <div className="bg-black bg-opacity-90 text-white max-w-2xl w-full px-6 py-8 rounded-3xl lg:ml-auto">
        <p className="text-[#f7931e] font-semibold mb-2">/WHO WE ARE/</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          The <span className="text-[#f7931e]">story</span> behind <br className="hidden sm:block" />
          service workshop
        </h2>

        <p className="text-sm sm:text-base mb-6">
          We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing. We know that if you love our service you’re going to recommend.
        </p>

        <hr className="border-gray-600 mb-4" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Tyre & Wheel Upgrade',
            'Increases resale value',
            'Detailed vehicle reports',
            'Precise wheel balancing',
            'Regular tire inspections',
            'High-quality tire products',
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-lg font-semibold">
              <span className="bg-yellow-400 text-black rounded-full p-2">
                <FaCheck className="text-sm" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Story;
