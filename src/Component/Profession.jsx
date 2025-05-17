import React from 'react'
import lady from '../assets/lady.webp';
import tireman from '../assets/tireman.webp';

const Profession = () => {
  return (
    <section className="bg-gray-300 py-10 px-4 rounded-b-4xl">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-[1fr_auto_1fr] items-stretch">


        <div
          className="relative bg-cover bg-center rounded-3xl overflow-hidden shadow-md h-[300px] flex items-end p-6"
          style={{ backgroundImage: `url('${lady}')` }}
        >
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="relative z-10">
            <p className="text-white font-semibold mb-1">/ FREE SERVICES /</p>
            <h2 className="text-2xl font-bold mb-4 text-white">Free Evaluation Of Your Car Service</h2>
          </div>
          <div className='bg-white rounded-t-full p-2 absolute bottom-0 right-10'>
            <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.25l7.5 7.5-15 7.5m15-7.5l-7.5-7.5 15-7.5" />
              </svg>
            </button>
          </div>

        </div>


        <div className="flex justify-center items-center">
          <div className="bg-blue-600 text-white rounded-3xl overflow-hidden shadow-md px-4 py-6 w-full md:w-[200px] flex flex-col justify-center items-center h-[300px]">
            <h2 className="text-5xl font-extrabold mb-2">
              520<span className="text-white text-4xl">+</span>
            </h2>
            <p className="text-sm text-center">
              Professional and Experienced staff ready to help you
            </p>
          </div>
        </div>


        <div
          className="relative bg-cover bg-center rounded-3xl overflow-hidden shadow-md h-[300px] flex items-end p-6"
          style={{ backgroundImage: `url('${tireman}')` }}
        >
          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8 text-white">Easy Booking & Fast Communication</h2>
          </div>
          <div className='bg-white p-2 absolute right-0 bottom-0 rounded-tl-2xl'>
              <button className="bg-blue-600 font-bold text-white px-6 py-3 rounded-full text-sm flex items-center gap-1">
              Book Now
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Profession