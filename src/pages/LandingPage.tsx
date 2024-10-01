import { About, Carousel, Hero, Glance, Products } from "@/components";

const LandingPage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Carousel />
      <About />
      <Glance />
      <Products />
    </div>
  );
};

export default LandingPage;
