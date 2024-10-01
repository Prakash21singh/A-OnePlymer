import ProductCards from "@/components/custom/ProductCards";
import { productsCardData } from "@/constants";

const Products = () => {
  return (
    <div className="w-full h-auto min-h-screen">
      <ProductCards products={productsCardData} key={1} />
    </div>
  );
};

export default Products;
