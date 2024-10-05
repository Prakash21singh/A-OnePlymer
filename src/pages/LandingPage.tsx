import {
  About,
  Carousel,
  Hero,
  Glance,
  Products,
  Making,
  Trust,
  Gallery,
} from "@/components";

const LandingPage = () => {
  return (
    <div className="w-full relative font-lato">
      <Hero />
      <Carousel />
      <About />
      <Glance />
      <Products />
      <Making />
      <Trust />
      <Gallery />
    </div>
  );
};

export default LandingPage;
