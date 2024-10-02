import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

interface slide {
  title: string;
  slogan: () => React.ReactNode;
  para: string;
}

type PropType = {
  slides: slide[];
  options?: EmblaOptionsType;
};
Autoplay.globalOptions = { delay: 3000 };
const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel({ ...options, align: "center" }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <section className="embla relative border-none  h-full " dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((slide, i) => (
            <div className="embla__slide   cursor-pointer p-5" key={i + 1}>
              <div className="embla__slide__number  border-none">
                <div className="embla__slide__number border rounded-3xl shadow-md shadow-slate-300 w-full flex items-center justify-center h-full">
                  <div className="w-full  mx-auto p-5  text-left flex flex-col h-full items-center lg:items-center justify-center select-none">
                    <p className="text-sm md:text-xl font-thin lg:text-2xl text-center  lg:font-mono text-blue-500 my-3">
                      {slide.title}
                    </p>
                    {slide.slogan()}
                    <p
                      className="text-center lg:text-center text-base lg:text-lg w-full my-3 capitalize relative lg:w-[70%] font-medium"
                      dir="ltr">
                      <span className="absolute w-1/2 h-1/2 lg:w-full lg:h-full bg-blue-200 skew-y-2 -skew-x-12 blur-2xl -z-10 "></span>
                      {slide.para}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
