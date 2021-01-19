import React from "react";

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
            />
          </div>
          <div className="movie-title">{element.original_title}</div>
        </div>
      );
    });
    return <div className="movies-list">{singleMovieMap}</div>;
  };

  const loading = () => {
    return <></>;
  };

  return props.moviesListState ? loaded() : loading();
};

export default SingleMovie;
