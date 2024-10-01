import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface IProp {
  title: string;
  description: string;
  image: string;
}

export default function ProductCards({ products }: { products: IProp[] }) {
  return (
    <div className="w-full lg:w-[80%] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg">
            <div className="relative">
              <div className="absolute top-0 left-0 w-4 h-4 bg-[#F0A500]"></div>
              <img
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <CardHeader className="bg-[#f8ffe4]">
              <CardTitle className="text-xl font-bold">
                {product.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-[#e5f0fe] p-4">
              <p className="text-sm text-gray-600">{product.description}</p>
            </CardContent>
            <CardFooter className="bg-[#e5f0fe] p-4">
              <Button className="bg-[#F0A500] hover:bg-[#e09500] text-white">
                READ MORE
                <span className="ml-2">→</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
