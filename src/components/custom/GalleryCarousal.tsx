import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IconArrowLeft, IconArrowRight, IconPlus, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";

const images = [
  "/cr1.jpg",
  "/cr2.jpg",
  "/cr3.jpg",
  "/cr4.jpg",
  "/cutting.jpg",
  "/cutter.jpg",
];

const GalleryCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null); // track the index instead of the image
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const closeModal = () => setSelectedImageIndex(null);

  // Function to navigate images in modal
  const goToPrevImage = () => {
    if (selectedImageIndex !== null) {
      const newIndex = (selectedImageIndex - 1 + images.length) % images.length;
      setSelectedImageIndex(newIndex);
    }
  };

  const goToNextImage = () => {
    if (selectedImageIndex !== null) {
      const newIndex = (selectedImageIndex + 1) % images.length;
      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <div className="carousel-container w-[80%] mx-auto relative select-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="carousel-wrapper" ref={emblaRef}>
        <div className="carousel flex">
          {images.map((image, index) => (
            <div
              className="carousel-slide relative mx-3"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="slide-content relative shadow-lg rounded-md overflow-hidden transition-all duration-600 ease-in-out">
                <img src={image} alt={`Slide ${index}`} className="block w-full h-auto" />
                {hoveredIndex === index && (
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition duration-600 ease-in-out"
                    onClick={() => setSelectedImageIndex(index)} // Set index of the clicked image
                  >
                    <IconPlus className="text-black-1 text-4xl bg-red-1/50 rounded-lg " width={52} height={52} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isHovering && (
        <>
          <motion.button
            animate={{
              translateY: [10, -20],
              opacity: [0, 1],
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="hidden md:flex absolute top-1/2 left-2 -translate-y-1/2 text-gray-700 bg-white p-2 rounded-full"
            onClick={scrollPrev}
          >
            <IconArrowLeft />
          </motion.button>
          <motion.button
            animate={{
              translateY: [10, -20],
              opacity: [0, 1],
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="hidden md:flex absolute top-1/2 right-2 -translate-y-1/2 text-gray-700 bg-white p-2 rounded-full"
            onClick={scrollNext}
          >
            <IconArrowRight />
          </motion.button>
        </>
      )}

<div className="flex md:hidden">
<motion.button
            animate={{
              translateY: [10, -20],
              opacity: [0, 1],
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-700 bg-white p-2 rounded-full"
            onClick={scrollPrev}
          >
            <IconArrowLeft />
          </motion.button>
          <motion.button
            animate={{
              translateY: [10, -20],
              opacity: [0, 1],
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-700 bg-white p-2 rounded-full"
            onClick={scrollNext}
          >
            <IconArrowRight />
          </motion.button>
</div>
      
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        >
            <div className="bg-black-1/70 -z-10 w-full h-full absolute">

            </div>
          <div className="relative w-[80vw] h-[80vh] md:w-[90vw] md:h-[90vh] flex items-center justify-center">
            <img
              src={images[selectedImageIndex]}
              alt={`Slide ${selectedImageIndex}`}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />

            <button
              className="absolute top-5 right-5 bg-white p-2 rounded-full shadow-md"
              onClick={closeModal}
            >
              <IconX/>
            </button>

            <button
              className="absolute top-1/2 left-5 -translate-y-1/2 text-white bg-red-1 bg-black bg-opacity-50 p-2 rounded-full"
              onClick={goToPrevImage}
            >
              <IconArrowLeft />
            </button>

            <button
              className="absolute top-1/2 right-5 -translate-y-1/2 text-white bg-red-1 bg-black bg-opacity-50 p-2 rounded-full"
              onClick={goToNextImage}
            >
              <IconArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCarousel;
