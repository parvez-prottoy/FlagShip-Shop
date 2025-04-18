import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Products from "../components/products/Products";

export default function HomePage() {
  const data = useLoaderData();
  return (
    <>
      <Banner />
      <Products data={data} />
    </>
  );
}
