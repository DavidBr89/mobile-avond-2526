import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

export const useFavorites = () => {
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error(
      "useFavorites can't be used without a <FavoriteProvider />"
    );
  }

  return favoritesContext;
};
