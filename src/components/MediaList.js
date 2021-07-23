import React from "react";

import SingleMedia from "./SingleMedia";

const MediaList = (props) => {
  const { rawMediaList, moviesOnly, mediaListRef } = props;
  return (
    <div className="movies-list" ref={mediaListRef}>
      <SingleMedia
        moviesOnly={moviesOnly}
        rawMediaList={rawMediaList}
        mediaListRef={mediaListRef}
      />
    </div>
  );
};
export default MediaList;
