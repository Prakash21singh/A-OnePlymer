const Hero = () => {
  return (
    <section className="h-[70vh] w-full flex items-center justify-center flex-col relative p-10 lg:p-0">
      <p className="text-2xl uppercase text-center my-2 font-thin tracking-widest gap-3 text-blue-600">
        Strong. Versatile. Sustainable.
      </p>
      <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold self-center md:my-6 flex flex-col items-start sm:flex-row">
        Trusted Partner in{" "}
        <span className="relative lg:mx-3 flex gap-2">
          <p className="text-yellow-1 ">Plywood</p>
          Product
        </span>{" "}
      </h1>
      <p className="p-5 w-full lg:w-1/2 mx-auto text-center text-lg">
        Whether you're building furniture, remodeling a home, or working on a
        large-scale construction project, our high-quality plywood is designed
        to meet all your needs with precision and durability.
      </p>
    </section>
  );
};

export default Hero;
