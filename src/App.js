import React from "react";

import AllMedia from "./pages/AllMedia";
import Nav from "./components/Nav";

function App() {
  const [moviesOnly, setMoviesOnly] = React.useState(true);

  return (
    <div className="App">
      <Nav moviesOnly={moviesOnly} setMoviesOnly={setMoviesOnly} />
      <AllMedia moviesOnly={moviesOnly} />
    </div>
  );
}

export default App;
