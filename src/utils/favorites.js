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
  } else {
    console.log("Already add");
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
export const removeFavorite = (productId) => {
  const favorites = getFavorite();
  const newFavorites = favorites.filter((favorite) => favorite !== productId);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};
