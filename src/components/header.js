import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const pages = [
    { name: "about me", path: "/about-me" },
    { name: "resume", path: "/resume" },
    { name: "projects", path: "/projects" },
    { name: "articles", path: "/articles" },
  ];

  return (
    <div className="masthead">
      <Link to="/">
        <h1 className="site-title">♡ sarah zhang ♡</h1>
      </Link>

      <div className="nav-links">
        {pages.map(({ name, path }) => (
          <Link to={path}>
            <li className="nav-item">{name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
