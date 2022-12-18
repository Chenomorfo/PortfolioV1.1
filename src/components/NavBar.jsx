import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

//Icons
import minigames from "../assets/gamepad-solid.svg";
import aboutMe from "../assets/user-solid.svg";
import projects from "../assets/compass-drafting-solid.svg";
import skills from "../assets/chess-knight-solid.svg";
import menu from "../assets/folder-solid.svg";
import openMenu from "../assets/folder-open-solid.svg";

function toDegrees(grades) {
  return grades * (Math.PI / 180);
}

function NavBar() {
  const [dimensions, setDimensions] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    setDimensions(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const TextIcon = (text, icon) => {
    if (dimensions > 933) {
      return text;
    }
    return <img srcSet={icon} onClick={(e) => setMenuOpen(!menuOpen)} />;
  };

  const dynamicMenu = (position) => {
    if (dimensions > 933) return;

    let location = 205 / position;

    let styles = {
      transform: `translate(
        ${Math.sin(toDegrees(location)) * 175}px,
      ${Math.cos(toDegrees(location)) * 175}px
      )`,
      opacity: 1,
      visibility: "visible",
    };

    return styles;
  };

  return (
    <div className="NavBar">
      {" "}
      {TextIcon("", menuOpen ? openMenu : menu)}
      <ul>
        <li style={menuOpen ? dynamicMenu(1) : null}>
          <Link to="PortfolioV1.1/">{TextIcon("About Me", aboutMe)}</Link>
        </li>
        <li style={menuOpen ? dynamicMenu(2) : null}>
          <Link to="PortfolioV1.1/Projects">{TextIcon("Projects", projects)}</Link>
        </li>
        <li style={menuOpen ? dynamicMenu(-1) : null}>
          <Link to="PortfolioV1.1/Skills">{TextIcon("Skills", skills)}</Link>
        </li>
        <li style={menuOpen ? dynamicMenu(-2) : null}>
          <Link to="PortfolioV1.1/Minigames">{TextIcon("Mini Games", minigames)}</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
