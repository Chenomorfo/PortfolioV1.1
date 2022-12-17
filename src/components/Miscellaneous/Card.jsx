import React, { useState } from "react";
import { render } from "react-dom";

function Card({ name, content }) {
  const [ChangeContent, setChangeContent] = useState(false);

  const Title = () => {
    return <h2>{name}</h2>;
  };

  const Content = () => {
    const ItemArray = content.map((item) => {
      return (
        <a href={item.link} target="_blank">
          {item.name}
        </a>
      );
    });

    return <div className="Content">{ItemArray}</div>;
  };

  return (
    <div className="Card" onClick={(e) => setChangeContent(!ChangeContent)}>
      {ChangeContent ? Content() : Title()}
    </div>
  );
}

export default Card;
