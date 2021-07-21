import React from "react";

import SingleMedia from "./SingleMedia";

const MediaList = ({ mediaList }) => {
  const [mediaListState, setMediaListState] = React.useState(null);
  // const [creditsListState, setCreditsListState] = React.useState(null);

  const { REACT_APP_APIKEY } = process.env;

  React.useEffect(() => {
    const getAllMedia = () => {
      // generate a promise for each media data using async callback to map
      const arrayOfPromises = mediaList.map(async (media) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/${media.type}/${
            media.id
          }?api_key=${REACT_APP_APIKEY}&language=en-US&append_to_response=credits${
            media.type === "tv" ? `,season/${media.season}` : ""
          }`
        );
        const data = await response.json();
        return { media: media, data: data }; // each loop will return the data in the new array
      });
      //After map loop complete return the array of promises it generated
      return arrayOfPromises;
    };

    //Pass the array of promises to Promise.all to make sure they have all resolved
    Promise.all(getAllMedia())
      // The returned values from promise.all can then be handled in the callback via .then that'll run when Promise.all complete
      .then((arrayOfData) => setMediaListState(arrayOfData));
  }, [REACT_APP_APIKEY, mediaList]);

  return (
    <div className="movies-list">
      <SingleMedia mediaListState={mediaListState} />
    </div>
  );
};
export default MediaList;
