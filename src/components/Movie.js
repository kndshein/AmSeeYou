import React from "react";

import dateString from "../utilities/dateCalc";
import runtimeString from "../utilities/runtimeCalc";
import GenresList from "./GenresList";

const Movie = (props) => {
  const { movieData, backdropLoaded } = props;

  return (
    <>
      <div className="movie-backdrop">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movieData.data.backdrop_path}`}
          alt={movieData.data.original_title}
          onLoad={backdropLoaded}
        />
      </div>
      <div className="movie-title">
        <h2>{movieData.data.original_title}</h2>
      </div>
      <div className="movie-active-container">
        <div className="movie-active-top">
          <div className="movie-active-title">
            <h1>{movieData.data.original_title}</h1>
          </div>
          <div className="movie-active-tagline">{movieData.data.tagline}</div>
        </div>
        <div className="movie-active-left">
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w342${movieData.data.poster_path}`}
              alt={movieData.data.original_title}
            />
          </div>
          <GenresList genres={movieData.data.genres} />
        </div>
        <div className="movie-active-right">
          <div className="movie-active-subtitle">
            <span className="vote-average">{movieData.data.vote_average}</span>
            <span className="dot">•</span>
            <span className="date">
              {dateString(movieData.data.release_date)}
            </span>
            <span className="dot">•</span>
            <span className="runtime">
              {runtimeString(movieData.data.runtime)}
            </span>
          </div>
          <div className="cast">
            {movieData.data.credits.cast.slice(0, 5).map((actor, index) => {
              return (
                <div className="actor" key={index}>
                  {actor.name}
                </div>
              );
            })}
          </div>
          <div className="movie-active-overview">{movieData.data.overview}</div>
        </div>
      </div>
    </>
  );
};

export default Movie;
