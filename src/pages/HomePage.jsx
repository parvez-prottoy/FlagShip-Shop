import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Products from "../components/products/Products";
import { useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (!text) {
      setProducts(data);
    } else {
      const searchProducts = data.filter(
        (product) =>
          product.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
          product.brand.toLowerCase().split(" ").includes(text.toLowerCase())
      );
      setProducts(searchProducts);
    }
  };
  return (
    <>
      <Banner handleSearch={handleSearch} />
      <Products data={products} />
    </>
  );
}
