import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const pages = [
    { name: "about me", path: "/" },
    { name: "resume", path: "/resume" },
    { name: "projects", path: "/projects" },
    { name: "articles", path: "/articles" },
  ];

  return (
    <div className="masthead">
      <Link to="/">
        <center>
        <h1 className="site-title">♡ sarah zhang ♡</h1>
        </center>
      </Link>

      <div className="nav-links">
      <center>
        {pages.map(({ name, path }) => (
          <Link to={path}>
            <li className="nav-item">{name}</li>
          </Link>
        ))}
        </center>
      </div>
    </div>
  );
};

export default Header;
