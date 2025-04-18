import Button from "../shared/Button";
import Product from "./Product";

export default function Products({ data }) {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Button>Show All</Button>
    </div>
  );
}
