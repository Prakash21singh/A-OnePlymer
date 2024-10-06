import React, { useCallback, useState, useEffect } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
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

const GalleryCarousal: React.FC<PropType> = (props) => {
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
            <div className="embla_slide cursor-pointer p-5">
                <div className="embla__slide__number"></div>
            </div>
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

export default GalleryCarousal;
