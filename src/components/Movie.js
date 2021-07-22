import React, { useState, useEffect } from "react";

import dateString from "../utilities/dateCalc";
import runtimeString from "../utilities/runtimeCalc";
import GenresList from "./GenresList";
import Loading from "./Loading";

const Movie = (props) => {
  const { rawMovieData } = props;
  const [movieData, setMovieData] = useState();
  const [backdropLoaded, setBackdropLoaded] = useState(false);
  const { REACT_APP_APIKEY } = process.env;

  useEffect(() => {
    const getMedia = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${rawMovieData.type}/${
            rawMovieData.id
          }?api_key=${REACT_APP_APIKEY}&language=en-US&append_to_response=credits${
            rawMovieData.type === "tv" ? `,season/${rawMovieData.season}` : ""
          }`
        );
        const data = await response.json();
        setMovieData(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMedia();
  }, [rawMovieData, REACT_APP_APIKEY]);

  const ComponentLoading = () => {
    return (
      <div className="media-loading">
        <div className="loader">
          <Loading />
        </div>
      </div>
    );
  };

  const Loaded = () => {
    return (
      <>
        {!backdropLoaded && (
          <div className="media-loading">
            <div className="loader">
              <Loading />
            </div>
          </div>
        )}
        <div className="movie-backdrop">
          <img
            src={`https://image.tmdb.org/t/p/w1280${
              movieData.backdrop_path
                ? movieData.backdrop_path
                : movieData.poster_path
            }`}
            alt={movieData.original_title}
            onLoad={() => setBackdropLoaded(true)}
          />
        </div>
        <div className="movie-title">
          <h2>{movieData.original_title}</h2>
        </div>
        <div className="movie-active-container">
          <div className="movie-active-top">
            <div className="movie-active-title">
              <h1>{movieData.original_title}</h1>
            </div>
            <div className="movie-active-tagline">{movieData.tagline}</div>
          </div>
          <div className="movie-active-left">
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w342${movieData.poster_path}`}
                alt={movieData.original_title}
              />
            </div>
            <GenresList genres={movieData.genres} />
          </div>
          <div className="movie-active-right">
            <div className="movie-active-subtitle">
              <span className="vote-average">{movieData.vote_average}</span>
              <span className="dot">•</span>
              <span className="date">{dateString(movieData.release_date)}</span>
              <span className="dot">•</span>
              <span className="runtime">
                {runtimeString(movieData.runtime)}
              </span>
            </div>
            <div className="cast">
              {movieData.credits.cast.slice(0, 5).map((actor, index) => {
                return (
                  <div className="actor" key={index}>
                    {actor.name}
                  </div>
                );
              })}
            </div>
            <div className="movie-active-overview">{movieData.overview}</div>
          </div>
        </div>
      </>
    );
  };

  return movieData ? Loaded() : ComponentLoading();
};

export default Movie;
