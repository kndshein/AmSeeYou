import React from "react";
// import { Link } from "react-router-dom";

const Nav = ({ moviesOnly, setMoviesOnly, setAboutOpen }) => {
  return (
    <div className="nav-bar">
      <button onClick={() => setAboutOpen(true)}>About Site</button>
      <div className="img-container">
        <img
          src="https://media.giphy.com/media/XmppNRlrlu2SA/giphy.gif"
          alt="futuristic blob looking thang"
        />
      </div>
      <button
        className={moviesOnly ? "active" : ""}
        onClick={() => {
          moviesOnly ? setMoviesOnly(false) : setMoviesOnly(true);
        }}
      >
        Movies Only
      </button>
    </div>
  );
};

export default Nav;
