import React from "react";

const navStyle = {
  color: "#888"
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  padding: 0,
  margin: 0
};

const linkStyle = {
  fontSize: "1.25em",
  color: "#444",
  marginRight: "11px",
  padding: "15px 0",
  textAlign: "center",
  textDecoration: "underline"
};

const Nav = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <a style={linkStyle} href="a">
            Women’s
          </a>
        </li>
        <li>
          <a style={linkStyle} href="a">
            Men’s
          </a>
        </li>
        <li>
          <a style={linkStyle} href="a">
            On the Street
          </a>
        </li>
        <li>
          <a style={linkStyle} href="a">
            The Catwalk
          </a>
        </li>
        <li>
          <a style={linkStyle} href="a">
            AdWatch
          </a>
        </li>
        <li>
          <a style={linkStyle} href="a">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
