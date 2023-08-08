import React from "react";
const headerStyle = {
  color: "lightgray"
};

const titleStyle = {
  color: "red",
  textDecoration: "none",
  fontSize: "2em",
  fontFamily: "Helvetica",
  fontWeight: 60
};

const h3Style = {
  color: "black",
  fontSize: "2.6em",
  fontWeight: 60,
  fontFamily: "Helvetica"
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>
        <a style={titleStyle} href="index.html">
          Sartre’s List
        </a>
      </h1>
      <h3 style={h3Style}>Better-Dressed People</h3>
    </header>
  );
};

export default Header;
