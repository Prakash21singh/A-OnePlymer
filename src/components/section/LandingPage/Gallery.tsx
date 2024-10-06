import GalleryCarousal from "@/components/custom/GalleryCarousal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Gallery = () => {
  return (
    <div className="w-full p-4 flex flex-col ">
      <TextGenerateEffect
        start={0}
        end={2}
        words="Our Gallery"
        className="text-center px-4  text-wrap text-2xl md:text-3xl lg:text-5xl "
        textColor="text-red-1"
      />
      <div className="w-full mb-8 lg:mb-12">
        <GalleryCarousal/>
      </div>
    </div>
  );
};

export default Gallery;
