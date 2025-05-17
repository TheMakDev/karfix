import React from 'react';
import { FaTools, FaClock, FaUndoAlt, FaCogs } from 'react-icons/fa';
import car from '../assets/car.jpeg'; 

const Feature = ({ Icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="bg-gray-100 text-[#f7931e] p-4 rounded-xl text-2xl shadow-md">
      {Icon && <Icon />}
    </div>
    <div>
      <h4 className="font-bold text-[#232755] text-base sm:text-lg">{title}</h4>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  </div>
);

const ChooseUs = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 rounded-t-4xl shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
       
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm font-semibold text-[#f7931e] mb-2 uppercase">/Why choose us?/</p>
          <h2 className="text-[#232755] text-4xl font-extrabold mb-4">
            What makes us <span className="text-[#f7931e]">different?</span>
          </h2>
          <p className="text-gray-600 text-base mb-6">
            We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.
          </p>
          <button className="bg-[#232755] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
            Know More →
          </button>
        </div>

        
        <div className="flex-1">
          <img
            src={car}
            alt="Car Service"
            className="w-full max-w-md mx-auto"
          />
        </div>

        
        <div className="flex-1 space-y-6">
          <Feature
            Icon={FaTools}
            title="Experienced Mechanics"
            description="We had technical knowledge and physical abilities, important to practice and learn Mechanics"
          />
          <Feature
            Icon={FaClock}
            title="24/7 Quality Service"
            description="Our skilled technicians arrive equipped with the necessary tools and expertise for 24/7"
          />
          <Feature
            Icon={FaUndoAlt}
            title="Money Back Guarantee"
            description="Diagnose the vehicle thoroughly to narrow down the problem with money back Guarantee"
          />
          <Feature
            Icon={FaCogs}
            title="Quality Equipment"
            description="Choosing the right equipment for your auto can spell the difference between other service"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
