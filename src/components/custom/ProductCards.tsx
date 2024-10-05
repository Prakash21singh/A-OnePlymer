import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Link } from "react-router-dom";

interface IProp {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProductCards({ products }: { products: IProp[] }) {
  return (
    <div className="w-full lg:w-[80%] mx-auto px-4 py-8">
      <TextGenerateEffect
        start={3}
        end={5}
        words="A Sight at Our Product"
        className="text-center px-4  text-wrap text-2xl md:text-3xl lg:text-5xl my-5"
        textColor="text-red-1"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 lg:mt-10">
        {products.map((product, index) => (
          <Card
            key={index}
            className="overflow-hidden rounded-none border-none shadow-xl hover:-translate-y-3 transition relative p-1 flex flex-col justify-between">
            {/* <span className="absolute w-[150px] h-[150px] right-0  bottom-0 bg-yellow-1"></span> */}
            <span className="absolute w-[150px] h-[150px] left-0 top-0 bg-red-2"></span>
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <CardHeader className="bg-transparent p-4">
              <CardTitle className="text-xl font-bold tracking-wider">
                {product.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-transparent px-4">
              <p className="text-sm text-gray-600">{product.description}</p>
            </CardContent>
            <CardFooter className="bg-yellow-1/10 p-4 z-10  ">
              <Link
                to={product.link}
                className="bg-red-1 hover:bg-[#e09500] px-4 rounded-sm transition py-2 text-white">
                READ MORE
                <span className="ml-2">→</span>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
