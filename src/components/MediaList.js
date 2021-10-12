import React from "react";

import SingleMedia from "./SingleMedia";

const MediaList = (props) => {
  const { moviesOnly, mediaListRef } = props;
  return (
    <div className="movies-list" ref={mediaListRef}>
      <SingleMedia moviesOnly={moviesOnly} mediaListRef={mediaListRef} />
    </div>
  );
};
export default MediaList;
