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

  const dateString = (e) => {
    const str = e;
    const year = str.substring(0, 4);
    const day = str.substring(8, 10);
    var month = str.substring(5, 7);
    switch (month) {
      case "01":
        month = "Jan";
        break;
      case "02":
        month = "Feb";
        break;
      case "03":
        month = "Mar";
        break;
      case "04":
        month = "Apr";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "Jun";
        break;
      case "07":
        month = "Jul";
        break;
      case "08":
        month = "Aug";
        break;
      case "09":
        month = "Sep";
        break;
      case "10":
        month = "Oct";
        break;
      case "11":
        month = "Nov";
        break;
      case "12":
        month = "Dec";
        break;
      default:
        month = "";
    }

    const res = day + " " + month + " " + year;
    return res;
  };

  const calculateRuntime = (e) => {
    const hour = Math.floor(e / 60);
    const min = e % 60;
    const concat = hour + "h " + min + "min";
    return concat;
  };

  const loaded = () => {
    const singleMovieMap = props.moviesListState.map((element, index) => {
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
            <div className="movie-active-top">
              <div className="movie-active-title">
                <h1>{element.original_title}</h1>
              </div>
              <div className="movie-active-tagline">{element.tagline}</div>
            </div>
            <div className="movie-active-left">
              <div className="movie-poster">
                <img
                  src={`https://image.tmdb.org/t/p/w342${element.poster_path}`}
                  alt={element.original_title}
                />
              </div>
              <GenresList genres={element.genres} />
              <div className="addWatched">
                <button onClick={() => props.handleClickAddWatched(element)}>
                  hello
                </button>
              </div>
            </div>
            <div className="movie-active-right">
              <div className="movie-active-subtitle">
                <span className="vote-average">{element.vote_average}</span>
                <span className="dot">•</span>
                <span className="date">{dateString(element.release_date)}</span>
                <span className="dot">•</span>
                <span className="country">
                  {element.production_countries[0].iso_3166_1}
                </span>
                <span className="dot">•</span>
                <span className="runtime">
                  {calculateRuntime(element.runtime)}
                </span>
              </div>
              <div className="movie-active-overview">{element.overview}</div>
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
