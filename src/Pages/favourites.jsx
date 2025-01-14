import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../Components/MovieCard";
export default function Favourites() {
  const { favorites } = useMovieContext();
  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>You haven't added any favourite movies, yet.</h2>
        <p>Start adding movies to your favourites and they'll appear here.</p>
      </div>
    );
  }
}
