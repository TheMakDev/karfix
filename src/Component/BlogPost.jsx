import React from "react";
import { FaTools, FaPumpSoap, FaCarCrash } from "react-icons/fa";
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
    description: "AUTOMOBILE/REPAIRED.",
    icon: <FaTools size={28} className="text-blue-600" />,
    image: img1,
  },
  {
    title: "Step by step guide to clean your carpets.",
    description: "ACCESSORIES/ELECTRONICS",
    icon: <FaPumpSoap size={28} className="text-blue-600" />,
    image: img2,
  },
  {
    title: "How long does it take to change a flat tyre",
    description: "MECHANIC/TECHNOLOGY",
    icon: <FaCarCrash size={28} className="text-blue-600" />,
    image: img3,
  },
  {
    title: "What Are The Benefit Of Vacuum Cleaning",
    description: "ACCESSORIES/ELECTRONICS",
    icon: <FaPumpSoap size={28} className="text-blue-600" />,
    image: img4,
  },
  {
    title: "How to open an Authorized Car Service Center",
    description: "AUTOMOBILE/REPAIRED.",
    icon: <FaPumpSoap size={28} className="text-blue-600" />,
    image: img5,
  },
  {
    title: "When Should You Get The Brakes Checked",
    description: "MECHANIC/REPAIRED",
    icon: <FaPumpSoap size={28} className="text-blue-600" />,
    image: img6,
  },
  {
    title: "Interior Cleaning",
    description:
      "First we dry vacuum the interiors and then we use our steam cleaner along with dry foam chemicals.",
    icon: <FaPumpSoap size={28} className="text-blue-600" />,
    image: img7,
  },
];

const BlogPost = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <p className="text-sm text-center font-medium text-[#212ea0] uppercase mb-2">
        /Latest News/
      </p>
      <h2 className="text-5xl text-center font-black mb-16 text-[#232755]">
        Our most recent<span className="text-[#f7931e]"> posts</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blog.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover"
              />
              <button className="absolute bottom-0 right-4 bg-white text-[#232755] rounded-t-2xl p-2 shadow-md text-xs font-semibold">
                29 SEP 2024
              </button>
            </div>
            <div className="p-8">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-3xl font-bold text-[#232755] mb-4">{item.title}</h3>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPost;
