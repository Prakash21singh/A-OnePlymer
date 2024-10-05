import EmblaCarousel from "@/components/custom/EmblaCarousel";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Carousel() {
  const OPTIONS: any = {
    direction: "ltr",
    loop: true,
    gap: "10",
  };

  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide

  let animation = { y: [60, 0], scale: [0.6, 1] };

  const SLIDES = [
    {
      title: "Premium Quality for Every Project",
      slogan: (isActive: boolean) => (
        <motion.h1
          animate={isActive ? animation : {}}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-xl z-10 text-center lg:text-center md:text-3xl lg:text-5xl text-gray-2 femibold gap-2 rounded-md capitalize w-[80%] flex mx-auto justify-center flex-wrap">
          The best choice for
          <p className="text-red-2"> Furniture & Construction</p>
        </motion.h1>
      ),
      para: "Our plywood offers unmatched strength, making it the perfect choice for projects ranging from cabinetry to structural applications, ensuring long-lasting results.",
      image: "cr1",
    },
    {
      title: "Eco-Friendly and Sustainable",
      slogan: (isActive: boolean) => (
        <motion.h1
          animate={isActive ? animation : {}}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-xl z-10 text-center lg:text-center md:text-3xl lg:text-5xl text-gray-2 femibold gap-2 rounded-md capitalize w-[80%] flex mx-auto justify-center flex-wrap">
          Designed for a <p className="text-red-2"> Greener Future</p>
        </motion.h1>
      ),
      para: "Our plywood is sourced from sustainable forests and manufactured using eco-friendly processes, supporting environmentally responsible building practices.",
      image: "cr2",
    },
    {
      title: "Durability That Lasts",
      slogan: (isActive: boolean) => (
        <motion.h1
          animate={isActive ? animation : {}}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-xl z-10 text-center lg:text-center md:text-3xl lg:text-5xl text-gray-2 femibold gap-2 rounded-md capitalize w-[80%] flex mx-auto justify-center flex-wrap">
          Plywood Built to <p className="text-red-2">Endure</p>
        </motion.h1>
      ),
      para: "With our high-quality plywood, you get durability and resistance to wear, making it the ideal material for long-term projects, ensuring reliability through the years.",
      image: "cr3",
    },
    {
      title: "Customizable to Your Needs",
      slogan: (isActive: boolean) => (
        <motion.h1
          animate={isActive ? animation : {}}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-xl z-10 text-center lg:text-center md:text-3xl lg:text-5xl text-gray-2 femibold gap-2 rounded-md capitalize w-[80%] flex mx-auto justify-center flex-wrap">
          Tailored Solutions for <p className="text-red-2"> Every Project</p>
        </motion.h1>
      ),
      para: "Our plywood comes in various thicknesses and sizes, customizable to fit your specific project requirements, ensuring flexibility and ease of use.",
      image: "cr4",
    },
    {
      title: "Engineered for Precision",
      slogan: (isActive: boolean) => (
        <motion.h1
          animate={isActive ? animation : {}}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-xl z-10 text-center lg:text-center md:text-3xl lg:text-5xl text-gray-2 femibold gap-2 rounded-md capitalize w-[80%] flex mx-auto justify-center flex-wrap">
          Precision Engineered <p className="text-red-2"> Plywood </p>
        </motion.h1>
      ),
      para: "Crafted with state-of-the-art technology, our plywood ensures precise cuts and smooth surfaces, perfect for detailed carpentry and architectural finishes.",
      image: "cr5",
    },
  ];

  return (
    <div className="w-full h-[75dvh] my-4 md:my-16 font-rubik">
      <EmblaCarousel
        slides={SLIDES}
        options={OPTIONS}
        onSlideChange={(index: number) => setActiveIndex(index)}
        activeIndex={activeIndex} // Pass active index to EmblaCarousel
      />
    </div>
  );
}
