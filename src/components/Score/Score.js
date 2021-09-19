import React from 'react';
import "./score.scss"
import { useSelector } from "react-redux";
import { gamePlaySelectors } from "../../Store/gamePlay";

const Score = () => {
  const score = useSelector(gamePlaySelectors.getScore())

  return (
    <div className={"score"}>
      <p> Score: {score}</p>
    </div>
  );
};

export default Score;