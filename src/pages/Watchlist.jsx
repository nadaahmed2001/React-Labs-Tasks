import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function Watchlist() {
  const watchlist = useSelector((state) => state.watchlist.movies);

  return (
    <div className="container mt-5">
      <h1>My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p className="text-muted">Your watchlist is empty.</p>
      ) : (
        <div className="row">
          {watchlist.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
