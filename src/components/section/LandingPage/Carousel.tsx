import EmblaCarousel from "@/components/custom/EmblaCarousel";

export default function Carousel() {
  const OPTIONS: any = {
    direction: "ltr",
    loop: true,
    gap: "10",
  };
  const SLIDES = [
    {
      title: "Premium Quality for Every Project",
      slogan: () => (
        <h1 className="text-xl z-10 text-center lg:text-center md:text-3xl lg:text-5xl text-yellow-1 font-semibold flex flex-row-reverse gap-2 my-3">
          The best choice for Furniture and Construction
        </h1>
      ),
      para: "Our plywood offers unmatched strength, making it the perfect choice for projects ranging from cabinetry to structural applications, ensuring long-lasting results.",
      image: "cr1",
    },
    {
      title: "Eco-Friendly and Sustainable",
      slogan: () => (
        <h1 className="text-xl z-10 text-center lg:text-center md:text-3xl lg:text-5xl text-green-600 femibold  flex flex-row-reverse gap-2 my-3">
          Designed for a Greener Future
        </h1>
      ),
      para: "Our plywood is sourced from sustainable forests and manufactured using eco-friendly processes, supporting environmentally responsible building practices.",
      image: "cr2",
    },
    {
      title: "Durability That Lasts",
      slogan: () => (
        <h1 className="text-xl z-10 text-center lg:text-left md:text-3xl lg:text-5xl font-semibold  text-red-600  flex flex-row-reverse gap-2 my-3">
          Plywood Built to Endure
        </h1>
      ),
      para: "With our high-quality plywood, you get durability and resistance to wear, making it the ideal material for long-term projects, ensuring reliability through the years.",
      image: "cr3",
    },
    {
      title: "Customizable to Your Needs",
      slogan: () => (
        <h1 className="text-xl z-10 text-center lg:text-center md:text-3xl text-blue-500 lg:text-5xl font-semibold    flex flex-row-reverse gap-2 my-3">
          Tailored Solutions for Every Project
        </h1>
      ),
      para: "Our plywood comes in various thicknesses and sizes, customizable to fit your specific project requirements, ensuring flexibility and ease of use.",
      image: "cr4",
    },
    {
      title: "Engineered for Precision",
      slogan: () => (
        <h1 className="text-2xl text-center z-10 text-purple-500 md:text-3xl lg:text-5xl font-semibold   flex flex-row-reverse gap-2 my-3">
          Precision Engineered Plywood
        </h1>
      ),
      para: "Crafted with state-of-the-art technology, our plywood ensures precise cuts and smooth surfaces, perfect for detailed carpentry and architectural finishes.",
      image: "cr5",
    },
  ];

  return (
    <div className="w-full h-[75dvh] ">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
