import React from 'react';
import ServiceHero from '../Component/ServiceHero';
import { services } from '../assets/assests';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <div>
      <ServiceHero />
      <section className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative bg-white rounded-2xl shadow-lg overflow-hidden mb-5"
          >
            <div className="relative w-full h-60">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <button className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full p-2 shadow-md">
                <FaArrowRight size={18} />
              </button>
            </div>

            <div className="p-4 -mt-4 bg-white rounded-b-2xl">
              <h3 className="text-lg font-bold text-[#232755]">{item.title}</h3>
              <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
              <button className="bg-gray-300 px-5 py-2 mt-3 rounded-2xl text-[#212ea0]">
                {item.icon}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
