import React, { useState, useEffect } from "react";
// import { getFromStorage } from "../utils/storageHelper";

import { useFavorites } from "../context/FavoritesContext";

const Favorites = ({}) => {
  const { favorites, removeFavorite, favCount } = useFavorites();
  // **** Example when using StorageHelper ****** ///
  // const [favorites, setFavorites] = useState([]);
  // const [favCount, setFavCount] = useState(0);

  // useEffect(() => {
  //   setFavorites(getFromStorage("favorites"));
  //   setFavCount(stored.length);
  // }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Favorites {favCount > 0 && `(${favCount})`}
      </h2>
      {favorites.length === 0 ? (
        <p>No Favforites yet</p>
      ) : (
        favorites.map((q, i) => (
          <div key={i}>
            <p>{q.quote}</p>
            <p>{q.author}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
