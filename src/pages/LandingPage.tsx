import {
  About,
  Carousel,
  Hero,
  Glance,
  Products,
  Making,
  Trust,
  Gallery,
  Testimonial,
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
      <Testimonial />
    </div>
  );
};

export default LandingPage;
