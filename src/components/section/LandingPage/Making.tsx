import MakerCard from "@/components/custom/MakerCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { productCard } from "@/constants";

const Making = () => {
  return (
    <div className="w-full min-h-screen h-auto py-4 lg:py-8 font-rubik bg-gray-100">
      <div className="flex flex-col mx-auto">
        <TextGenerateEffect
          start={1}
          end={3}
          words="Making of A-OnePly"
          className="text-center px-4  text-wrap text-2xl md:text-3xl lg:text-5xl "
          textColor="text-red-1"
        />
      </div>

      <div className="w-full lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 px-4 py-8">
        {productCard.map((product) => (
          <MakerCard
            img={product.image}
            text={product.label}
            key={product.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Making;
