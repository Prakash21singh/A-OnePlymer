const Hero = () => {
  return (
    <section className="h-[70vh] w-full flex items-center justify-center flex-col relative p-2 lg:p-0 z-10 ">
      <span className="w-[200px] h-[200px] absolute rounded-full -z-10 bg-red-1/30 md:bg-red-1  left-9 bottom-14 blur-3xl"></span>
      <span className="w-[200px] h-[200px] absolute rounded -z-10 bg-yellow-1/30 md:bg-yellow-1  right-9 top-14 blur-3xl"></span>
      <p className="text-xl uppercase text-center my-2 font-thin tracking-widest gap-3 text-yellow-2">
        Strong. Versatile. Sustainable.
      </p>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold self-center md:my-6 flex flex-col items-start sm:flex-row">
        Trusted Partner in{" "}
        <span className="relative mx-1 lg:mx-3 flex gap-2">
          <p className="text-red-1 ">Plywood</p>
          Product
        </span>{" "}
      </h1>
      <p className="p-5 w-full lg:w-1/2 mx-auto text-center text-base md:text-base lg:text-[20px]">
        Whether you're building furniture, remodeling a home, or working on a
        large-scale construction project, our high-quality plywood is designed
        to meet all your needs with precision and durability.
      </p>
    </section>
  );
};

export default Hero;
