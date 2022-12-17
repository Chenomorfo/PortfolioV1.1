import React from "react";

function Preview({ name, game }) {
  return (
    <a href={game.link} target="_blank">
      <div className="Preview">
        <h2>{name}</h2>
        <img alt="" srcSet={game.gif} />
      </div>
    </a>
  );
}

export default Preview;
