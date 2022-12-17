import React from "react";
import "./Skills.css";
import MindMap from "./Miscellaneous/MindMap";

function Skills() {
  let Iknow = ["C#", "Java", "JS", "C++"];
  let Iwish = ["Lua", "Kotlin", "Swift", "Python", "Rust", "Ruby"];
  let Iused = [
    "NodeJs",
    "Boot Strap",
    "Unity",
    "Handle Bars",
    "JQuery",
    "Mongo DB",
    "MySQL",
  ];

  return (
    <div className="Skills">
      <MindMap name="I used these technologies" content={Iused} />
      <MindMap name="I know these languages" content={Iknow} />
      <MindMap name="I want to learn these technologies" content={Iwish} />
    </div>
  );
}

export default Skills;
