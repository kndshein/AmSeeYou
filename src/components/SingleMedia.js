import React from "react";

import Movie from "./Movie";

const SingleMovie = ({ mediaListState }) => {
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

  const loaded = () => {
    return (
      <>
        {mediaListState.map((element, index) => {
          if (element.media.type === "movie") {
            return (
              <Movie
                key={index}
                movieData={element}
                index={index}
                handleClick={handleClick}
                toggleState={toggleState}
                handleKey={handleKey}
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

  return mediaListState ? loaded() : loading();
};

export default SingleMovie;
