import React, { useCallback, useState, useEffect } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

interface slide {
  title: string;
  slogan: (isActive: boolean) => React.ReactNode;
  para: string;
  image: string;
}

type PropType = {
  slides: slide[];
  options?: EmblaOptionsType;
  onSlideChange?: (index: number) => void; // Add onSlideChange prop
  activeIndex: any;
};

Autoplay.globalOptions = { delay: 3000 };

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, onSlideChange } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, align: "center" },
    [Autoplay({ delay: 3000 })]
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  // Event listener to update current slide index and notify parent component
  useEffect((): any => {
    if (!emblaApi) return;

    const handleSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      setCurrentIndex(selectedIndex);

      // Call the parent onSlideChange callback
      if (onSlideChange) {
        onSlideChange(selectedIndex);
      }
    };

    emblaApi.on("select", handleSelect);
    handleSelect(); // Set initial index on load

    return () => emblaApi.off("select", handleSelect);
  }, [emblaApi, onSlideChange]); // Add onSlideChange as a dependency

  return (
    <div className="relative h-full w-full ">
      <section className="embla gap-14 relative border-none  h-full " dir="ltr">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container ">
            {slides.map((slide, i) => (
              <div className="embla__slide   cursor-pointer p-5" key={i + 1}>
                <div className="embla__slide__number  border-none">
                  <div
                    className={`embla__slide__number  border rounded-3xl  shadow-slate-300 w-full flex relative items-center justify-center h-full overflow-hidden`}
                    style={{
                      backgroundImage: `url(/${slide.image}.jpg)`,
                      objectFit: "contain",
                    }}>
                    <span className="absolute w-full left-0 right-0 h-full bg-black-1/80  z-0"></span>
                    <div className="w-full  mx-auto p-5  text-left flex flex-col h-full items-center lg:items-center justify-center select-none">
                      <motion.p
                        className="text-sm uppercase md:text-xl tracking-widest  lg:text-2xl text-center font-semibold text-yellow-2 z-10 my-3"
                        initial="hidden"
                        animate={i === currentIndex ? "visible" : "hidden"}
                        variants={{
                          visible: { y: [60, 0], scale: [0.6, 1] },
                          hidden: { y: 60, scale: 0.6 },
                        }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}>
                        {slide.title}
                      </motion.p>

                      {slide.slogan(i === currentIndex)}

                      <motion.p
                        className="text-center md:tracking-wide md:leading-8 lg:text-center text-base lg:text-lg w-full my-3 capitalize relative lg:w-[70%]  text-white/80 font-medium"
                        dir="ltr"
                        initial="hidden"
                        animate={i === currentIndex ? "visible" : "hidden"}
                        variants={{
                          visible: { y: [60, 0], scale: [0.6, 1] },
                          hidden: { y: 60, scale: 0.6 },
                        }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}>
                        {slide.para}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className="absolute left-[20%] lg:left-3 translate-y-1/2 px-5 lg:px-10 py-2  rounded-md z-10 bg-white/10 bottom-16 lg:bottom-1/2 inline-block"
      />
      <NextButton
        onClick={onNextButtonClick}
        className="absolute right-[20%] lg:right-3 translate-y-1/2 px-5 md:px-10 py-2  rounded-md z-10 bg-white/10 bottom-16 lg:bottom-1/2 inline-block"
        disabled={nextBtnDisabled}
      />
    </div>
  );
};

export default EmblaCarousel;
