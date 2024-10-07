import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    text: "Atoot Ply provided us with excellent quality plywood that exceeded our expectations. The durability and finish are impeccable, making it the perfect choice for our interior design projects.",
    author: "Ravi Garg",
  },
  {
    text: "Choosing Atoot Ply was one of the best decisions for our renovation project. The plywood is strong and reliable, and the customer service is outstanding. Highly recommended!",
    author: "Vaibhav Singh",
  },
  {
    text: "Atoot Ply stands out in the market for its superior quality and durability. Their plywood has been a game-changer for our furniture manufacturing business. Trustworthy and reliable!",
    author: "Akhil Sharma",
  },
  {
    text: "Atoot Ply stands out in the market for its superior quality and durability. Their plywood has been a game-changer for our furniture manufacturing business. Trustworthy and reliable!",
    author: "Nikhil Singh",
  },
  {
    text: "Atoot Ply stands out in the market for its superior quality and durability. Their plywood has been a game-changer for our furniture manufacturing business. Trustworthy and reliable!",
    author: "Aakriti Dubey",
  },
  {
    text: "Atoot Ply stands out in the market for its superior quality and durability. Their plywood has been a game-changer for our furniture manufacturing business. Trustworthy and reliable!",
    author: "Atul Sharma",
  },
];

const TestimonialCard = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="carousel-container w-[90%] mx-auto relative select-none">
      <div className="carousel-wrapper" ref={emblaRef}>
        <div className="carousel flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="carousel-slide flex-none mx-3 w-full md:w-1/2 lg:w-1/3 bg-white p-5 rounded-lg shadow-lg">
              <p className="text-lg font-light">{testimonial.text}</p>
              <h4 className="font-semibold mt-4">~ {testimonial.author}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Circles */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              selectedIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
            // @ts-ignore
            onClick={() => emblaApi.scrollTo(index)}></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
