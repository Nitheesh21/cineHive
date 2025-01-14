import React, { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import MovieCard from "../Components/MovieCard";
import "../css/Home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Uh-oh, there seems to be a problem in loading!");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(async () => {
  //     if (!searchQuery.trim()) {
  //       setMovies([]); // Clear the results if no search query
  //       return;
  //     }

  //     setLoading(true);
  //     setError(null); // Reset previous errors

  //     try {
  //       const searchResults = await searchMovies(searchQuery);
  //       setMovies(searchResults);
  //     } catch (error) {
  //       console.log("Error searching.", error);
  //       setError("Error searching for movies.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, 500); // Add a debounce delay of 500ms

  //   return () => clearTimeout(delayDebounceFn); // Cleanup the timeout on searchQuery change
  // }, [searchQuery]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    try {
      const searchResults = await searchMovies(searchQuery);
      console.log(searchResults);
      setMovies(searchResults);
      setError(null);
      if (searchResults.length === 0) {
        alert("nigga there aint no movie with that name");
      }
    } catch (err) {
      console.log(err);
      setError("Error l");
    } finally {
      setLoading(false);
    }
  };

  function handleInput(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form ">
        <input
          type="text"
          placeholder="Enter a movie name"
          className="search-input"
          value={searchQuery}
          onChange={handleInput}
        />
        <button type="submit" className="search-button sex">
          Search
          <span className="top"></span>
          <span className="bottom"></span>
          <span className="right"></span>
          <span className="left"></span>
        </button>

        {error && <div className="error-message">{error}</div>}
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
