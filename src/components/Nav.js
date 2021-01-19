import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav-bar">
      <Link to="/" className="nav-list">
        Movies List
      </Link>
      <img src="https://media.giphy.com/media/XmppNRlrlu2SA/giphy.gif" />
      <Link to="/watched" className="nav-list">
        Watched List
      </Link>
    </div>
  );
};

export default Nav;
