import toast from "react-hot-toast";

export const getFavorite = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) return JSON.parse(favorites);
  return [];
};
export const addFavorite = (productId) => {
  const favorites = getFavorite();
  const isExist = favorites.find((favorite) => favorite === productId);
  if (!isExist) {
    favorites.push(productId);
    toast.success("Successfully Added Product.");
  } else {
    toast.error("Already Have Added.");
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
export const removeFavorite = (productId) => {
  const favorites = getFavorite();
  const newFavorites = favorites.filter((favorite) => favorite !== productId);
  toast.success("Successfully Remove Product.");
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};
