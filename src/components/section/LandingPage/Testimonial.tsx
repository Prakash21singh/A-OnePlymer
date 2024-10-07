import TestimonialCard from "@/components/custom/TestimonialCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Testimonial = () => {
  return (
    <div className="w-full p-4 border my-4 lg:my-8">
      <TextGenerateEffect
        start={1}
        end={3}
        words="What Client Say's"
        className="text-center px-4  text-wrap text-2xl md:text-3xl lg:text-5xl "
        textColor="text-red-1"
      />
      <TestimonialCard />
    </div>
  );
};

export default Testimonial;
