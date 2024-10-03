import { About, Carousel, Hero, Glance, Products } from "@/components";

const LandingPage = () => {
  return (
    <div className="w-full relative font-lato">
      <Hero />
      <Carousel />
      <About />
      <Glance />
      <Products />
    </div>
  );
};

export default LandingPage;
