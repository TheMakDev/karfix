import React from 'react'
import bg from '../assets/slide-a-01.webp'

const ServiceHero = () => {
  return (
    <div
          className="relative flex flex-col justify-center h-100 bg-cover bg-center rounded-b-4xl mb-7"
          style={{ backgroundImage: `url(${bg})` }}
        >
         
          <div className="absolute inset-0 bg-black/50 z-0" />
    
          <div className="relative z-10 px-4 sm:px-8 md:px-16">
            <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-8xl text-center">
              Our Service
            </h1>
          </div>
        </div>
  )
}

export default ServiceHero