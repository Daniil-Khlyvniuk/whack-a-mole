import React from 'react';
import HoleWrapper from "./HoleWrapper";
import "./_gameAria.scss"
import Lives from "../Lifes/Lifes"
import Score from "../Score/Score";

const GameAria = () => {
  return (
    <div id={ "game-aria" }>
      <Lives/>
      <Score/>
      <div id={ "hole-field" }>
        {
          [ ...Array(15) ].map((e, i) =>
              [ 0, 4, 10, 14 ].includes(i)
                ?
              <div key={ i }/>
                :
              <HoleWrapper id={i} key={ i }/>
          )
        }
      </div>
    </div>
  );
};

export default GameAria;