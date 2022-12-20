import React from "react";
import "./Project.css";
import Card from "./Miscellaneous/Card";
import gamesIcon from "../assets/gamepad-solid.svg";


function Project() {
  let java = [
    {
      name: "MDI Program",
      link: "https://github.com/Chenomorfo/MDI-Java-Program",
    },
    {
      name: "Snake Game",
      link: "https://github.com/Chenomorfo/Java-Snake-Game",
    },
  ];

  let js = [
    { name: "CRUD with PHP", link: "https://github.com/Chenomorfo/phpJsCRUD" },
    { name: "GODs API", link: "https://github.com/Chenomorfo/godsAPI" },
    {
      name: "React Practice",
      link: "https://github.com/Chenomorfo/react-practice",
    },
    {
      name: "School Programs",
      link: "https://github.com/Chenomorfo/HernandezVI",
    },
    { name: "Ideas with CSS", link: "https://github.com/Chenomorfo/CssIdeas" },
  ];

  let csharp = [
    {
      name: "School Programs",
      link: "https://github.com/Chenomorfo/School-Csharp",
    },
  ];

  let minigames = [
    { name: "Snake (Java)", link: "https://github.com/Chenomorfo/Java-Snake-Game" },
    { name: "Snake (JS)", link: "https://github.com/Chenomorfo/Snake-WebGame" },
    { name: "Matatena (JS)", link: "https://github.com/Chenomorfo/Matatena-WebGame" },
  ];

  let icon = <img srcSet={gamesIcon} />

  return (
    <div className="Project">
      <Card name="JAVA" content={java} />
      <Card name="JS" content={js} />
      <Card name="C#" content={csharp} />
      <Card name={icon} content={minigames} />
    </div>
  );
}

export default Project;
