import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../store/slices/watchlistReducer";
import LanguageContext from "../context/language";


export default function MovieDetails() {
  const {language}= useContext(LanguageContext);

  const dispatch = useDispatch();
  const [movie, setMovie] = useState(null); 
  const params = useParams();
  const watchlist = useSelector((state) => state.watchlist.movies);// Get the watchlist from the Redux store using the useSelector hook

  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  const handleWatchlist = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movie));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    // Fetch movie details using the movie ID
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=${language}`
      )
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [params.id, language]);

  if (!movie)
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Movie Image */}
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid rounded shadow-lg"
          />
        </div>

        {/* Movie Details */}
        <div className="col-md-8">
          <h1 className="mb-3">{movie.title}</h1>
          <p className="text-muted fst-italic">{movie.tagline}</p>
          <p>{movie.overview}</p>

          {/* Genres */}
          <div className="mb-3">
            <strong>Genres: </strong>
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="badge bg-primary me-2 text-white fs-6"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Additional Information */}
          <ul className="list-group mb-4">
            <li className="list-group-item">
              <strong>{language === 'en' ? "Release:" : "الإصدار"}</strong> {movie.release_date}
            </li>
            <li className="list-group-item">
              <strong>{language === 'en' ? "Rating:" : "التقييم"}</strong> {movie.vote_average} / 10 (
              {movie.vote_count} votes)
            </li>
            <li className="list-group-item">
              <strong>{language === 'en' ? "Runtime:" : "المدة"}</strong> {movie.runtime} minutes
            </li>
          </ul>

          <button className="btn btn-primary" onClick={handleWatchlist}>
          {isInWatchlist
                            ? (language === 'en' ? "Remove from Watchlist" : "إزالة من المفضلة")
                            : (language === 'en' ? "Add to Watchlist" : "إضافة إلى المفضلة")
                        }
          </button>
        </div>
      </div>
    </div>
  );
}
