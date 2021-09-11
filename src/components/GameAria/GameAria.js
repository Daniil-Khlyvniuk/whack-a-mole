import React from 'react';
import HoleWrapper from "./HoleWrapper";
import "./_gameAria.scss"
import Lifes from "../Lifes/Lifes"

const GameAria = () => {
  return (
    <div id={ "game-aria" }>
      <Lifes/>
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