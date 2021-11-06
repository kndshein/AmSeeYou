import React, { useState } from "react";
import rawMediaList from "../utilities/rawMediaList.json";
import Movie from "./Movie";
import Show from "./Show";

const SingleMedia = ({ moviesOnly, mediaListRef }) => {
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

  if (moviesOnly) {
    rawMediaList.filter((type) => type.type !== "tv");
  }

  return (
    <>
      {rawMediaList.map((element, index) => {
        return (
          <React.Fragment
            key={`${element.id}${
              element.type === "tv"
                ? `${element.season}${element.epiStart}${element.epiEnd}`
                : ""
            }`}
          >
            {element.type === "movie" ? (
              <Movie
                rawMovieData={element}
                toggleState={toggleState}
                handleClick={handleClick}
                handleKey={handleKey}
                index={index}
                mediaListRef={mediaListRef}
                moviesOnly={moviesOnly}
              />
            ) : (
              !moviesOnly && (
                <Show
                  rawShowData={element}
                  toggleState={toggleState}
                  handleClick={handleClick}
                  handleKey={handleKey}
                  index={index}
                  moviesOnly={moviesOnly}
                />
              )
            )}
          </React.Fragment>
        );
      })}
      <div id="empty-margin"></div>;
    </>
  );
};

export default SingleMedia;
