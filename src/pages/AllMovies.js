import React from "react";

import MoviesList from "../components/MoviesList";

const AllMovies = (props) => {
  const moviesList = [
    { type: "movie", id: "1771-captain-america-the-first-avenger" },
    { type: "movie", id: "299537-captain-marvel" },
    { type: "movie", id: "1726-iron-man" },
    { type: "movie", id: "10138-iron-man-2" },
    { type: "movie", id: "1724-the-incredible-hulk" },
    { type: "movie", id: "10195-thor" },
    { type: "movie", id: "24428-the-avengers" },
    { type: "movie", id: "68721-iron-man-3" },
    { type: "movie", id: "76338-thor-the-dark-world" },
    { type: "movie", id: "100402-captain-america-the-winter-soldier" },
    { type: "movie", id: "118340-guardians-of-the-galaxy" },
    { type: "movie", id: "283995-guardians-of-the-galaxy-2" },
    { type: "movie", id: "99861-avengers-age-of-ultron" },
    { type: "movie", id: "102899-ant-man" },
    { type: "movie", id: "271110-captain-america-civil-war" },
    { type: "movie", id: "315635-spider-man-homecoming" },
    { type: "movie", id: "284054-black-panther" },
    { type: "movie", id: "284052-doctor-strange" },
    { type: "movie", id: "284053-thor-ragnarok" },
    { type: "movie", id: "363088-ant-man-and-the-wasp" },
    { type: "movie", id: "299536-avengers-infinity-war" },
    { type: "movie", id: "299534-avengers-endgame" },
    { type: "movie", id: "429617-spider-man-far-from-home" },
  ];

  return (
    <div className="all-movies">
      <MoviesList
        moviesList={moviesList}
        handleClickAddWatched={props.handleClickAddWatched}
      />
    </div>
  );
};

export default AllMovies;
