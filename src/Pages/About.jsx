import React from 'react'
import Story from '../Component/Story'
import bg from '../assets/slide-a-01.webp'
import Counter from '../Component/Counter'

const About = () => {
  return (
    <div>

    <div
              className="relative flex flex-col justify-center h-100 bg-cover bg-center rounded-[40px] mb-7"
              style={{ backgroundImage: `url(${bg})` }}
            >
             
              <div className="absolute inset-0 bg-black/50 z-0 rounded-[40px]" />
        
              <div className="relative z-10 px-4 sm:px-8 md:px-16">
                <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-8xl text-center">
                  About us
                </h1>
              </div>
            </div>

      <section className="m-10 flex flex-col md:flex-row px-5 py-7 gap-10">
  <div className="md:w-2/5">
    <p className="font-medium text-2xl text-[#f7931e] mb-5">/About Us/</p>
    <h2 className="font-bold text-4xl md:text-5xl text-[#232755]">
      Top-quality craftsmanship with hands-on care tried and true.
    </h2>
  </div>

  <div className="md:w-3/5 text-lg md:text-2xl text-[#232755]">
    <p className="mb-4">
      We experiencing unusual vibration or poor handling while driving or have low type threads and other problems, it’s time to get your car tires checked. Maintaining and repairing electric cars is slightly different car services to ensure it performs optimally
    </p>
    <p>
      We use the most reliable methods to locate issues and correct them to ensure your car is in top condition also check the lights and system
    </p>
  </div>
</section>
    <Counter/>
      <Story/>
    </div>
  )
}

export default About