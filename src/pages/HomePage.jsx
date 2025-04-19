import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Products from "../components/products/Products";
import { useState } from "react";

export default function HomePage() {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text) {
      const searchProducts = data.filter(
        (product) =>
          product.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
          product.brand.toLowerCase().split(" ").includes(text.toLowerCase())
      );
      setProducts(searchProducts);
    } else {
      setProducts(data);
    }
  };
  return (
    <>
      <Banner handleSearch={handleSearch} />
      <Products data={products} />
    </>
  );
}
