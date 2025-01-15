import "../css/watchlater.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../Components/MovieCard";

export default function Watchlater() {
  const { watchlater } = useMovieContext();
  if (watchlater.length > 0) {
    return (
      <div className="watchlater">
        <div className="movies-grid">
          {watchlater.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="watchlater-empty">
        <h2>You haven't added any movies to your Watch Later list, yet.</h2>
        <p>Click on the clock icon to add movies to Watch Later.</p>
      </div>
    );
  }
}
