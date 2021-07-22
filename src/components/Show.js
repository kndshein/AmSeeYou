import React, { useState, useEffect } from "react";

import GenresList from "./GenresList";
import dateString from "../utilities/dateCalc";
import Loading from "./Loading";

const Show = (props) => {
  const { rawShowData } = props;
  const [showData, setShowData] = useState(null);
  const [backdropLoaded, setBackdropLoaded] = useState(false);
  const { REACT_APP_APIKEY } = process.env;

  useEffect(() => {
    const getMedia = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${rawShowData.type}/${
            rawShowData.id
          }?api_key=${REACT_APP_APIKEY}&language=en-US&append_to_response=credits${
            rawShowData.type === "tv" ? `,season/${rawShowData.season}` : ""
          }`
        );
        const data = await response.json();
        setShowData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMedia();
  }, [rawShowData, REACT_APP_APIKEY]);

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
            src={`https://image.tmdb.org/t/p/w1280${showData.backdrop_path}`}
            alt={showData.original_name}
            onLoad={() => setBackdropLoaded(true)}
          />
        </div>
        <div className="movie-title">
          <h2>{`${showData.original_name} Season ${rawShowData.season}`}</h2>
        </div>
        <div className="movie-active-container">
          <div className="movie-active-top">
            <div className="movie-active-title">
              <h1>{showData.original_name}</h1>
            </div>
            <div className="movie-active-tagline">
              Season {rawShowData.season}, Episodes {rawShowData.epiStart} -{" "}
              {rawShowData.epiEnd}
            </div>
          </div>
          <div className="movie-active-left">
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w342${
                  showData[`season/${rawShowData.season}`].poster_path
                }`}
                alt={showData.original_name}
              />
            </div>
            <GenresList genres={showData.genres} />
          </div>
          <div className={`movie-active-right ${rawShowData.type}`}>
            <div className="movie-active-subtitle">
              <span className="vote-average">{showData.vote_average}</span>
              <span className="dot">•</span>
              <span className="date">
                {dateString(showData[`season/${rawShowData.season}`].air_date)}
              </span>
            </div>
            <div className="cast">
              {showData.credits.cast.slice(0, 5).map((actor, index) => {
                return (
                  <div className="actor" key={index}>
                    {actor.name}
                  </div>
                );
              })}
            </div>
            <div className={`movie-active-overview ${rawShowData.type}`}>
              {showData[`season/${rawShowData.season}`].overview
                ? showData[`season/${rawShowData.season}`].overview
                : showData.overview}
            </div>
            <div className="episodes-container">
              {showData[`season/${rawShowData.season}`].episodes
                .slice(rawShowData.epiStart - 1, rawShowData.epiEnd)
                .map((element, index) => {
                  return (
                    <div className="episode" key={index}>
                      <div className="episode-still-container">
                        <img
                          className="episode-still"
                          src={`https://image.tmdb.org/t/p/w342${
                            element.still_path
                              ? element.still_path
                              : showData[`season/${rawShowData.season}`]
                                  .poster_path
                          }`}
                          alt={showData.original_name}
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

  return showData ? Loaded() : ComponentLoading();
};

export default Show;
