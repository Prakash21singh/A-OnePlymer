import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

interface slide {
  title: string;
  slogan: () => React.ReactNode;
  para: string;
  image: string;
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
    <section className="embla gap-14 relative border-none  h-full " dir="ltr">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((slide, i) => (
            <div className="embla__slide   cursor-pointer p-5" key={i + 1}>
              <div className="embla__slide__number  border-none">
                <div
                  className={`embla__slide__number  border rounded-3xl shadow-md shadow-slate-300 w-full flex relative items-center justify-center h-full overflow-hidden`}
                  style={{
                    backgroundImage: `url(/${slide.image}.jpg)`,
                    objectFit: "cover",
                  }}>
                  <span className="absolute w-full left-0 right-0 h-full bg-black-1/80  z-0"></span>
                  <div className="w-full  mx-auto p-5  text-left flex flex-col h-full items-center lg:items-center justify-center select-none">
                    <p className="text-sm md:text-xl tracking-widest  lg:text-2xl text-center font-semibold text-white z-10 my-3">
                      {slide.title}
                    </p>

                    {slide.slogan()}
                    <p
                      className="text-center tracking-wide leading-8 lg:text-center text-base lg:text-lg w-full my-3 capitalize relative lg:w-[70%]  text-white font-medium"
                      dir="ltr">
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
