import "./css/App.css";
import { Switch, Route } from "react-router-dom";

import AllMovies from "./pages/AllMovies";
import WatchedMovies from "./pages/WatchedMovies";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <AllMovies />
        </Route>
        <Route path="/watched">
          <WatchedMovies />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
