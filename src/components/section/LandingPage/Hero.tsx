import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="font-rubik h-[70vh] bg-hero bg-center bg-no-repeat bg-cover w-full flex items-center justify-center flex-col relative p-2 lg:p-0 z-10 ">
      <span className="absolute w-full left-0 right-0 h-full bg-black-1/80  -z-50"></span>
      <motion.p
        animate={{
          y: [-20, 0],

          transition: {
            duration: 1.5,
            ease: "easeInOut",
          },
        }}
        className="text-xl uppercase text-center font-thin tracking-widest gap-3 text-yellow-2">
        Strong. Versatile. Sustainable.
      </motion.p>
      <TextGenerateEffect
        start={2}
        end={4}
        words="Trusted Partner in Plywood Product."
        textColor="text-red-2"
        className="text-center px-4 text-wrap text-gray-2 text-2xl  md:text-3xl lg:text-5xl"
      />

      <motion.p
        animate={{
          y: [20, 0],
          opacity: [0, 1],

          transition: {
            duration: 1.5,
            delay: 1,
            ease: "easeInOut",
          },
        }}
        className="px-5 w-full lg:w-1/2 mx-auto text-center text-yellow-1 text-[18px] md:text-base lg:text-[20px]">
        Whether you're building furniture, remodeling a home, or working on a
        large-scale construction project, our high-quality plywood is designed
        to meet all your needs with precision and durability.
      </motion.p>
    </section>
  );
};

export default Hero;
