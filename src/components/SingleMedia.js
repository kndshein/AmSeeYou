import React from "react";

import Movie from "./Movie";

const SingleMovie = ({ mediaListState, creditsListState }) => {
  console.log("singleMovie props", mediaListState);

  const [toggleState, setToggleState] = React.useState(null);

  const handleClick = (index) => {
    setToggleState({ active: index });
    if (toggleState?.active === index) {
      setToggleState({ active: null });
    }
  };

  const handleKey = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick(index);
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
    return (
      <>
        {mediaListState.map((element, index) => {
          if (element.type === "movie") {
            return (
              <Movie
                key={index}
                movieData={element}
                index={index}
                handleClick={handleClick}
                toggleState={toggleState}
                handleKey={handleKey}
                dateString={dateString}
                calculateRuntime={calculateRuntime}
                creditsListState={creditsListState}
              />
            );
          } else {
            return null;
          }
        })}
        <div id="empty-margin"></div>;
      </>
    );
  };

  const loading = () => {
    return <></>;
  };

  return mediaListState && creditsListState ? loaded() : loading();
};

export default SingleMovie;
