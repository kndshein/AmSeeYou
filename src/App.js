import React, { useState } from "react";

import AllMedia from "./pages/AllMedia";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  const [moviesOnly, setMoviesOnly] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="App">
      {aboutOpen && <About setAboutOpen={setAboutOpen} />}
      <Nav
        moviesOnly={moviesOnly}
        setMoviesOnly={setMoviesOnly}
        setAboutOpen={setAboutOpen}
      />
      <AllMedia moviesOnly={moviesOnly} />
    </div>
  );
}

export default App;
