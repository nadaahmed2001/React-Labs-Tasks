import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import LanguageContext from "../context/language";



export default function Movies() {
  const [movies, setMovies] = useState([]);
  const {language} = useContext(LanguageContext);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey+"&language="+language)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [language]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        {language==='en'? "Popular Movies" : "الأفلام"}
        </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {movies?.map((movie) => (
        <div className="col" key={movie.id}>
        <MovieCard movie={movie} />
        </div>
      ))}
       
      </div>
    </div>
  );
}
