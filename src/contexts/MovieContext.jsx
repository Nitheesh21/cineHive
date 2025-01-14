import { useContext, useState, createContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    console.log("Favorites updated:", favorites);
  }, [favorites]);

  const addToFav = (movie) => {
    if (!movie.id) {
      console.error("Movie object must contain an id.");
      return;
    }
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFav = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFav = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        setFavorites,
        addToFav,
        removeFromFav,
        isFav,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
