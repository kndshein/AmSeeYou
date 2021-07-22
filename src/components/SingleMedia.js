import React, { useState } from "react";

import Movie from "./Movie";
import Show from "./Show";

const SingleMedia = ({ moviesOnly, rawMediaList }) => {
  const [toggleState, setToggleState] = useState(null);

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

  return (
    <>
      {rawMediaList.map((element, index) => {
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
            {element.type === "movie" ? (
              <Movie
                key={index}
                rawMovieData={element}
                toggleState={toggleState}
                handleClick={handleClick}
                handleKey={handleKey}
                index={index}
              />
            ) : (
              <Show
                key={index}
                rawShowData={element}
                toggleState={toggleState}
                handleClick={handleClick}
                handleKey={handleKey}
                index={index}
              />
            )}
          </div>
        );
      })}
      <div id="empty-margin"></div>;
    </>
  );
};

export default SingleMedia;
