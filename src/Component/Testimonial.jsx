import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import person1 from '../assets/testimonial-01.webp';
import person2 from '../assets/testimonial-02.webp';
import person3 from '../assets/testimonial-03.jpg.jpeg';

const testimonials = [
  {
    name: "Dylan Wang",
    title: "CEO & Founder",
    image: `${person1}`,
    quote:
      "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
  },
  {
    name: "Ariana Green",
    title: "Manager",
    image: `${person2}`,
    quote:
      "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
  },
  {
    name: "Ariana Green",
    title: "Manager",
    image: `${person3}`,
    quote:
      "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
  }
];

export default function TestimonialCarousel() {
  return (
    <section className="px-4 py-10 bg-[#efefefcf] shadow-2xl">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-[#f7931e]">/TESTIMONIALS/</h2>
<h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
  What our <span className="text-[#f7931e]">clients say</span> <br /> about us
</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl border p-6 shadow-lg flex flex-col justify-between h-full">
                <div className="text-6xl text-blue-600 mb-4">“</div>
                <p className="text-lg font-medium text-gray-900 mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
