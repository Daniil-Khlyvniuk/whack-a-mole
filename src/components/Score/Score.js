import React from 'react';
import "./score.scss"
import { useSelector } from "react-redux";

const Score = () => {
  const score = useSelector(({ game }) => game.gamePlay.score)

  return (
    <div className={"score"}>
      <p> Score: {score}</p>
    </div>
  );
};

export default Score;