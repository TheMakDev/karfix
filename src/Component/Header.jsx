import React from 'react'
import bg from "../assets/bg-img-01.webp"
  import { FaEnvelope, FaPhone, FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";   

const Header = () => {
  return (
    <div>
          <div
            className="relative flex flex-col justify-center h-130 bg-cover bg-center "
            style={{ backgroundImage: `url(${bg})` }}>
           
            <div className="absolute inset-0 bg-black/50 z-0" />
      
            <div className="relative z-10 px-4 sm:px-8 md:px-16">
              <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-8xl text-center">
                 Contact Us
              </h1>
              <p className="text-white font-bold text-base sm:text-xl md:text-2xl mt-6 sm:mt-8 text-center">
                karfix &gt; contact us
              </p>
            </div>
          </div>

          <div className='flex flex-row justify-center items-center mx-[20px] gap-4 mt-12 mb-6 '>
           <div className="bg-[#fff] border-3 text-[#f7931e] rounded-3xl overflow-hidden shadow-md px-6 py-8 w-full md:w-[400px] flex flex-col justify-center items-center h-[300px]">
            <h2 className="text-4xl text-black font-extrabold mb-2">
              Mail Us 24/7
            </h2>
            <p className="text-sm text-center text-black line-height-6">
              pbminfotech@gmail.com <br /> support@pbminfotech.com
            </p>
             <FaEnvelope className="text-[#f7931e] md:w-[80px] h-[40px] mt-6 items-left" />q
          </div>
           <div className="bg-[#fff] border-3 text-[#f7931e] rounded-3xl overflow-hidden shadow-md px-6 py-8 w-full md:w-[400px] flex flex-col justify-center items-center h-[300px]">
            <h2 className="text-4xl text-black font-extrabold mb-2">
              Our Location 
            </h2>
            <p className="text-sm text-center text-black line-height-6">
              85 Preston, Inglewood, Maine 98380, Hoofddorp Noord- 2132
            </p>
             <FaMapMarkerAlt className="text-[#f7931e] md:w-[80px] h-[40px] mt-6 items-left" />q
          </div>
           <div className="bg-[#fff] border-3 text-[#f7931e] rounded-3xl overflow-hidden shadow-md px-6 py-8 w-full md:w-[400px] flex flex-col justify-center items-center h-[300px]">
            <h2 className="text-4xl text-black font-extrabold mb-2">
             Call US 24/7
            </h2>
            <p className="text-sm text-center text-black line-height-6">
             Phone: +001 236-895-4732 <br /> Mobile: +9123 895-4732-236
            </p>
             <FaPhone className="text-[#f7931e] md:w-[80px] h-[40px] mt-6 items-left" />q
          </div>
           <div className="bg-[#fff] border-3 text-[#f7931e] rounded-3xl overflow-hidden shadow-md px-6 py-8 w-full md:w-[400px] flex flex-col justify-center items-center h-[300px]">
            <h2 className="text-4xl text-black font-extrabold mb-2">
              Working Days
            </h2>
            <p className="text-sm text-center text-black line-height-6">
            Mon to Fri - 09:00am To 06:00pm <br /> Saturday to Sunday - Closed
            </p>
             <FaRegCalendarAlt className="text-[#f7931e] md:w-[80px] h-[40px] mt-6 justify-left items-left" />q
          </div>
      </div>    
    </div>
  )
}

export default Header