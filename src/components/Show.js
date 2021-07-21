import React from "react";

import GenresList from "./GenresList";
import dateString from "../utilities/dateCalc";

const Show = ({ showData }) => {
  console.log("showData", showData);
  return (
    <>
      <div className="movie-backdrop">
        <img
          src={`https://image.tmdb.org/t/p/original${showData.data.backdrop_path}`}
          alt={showData.data.original_name}
        />
      </div>
      <div className="movie-title">
        <h2>{`${showData.data.original_name} Season ${showData.media.season}`}</h2>
      </div>
      <div className="movie-active-container">
        <div className="movie-active-top">
          <div className="movie-active-title">
            <h1>{showData.data.original_name}</h1>
          </div>
          <div className="movie-active-tagline">
            Season {showData.media.season}, Episodes {showData.media.epiStart} -{" "}
            {showData.media.epiEnd}
          </div>
        </div>
        <div className="movie-active-left">
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w342${
                showData.data[`season/${showData.media.season}`].poster_path
              }`}
              alt={showData.data.original_name}
            />
          </div>
          <GenresList genres={showData.data.genres} />
        </div>
        <div className={`movie-active-right ${showData.media.type}`}>
          <div className="movie-active-subtitle">
            <span className="vote-average">{showData.data.vote_average}</span>
            <span className="dot">•</span>
            <span className="date">
              {dateString(
                showData.data[`season/${showData.media.season}`].air_date
              )}
            </span>
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
          <div className={`movie-active-overview ${showData.media.type}`}>
            {showData.data[`season/${showData.media.season}`].overview}
          </div>
          <div className="episodes-container">
            {showData.data[`season/${showData.media.season}`].episodes
              .slice(showData.media.epiStart - 1, showData.media.epiEnd)
              .map((element, index) => {
                return (
                  <div className="episode" key={index}>
                    <div className="episode-still-container">
                      <img
                        className="episode-still"
                        src={`https://image.tmdb.org/t/p/w342${element.still_path}`}
                        alt={showData.data.original_name}
                      />
                    </div>
                    <div className="episode-description-container">
                      <div className="episode-name">
                        <span className="episode-name-season">{`Season ${element.season_number}, Episode ${element.episode_number} - `}</span>
                        <span className="episode-name-name">
                          {element.name}
                        </span>
                      </div>
                      <div className="episode-description">
                        {element.overview}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
