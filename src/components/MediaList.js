import React from "react";

import SingleMedia from "./SingleMedia";

const MediaList = ({ rawMediaList, moviesOnly }) => {
  return (
    <div className="movies-list">
      <SingleMedia moviesOnly={moviesOnly} rawMediaList={rawMediaList} />
    </div>
  );
};
export default MediaList;
