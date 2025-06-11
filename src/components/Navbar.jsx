import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const Navbar = () => {
  const { favCount } = useFavorites;
  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <div className="text-xl font-bold">Quote Generator</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/favorites" className="hover:underline">
          ❤️ Favorites
          {favCount > 0 && (
            <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {favCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
