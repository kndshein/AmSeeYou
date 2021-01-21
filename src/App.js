import { Switch, Route } from "react-router-dom";

import AllMovies from "./pages/AllMovies";
import WatchedMovies from "./pages/WatchedMovies";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <AllMovies />
    </div>
  );
}

export default App;
