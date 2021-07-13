import React from "react";

import SingleMovie from "../components/SingleMovie";

const MoviesList = (props) => {
  const [moviesListState, setMoviesListState] = React.useState(null);
  const [creditsListState, setCreditsListState] = React.useState(null);

  const { REACT_APP_APIKEY } = process.env;

  React.useEffect(() => {
    const getAllMovies = () => {
      // generate a promise for each movies data using async callback to map
      const arrayOfPromises = props.moviesList.map(async (movie) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/${movie.type}/${movie.id}?api_key=${REACT_APP_APIKEY}&language=en-US`
        );
        const data = await response.json();
        return data; // each loop will return the data in the new array
      });
      //After map loop complete return the array of promises it generated
      return arrayOfPromises;
    };

    const getAllCredits = () => {
      // generate a promise for each movies data using async callback to map
      const arrayOfPromises = props.moviesList.map(async (movie) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/${movie.type}/${movie.id}/credits?api_key=${REACT_APP_APIKEY}&language=en-US`
        );
        const data = await response.json();
        return data; // each loop will return the data in the new array
      });
      //After map loop complete return the array of promises it generated
      return arrayOfPromises;
    };

    //Pass the array of promises to Promise.all to make sure they have all resolved
    Promise.all(getAllMovies())
      // The returned values from promise.all can then be handled in the callback via .then that'll run when Promise.all complete
      .then((arrayOfData) => setMoviesListState(arrayOfData));

    Promise.all(getAllCredits())
      // The returned values from promise.all can then be handled in the callback via .then that'll run when Promise.all complete
      .then((arrayOfData) => setCreditsListState(arrayOfData));
  }, [REACT_APP_APIKEY, props.moviesList]);

  return (
    <div className="movies-list">
      <SingleMovie
        moviesListState={moviesListState}
        creditsListState={creditsListState}
      />
    </div>
  );
};
export default MoviesList;
