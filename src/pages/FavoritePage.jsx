import { useEffect, useState } from "react";
import { getFavorite, removeFavorite } from "../utils/favorites";
import { useLoaderData } from "react-router";
import Product from "../components/products/Product";

export default function FavoritePage() {
  const data = useLoaderData();
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  useEffect(() => {
    const favorites = getFavorite();
    if (favorites) {
      const favoriteProducts = data.filter((product) =>
        favorites.includes(product.id)
      );
      setFavoriteProducts(favoriteProducts);
    } else {
      setFavoriteProducts([]);
    }
  }, [data]);
  const handleRemoveFavorite = (id) => {
    removeFavorite(id);
    const updatedFavorites = getFavorite();
    const updatedProducts = data.filter((product) =>
      updatedFavorites.includes(product.id)
    );
    setFavoriteProducts(updatedProducts);
  };
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              favorite="true"
              handleRemove={handleRemoveFavorite}
            />
          ))
        ) : (
          <h1 className="text-center text-4xl text-red-600">
            No Favorite Product!
          </h1>
        )}
      </div>
    </div>
  );
}
