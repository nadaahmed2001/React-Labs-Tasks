import React from 'react';
import { useNavigate } from "react-router";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../store/slices/watchlistReducer";



export default function MovieCard({ movie }) {
    const dispatch = useDispatch();

    const watchlist = useSelector((state) => state.watchlist.movies);//get the watchlist from the store
    const isInWatchlist = watchlist.some((m) => m.id === movie.id); //check if the movie is in the watchlist, some() returns true if at least one element in the array satisfies the condition
    
    const handleWatchlist = () => {
        if (isInWatchlist) {
            dispatch(removeFromWatchlist(movie));
        } else {
            dispatch(addToWatchlist(movie));
        }
    };

    const navigate = useNavigate();
    const redirectToMovieDetails = (id) => {
        navigate(`/movie-details/${id}`);
    };
    return (
        <div className="card h-100 shadow-sm">
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "60vh", objectFit: "cover" }}
            />
            <div className="card-body">
                <h5 className="card-title text-truncate">{movie.title}</h5>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-primary">Rating: {movie.vote_average}</span>
                    <span className="badge bg-secondary">Release: {movie.release_date}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => {
                            // console.log("View movie details for", movie.id);
                            redirectToMovieDetails(movie.id);
                        }}
                    >
                        View
                    </button>


                    <button className="btn btn-outline-primary btn-sm" onClick={handleWatchlist}>
                        {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
                    </button>


                </div>
            </div>
        </div>

    );
}