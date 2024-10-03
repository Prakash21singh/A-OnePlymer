import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const Hero = () => {
  return (
    <section className="h-[70vh] w-full flex items-center justify-center flex-col relative p-2 lg:p-0 z-10 ">
      <span className="w-[200px] h-[200px] absolute rounded-full -z-10 bg-red-1/30 md:bg-red-1  left-9 bottom-14 blur-3xl"></span>
      <span className="w-[200px] h-[200px] absolute rounded -z-10 bg-yellow-1/30 md:bg-yellow-1  right-9 top-14 blur-3xl"></span>
      <p className="text-xl uppercase text-center font-thin tracking-widest gap-3 text-yellow-2">
        Strong. Versatile. Sustainable.
      </p>
      <TextGenerateEffect
        start={2}
        end={4}
        words="Trusted Partner in Plywood Product."
        className="text-center px-4 text-wrap text-2xl md:text-3xl lg:text-5xl"
      />

      <p className="px-5 w-full lg:w-1/2 mx-auto text-center text-[18px] md:text-base lg:text-[20px]">
        Whether you're building furniture, remodeling a home, or working on a
        large-scale construction project, our high-quality plywood is designed
        to meet all your needs with precision and durability.
      </p>
    </section>
  );
};

export default Hero;
