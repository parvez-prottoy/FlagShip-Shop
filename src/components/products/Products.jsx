import { useEffect, useState } from "react";
import Button from "../shared/Button";
import Product from "./Product";

export default function Products({ data }) {
  const [products, setProducts] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);
  const handleShowAll = () => {
    setIsShowAll(!isShowAll);
    if (isShowAll) window.scroll(0, 100);
  };
  useEffect(() => {
    if (isShowAll) {
      setProducts(data);
    } else {
      setProducts(data.slice(0, 6));
    }
  }, [data, isShowAll]);
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <h1 className="text-center text-4xl">No ProductFound!</h1>
        )}
      </div>
      <div className="text-center">
        <Button handleShowAll={handleShowAll}>
          Show {isShowAll ? "Less" : "All"}
        </Button>
      </div>
    </div>
  );
}
