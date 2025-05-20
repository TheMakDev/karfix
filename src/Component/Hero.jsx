import React from 'react'
import bg from '../assets/slide-a-02.webp'

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center h-130 bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
     
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 px-4 sm:px-8 md:px-16">
        <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-8xl text-left">
          Exceptional service <br /> workmanship
        </h1>
        <p className="text-white font-bold text-base sm:text-xl md:text-2xl mt-6 sm:mt-8">
           We are professional mechanic company offering expert vehicle repair and maintenance services
        </p>
        <button className="bg-[#232755] px-6 py-3 sm:px-8 sm:py-4 text-white rounded-full mt-6 sm:mt-8 font-semibold text-base sm:text-xl">
          Our service
        </button>
      </div>
    </div>
  )
}

export default Hero
