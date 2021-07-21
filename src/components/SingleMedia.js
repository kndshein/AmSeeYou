import React from "react";

import Movie from "./Movie";
import Show from "./Show";

const SingleMovie = ({ mediaListState }) => {
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
          return (
            <div
              className={`single-movie${
                toggleState?.active === index ? " active" : ""
              }`}
              onClick={() => handleClick(index)}
              onKeyPress={(event) => handleKey(event, index)}
              tabIndex="0"
              key={index}
            >
              {element.media.type === "movie" ? (
                <Movie key={index} movieData={element} />
              ) : (
                <Show key={index} showData={element} />
              )}
            </div>
          );
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
