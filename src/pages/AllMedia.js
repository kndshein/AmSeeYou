import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import MediaList from "../components/MediaList";
import rawMediaList from "../utilities/rawMediaList.json";

const AllMovies = ({ moviesOnly }) => {
  const mediaListRef = useRef(null);

  const handleLeft = () => {
    mediaListRef.current.scrollLeft -= 800;
  };

  const handleRight = () => {
    mediaListRef.current.scrollLeft += 800;
  };

  return (
    <div className="all-movies">
      <div className="arrow-left" onClick={() => handleLeft()}>
        <MdKeyboardArrowLeft />
      </div>

      <MediaList
        rawMediaList={rawMediaList}
        moviesOnly={moviesOnly}
        mediaListRef={mediaListRef}
      />
      <div className="arrow-right" onClick={() => handleRight()}>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default AllMovies;
