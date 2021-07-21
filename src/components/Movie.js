import React from "react";

import GenresList from "./GenresList";

const Movie = ({
  movieData,
  index,
  handleClick,
  toggleState,
  handleKey,
  dateString,
  calculateRuntime,
  creditsListState,
}) => {
  return (
    <div
      className={`single-movie${
        toggleState?.active === index ? " active" : ""
      }`}
      onClick={() => handleClick(index)}
      onKeyPress={(event) => handleKey(event, index)}
      tabIndex="0"
      key={index}
    >
      <div className="movie-backdrop">
        <img
          src={`https://image.tmdb.org/t/p/original${movieData.data.backdrop_path}`}
          alt={movieData.data.original_title}
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
              {calculateRuntime(movieData.data.runtime)}
            </span>
          </div>
          <div className="cast">
            {creditsListState[index].cast.slice(0, 5).map((actor, index) => {
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
    </div>
  );
};

export default Movie;