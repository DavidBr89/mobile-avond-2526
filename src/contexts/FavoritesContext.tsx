// STAP 1: Aanmaken van onze context

import { createContext, PropsWithChildren, useState } from "react";

interface FavoritesContextType {
  favorites: Parking[];
  toggleFavorite: (item: Parking) => void;
  isInFavorites: (id: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null
);

// STAP 2: Maken van uw provider
const FavoritesProvider = (props: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Parking[]>([]);

  const toggleFavorite = (item: Parking) => {
    if (favorites.some((f) => f.id === item.id)) {
      setFavorites(favorites.filter((f) => f.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const isInFavorites = (id: string) => favorites.some((f) => f.id === id);

  return (
    // Koppeling tussen aangemaakte context en uw eigen provider component
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isInFavorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
