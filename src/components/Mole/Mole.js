import React from 'react';
import "./_mole.scss"
import MoleSVG from "../Images/MoleSVG";
import { useSelector } from "react-redux";

const Mole = ({id}) => {
  const active = useSelector(({ game }) => game.gamePlay.activeMole)

  return (
    <div id={id} className={active === id ? "mole active" : "mole"}>
      <MoleSVG />
    </div>
  );
};

export default Mole;