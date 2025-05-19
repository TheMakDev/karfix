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
    <p className="font-medium text-2xl text-[#f7931e] mb-5">INSTANT MOT CLASS 4 & 7</p>
    <h2 className="font-bold text-3xl md:text-5xl text-[#232755]">
      MOT only £50.00! - Cheapest in Exeter £25 OFF For a full  service Phone for details Now
    </h2>
  </div>

  <div className="md:w-3/5 text-lg md:text-2xl text-[#232755] mt-4">
    <p className="mb-4">
      At Instant MOT, we go beyond just MOT testing – we are your one-stop destination for all your vehicle's repairs and maintenance needs. 
    </p>
    <p>
      Our dedicated team boasts many years of experience in the car repair industry, and we take pride in delivering the best customer service to every individual who trusts us with their vehicle.
    </p>
  </div>
</section>
    <Counter/>
      <Story/>
    </div>
  )
}

export default About