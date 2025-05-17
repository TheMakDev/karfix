import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from '../assets/service-img-01.webp';
import img2 from '../assets/service-img-02.webp';
import img3 from '../assets/service-img-03.webp';
import { FaTools, FaPumpSoap, FaCarCrash } from "react-icons/fa";
import './ServicesSection.css'; 

const services = [
  {
    title: "Engine Service",
    description: "Engine oil is an integral part of your car engine’s system help to maintain the temperatures of the...",
    icon: <FaTools size={24} className="text-blue-600" />,
    image: img1
  },
  {
    title: "Interior Cleaning",
    description: "First we dry vacuum the interiors and then we use our steam cleaner along with dry foam chemicals.",
    icon: <FaPumpSoap size={24} className="text-blue-600" />,
    image: img2
  },
  {
    title: "Brake Service",
    description: "Brake repair and maintenance need to be inspected regularly and serviced when required or dirt buildup...",
    icon: <FaCarCrash size={24} className="text-blue-600" />,
    image: img3
  },
  {
    title: "Interior Cleaning",
    description: "First we dry vacuum the interiors and then we use our steam cleaner along with dry foam chemicals.",
    icon: <FaPumpSoap size={24} className="text-blue-600" />,
    image: img2
  },
];


const ServicesSection = () => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerSlide = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const maxSlide = Math.ceil(services.length / itemsPerSlide()) - 1;

  const updateSlider = (slideIndex) => {
    const width = slider.current.offsetWidth;
    slider.current.scrollTo({ left: slideIndex * width, behavior: 'smooth' });
  };

  const slideForward = () => {
    if (currentSlide < maxSlide) {
      const next = currentSlide + 1;
      setCurrentSlide(next);
      updateSlider(next);
    }
  };

  const slideBackward = () => {
    if (currentSlide > 0) {
      const prev = currentSlide - 1;
      setCurrentSlide(prev);
      updateSlider(prev);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(0);
      updateSlider(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-white relative">
      <p className="text-sm font-medium text-[#212ea0] uppercase mb-2">
        /Our Services/
      </p>
      <h2 className="text-5xl md:text-5xl font-black mb-12 text-[#232755]">
        We offer a <span className="text-[#f7931e]">wide range</span> of <br /> car services
      </h2>

      <div
        ref={slider}
        className="overflow-x-scroll scroll-smooth flex w-full hide-scrollbar"
      >
        {services.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-3 flex-shrink-0 relative"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col h-full justify-between mb-5">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-xl mb-4"
                />
                <button className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full p-2 shadow-md">
                  <ArrowRight size={18} />
                </button>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-bold text-[#232755]">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-4 text-sm">{item.description}</p>
                <button className="bg-gray-300 px-5 py-5 mt-5 rounded-2xl text-[#212ea0]">{item.icon}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-6 z-10">
        <button
          onClick={slideBackward}
          className="bg-black text-white rounded-full p-2"
        >
          <ArrowLeft size={18} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-6 z-10">
        <button
          onClick={slideForward}
          className="bg-black text-white rounded-full p-2"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
