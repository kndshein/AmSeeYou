import React from "react";

import GenresList from "./GenresList";
import dateString from "../utilities/dateCalc";
import runtimeString from "../utilities/runtimeCalc";

const Show = ({ showData }) => {
  return (
    <>
      <div className="movie-backdrop">
        <img
          src={`https://image.tmdb.org/t/p/original${showData.data.backdrop_path}`}
          alt={showData.data.original_name}
        />
      </div>
      <div className="movie-title">
        <h2>{showData.data.original_name}</h2>
      </div>
      <div className="movie-active-container">
        <div className="movie-active-top">
          <div className="movie-active-title">
            <h1>{showData.data.original_name}</h1>
          </div>
          <div className="movie-active-tagline">{showData.data.tagline}</div>
        </div>
        <div className="movie-active-left">
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w342${showData.data.poster_path}`}
              alt={showData.data.original_name}
            />
          </div>
          <GenresList genres={showData.data.genres} />
        </div>
        <div className="movie-active-right">
          <div className="movie-active-subtitle">
            <span className="vote-average">{showData.data.vote_average}</span>
            <span className="dot">•</span>
            {/* <span className="date">
              {dateString(showData.data.release_date)}
            </span> */}
            <span className="dot">•</span>
            {/* <span className="runtime">
              {runtimeString(showData.data.runtime)}
            </span> */}
          </div>
          <div className="cast">
            {showData.data.credits.cast.slice(0, 5).map((actor, index) => {
              return (
                <div className="actor" key={index}>
                  {actor.name}
                </div>
              );
            })}
          </div>
          <div className="movie-active-overview">{showData.data.overview}</div>
        </div>
      </div>
    </>
  );
};

export default Show;
