import React, { useState,useEffect } from "react";

function toDegrees(grades) {
  return grades * (Math.PI / 180);
}

function MindMap({ name, content }) {
  const [Orbit, setOrbit] = useState(false);

  const makeOrbit = () => {
    if (content == null) return;

    const grades = parseFloat(360 / content.length);
    let initial = 0;

    let ItemList = content.map((item) => {
      let styles = {
        transform: `translate(
          ${Math.sin(toDegrees(initial)) * 275}px,
        ${Math.cos(toDegrees(initial)) * -275}px
        )`,
        opacity: 1,
      };

      initial += grades;

      return (
        <div style={Orbit ? styles : null} className="Item">
          {item}
        </div>
      );
    });

    return <div>{ItemList}</div>;
  };

  let actualWidth = window.innerWidth
  let midWidth = 63;

  const setSunSize = ()=>{
    if (actualWidth > 990) 
    return (actualWidth * 95)/1480

    return midWidth;
  }

  let sunStyle ={
    scale : `${setSunSize()}%`    
  }

  useEffect(() => {

    window.addEventListener('resize',()=>actualWidth = window.innerWidth)

  }, [actualWidth])
  

  return (
    <div style={(window.innerWidth < 1480)? sunStyle:null} 
    className="MindMap" onClick={(e) => setOrbit(!Orbit)}>
      <h1>{name}</h1>
      {makeOrbit()}
    </div>
  );
}

export default MindMap;
