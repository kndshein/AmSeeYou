import React from "react";
// import { Switch, Route } from "react-router-dom";

import AllMovies from "./pages/AllMovies";
// import WatchedMovies from "./pages/WatchedMovies";
import Nav from "./components/Nav";

function App() {
  // const [watchedMoviesState, setWatchedMoviesState] = React.useState([]);

  // const handleClickAddWatched = (element) => {
  //   console.log("handleClick", element);
  //   setWatchedMoviesState([...watchedMoviesState, element]);
  // };

  return (
    <div className="App">
      <Nav />
      <AllMovies />
    </div>
  );
}

export default App;
