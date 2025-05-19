import React from 'react';
import bg from '../assets/slide-a-01.webp';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaRegCalendarAlt } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const ContactBox = () => {
  const cards = [
    {
      title: "Mail Us 24/7",
      lines: ["pbminfotech@gmail.com", "support@pbminfotech.com"],
      icon: <FaEnvelope className="text-[#f7931e] w-5 h-5" />
    },
    {
      title: "Our Location",
      lines: ["85 Preston, Inglewood, Maine 983", "80, Hoofddorp Noord- 2132"],
      icon: <FaMapMarkerAlt className="text-[#f7931e] w-5 h-5" />
    },
    {
      title: "Call US 24/7",
      lines: ["Phone: +001 236-895-4732", "Mobile: +9123 895-4732-236"],
      icon: <FaPhone className="text-[#f7931e] w-5 h-5" />
    },
    {
      title: "Working Days",
      lines: ["Mon to Fri - 09:00am To 06:00pm", "Saturday to Sunday - Closed"],
      icon: <FaRegCalendarAlt className="text-[#f7931e] w-5 h-5" />
    }
  ];

  return (
    <div>
  
      <div
        className="relative flex flex-col justify-center h-100 bg-cover bg-center rounded-[40px] mb-7"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0 rounded-[40px]" />
        <div className="relative z-10 px-4 sm:px-8 md:px-16 py-16">
          <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-7xl text-center">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 mt-12 mb-12">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-[2rem] p-5 shadow-md h-[220px] flex flex-col justify-between border-1 border-[#f7931e]"
          >
            <div>
              <h2 className="text-2xl font-bold text-[#232755] mb-2">{card.title}</h2>
              <div className="text-sm text-gray-700 space-y-1">
                {card.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            <div className="absolute bottom-[45px] left-4 w-10 h-10 rounded-xl bg-[#f5f5f5] flex items-center justify-center">
              {card.icon}
            </div>

            <div className="absolute bottom-0 right-0 w-15 h-15 rounded-full bg-[#f5f5f5] flex items-center justify-center cursor-pointer hover:bg-[#e5e5e5] transition-all">
              <FiArrowUpRight className="text-black text-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactBox;
