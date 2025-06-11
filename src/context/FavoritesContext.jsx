import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavCount(favorites.length);
  }, [favorites]);

  const addFavorite = (quote) => {
    if (!favorites.some((q) => q.quote === quote.quote)) {
      setFavorites((prev) => [...prev, quote]);
      return true;
    }
    return false;
  };

  const removeFavorite = (quote) => {
    setFavorites((prev) => prev.filter((q) => q.quote !== quote.quote));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, favCount }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
