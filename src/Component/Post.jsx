import React, { useRef, useState, useEffect } from "react";
import { FaTools, FaPumpSoap, FaCarCrash, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/blog-img-01.webp";
import img2 from "../assets/blog-img-02.webp";
import img3 from "../assets/blog-img-03.webp";
import img4 from "../assets/blog-img-04.webp";
import img5 from "../assets/blog-img-05.webp";
import img6 from "../assets/blog-img-06.webp";
import img7 from "../assets/blog-img-07.webp";

const blog = [
  {
    title: "Things to know choosing a cleaning service",
    description:
      "AUTOMOBILE/REPAIRED.",
    icon: <FaTools size={24} className="text-blue-600" />,
    image: img1,

  },
  {
    title: "Step by step guide to clean your carpets.",
    description:
      "ACCESSORIES/ELECTRONICS",
    icon: <FaPumpSoap size={24} className="text-blue-600" />,
    image: img2,
  },
  {
    title: "How long does it take to change a flat tyre",
    description:
      "MECHANIC/TECHNOLOGY",
    icon: <FaCarCrash size={24} className="text-blue-600" />,
    image: img3,
  },
  {
    title: "What Are The Benefit Of Vacuum Cleaning",
    description:
      "ACCESSORIES/ELECTRONICS",
    icon: <FaPumpSoap size={24} className="text-blue-600" />,
    image: img4,
  },
  {
    title: "How to open an Authorized Car Service Center",
    description:
      "AUTOMOBILE/REPAIRED.",
    icon: <FaPumpSoap size={24} className="text-blue-600" />,
    image: img5,
  },
  {
    title: "When Should You Get The Brakes Checked",
    description:
      "MECHANIC/REPAIRED",
    icon: <FaPumpSoap size={24} className="text-blue-600" />,
    image: img6,
  },
  {
    title: "Interior Cleaning",
    description:
      "First we dry vacuum the interiors and then we use our steam cleaner along with dry foam chemicals.",
    icon: <FaPumpSoap size={24} className="text-blue-600" />,
    image: img7,
  },
];

const Post = () => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerSlide = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const maxSlide = Math.ceil(blog.length / itemsPerSlide()) - 1;

  const updateSlider = (slideIndex) => {
    const width = slider.current.offsetWidth;
    slider.current.scrollTo({ left: slideIndex * width, behavior: "smooth" });
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-white relative">
      <p className="text-sm text-center font-medium text-[#212ea0] uppercase mb-2">
        /Latest News/
      </p>
      <h2 className="text-5xl text-center md:text-5xl font-black mb-12 text-[#232755]">
        Our most recent<span className="text-[#f7931e]"> posts</span>
      </h2>

      <div
        ref={slider}
        className="overflow-x-scroll scroll-smooth flex w-full hide-scrollbar"
      >
        {blog.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-3 flex-shrink-0 relative"
          >
            <div className="bg-white rounded-2xl shadow-lg md:p-8 flex flex-col h-full justify-between mb-5">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-xl "
                />
                <button className="absolute bottom-0 right-4 bg-white text-[#232755] rounded-t-2xl  p-2 shadow-md ">
                  29 SEP 2024
                </button>
              </div>
              <div className="mt-0">
                <h3 className="text-2xl font-bold text-[#232755]">{item.title}</h3>
                <p className="text-gray-700 mt-4 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Post;
