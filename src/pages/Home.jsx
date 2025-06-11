import React, { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";

const API_URL = "http://localhost:3000/quotes";

const Home = ({}) => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const data = await response.json();
      const random = data[Math.floor(Math.random() * data.length)];
      console.log("Fetched quote", random);
      setQuote(random);
    } catch (err) {
      console.error("Fetch error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const { addFavorite, favorites } = useFavorites();

  const handleAddToFav = () => {
    addFavorite(quote);
  };
  const isFav = favorites.some((q) => q.quote === quote?.quote);
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold mb-2">Random Quote</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        quote && (
          <>
            <p className="italic">"{quote.quote}"</p>
            <p className="text-sm text-gray-600 mt-2">- {quote.author}</p>
          </>
        )
      )}

      <div className="button-wrapper space-x-4">
        <button
          onClick={fetchQuote}
          className="mt-6 bg-blue-600 text-white px-4 py-2  rounded hover:bg-blue-700"
        >
          New Quote
        </button>

        <button
          disabled={isFav}
          onClick={handleAddToFav}
          className={`mt-6 px-4 py-2 rounded ${
            isFav
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isFav ? "Already in Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default Home;
