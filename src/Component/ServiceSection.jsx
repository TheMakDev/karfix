import React from "react";
import img from "../assets/blog-img-03.webp";
import img2 from "../assets/blog-img-04.webp";
import img3 from "../assets/blog-img-05.webp";
import img4 from "../assets/blog-img-06.webp";
import img5 from "../assets/blog-img-07.webp";
import img6 from "../assets/blog-img-08.webp";

const services = [
  {
    title: "Engine Repairing",
    category: "ENGINE",
    image: img,
    height: "h-[460px]",
  },
  {
    title: "Point Inspection",
    category: "DIAGNOSTICS",
    image: img2,
    height: "h-[280px]",
  },
  {
    title: "Car Diagnostic",
    category: "EQUIPMENT",
    image: img3,
    height: "h-[280px]",
  },
  {
    title: "Suspension Fix",
    category: "MECHANICS",
    image: img4,
    height: "h-[460px]",
  },
  {
    title: "Oil Change",
    category: "MAINTENANCE",
    image: img5,
    height: "h-[460px]",
  },
  {
    title: "Tire Services",
    category: "WHEELS",
    image: img6,
    height: "h-[280px]",
  },
];

const Card = ({ service }) => (
  <div className={`relative rounded-2xl overflow-hidden mb-6 ${service.height}`}>
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 bg-white rounded-tr-[20px] px-4 py-3">
      <p className="text-[10px] text-gray-500 uppercase">{service.category}</p>
      <h3 className="text-[15px] font-semibold text-black leading-tight">
        {service.title}
      </h3>
    </div>
  </div>
);

export default function ServiceSection() {
  return (
    <section className="bg-white py-12 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {services.map((service, index) => (
            <Card key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
