import React from "react";
import GenresList from "./GenresList";

const SingleMovie = (props) => {
  console.log("singleMovie props", props);

  const [toggleState, setToggleState] = React.useState(null);

  const handleClick = (index) => {
    setToggleState({ active: index });
    if (toggleState?.active === index) {
      setToggleState({ active: null });
    }
  };

  const loaded = () => {
    const singleMovieMap = props.moviesListState.map((element, index) => {
      console.log("map", element);
      return (
        <div
          className={`single-movie${
            toggleState?.active === index ? " active" : ""
          }`}
          onClick={() => handleClick(index)}
          key={index}
        >
          <div className="movie-backdrop">
            <img
              src={`https://image.tmdb.org/t/p/original${element.backdrop_path}`}
              alt={element.original_title}
            />
          </div>
          <div className="movie-title">
            <h2>{element.original_title}</h2>
          </div>
          <div className="movie-active-container">
            <div className="movie-active-left">
              <div className="movie-poster">
                <img
                  src={`https://image.tmdb.org/t/p/w342${element.poster_path}`}
                  alt={element.original_title}
                />
              </div>
              <GenresList genres={element.genres} />
            </div>
            <div className="movie-active-right">
              <div className="movie-active-title">
                <h1>{element.original_title}</h1>
              </div>
              <div className="movie-active-tagline">{element.tagline}</div>
            </div>
          </div>
        </div>
      );
    });

    return <>{singleMovieMap}</>;
  };

  const loading = () => {
    return <></>;
  };

  return props.moviesListState ? loaded() : loading();
};

export default SingleMovie;
