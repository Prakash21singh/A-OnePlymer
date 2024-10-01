import { About, Carousel, Hero } from "@/components";

const LandingPage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Carousel />
      <About />
    </div>
  );
};

export default LandingPage;
