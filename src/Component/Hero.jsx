import React from 'react'
import bg from '../assets/bg2.webp'

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center h-130 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-16">
        <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-8xl text-left">
          Exceptional service <br /> workmanship
        </h1>
        <p className="text-white font-bold text-base sm:text-xl md:text-2xl mt-6 sm:mt-8">
          Hire us! we are professional cleaning company offering service
        </p>
        <button className="bg-blue-800 px-6 py-3 sm:px-8 sm:py-4 text-white rounded-full mt-6 sm:mt-8 font-semibold text-base sm:text-xl">
          Our service
        </button>
      </div>
    </div>
  )
}

export default Hero
