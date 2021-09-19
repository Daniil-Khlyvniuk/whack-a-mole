import React, { useEffect } from 'react';
import "./_gameAria.scss"
import Mole from "../Mole/Mole";
import { useDispatch, useSelector } from "react-redux";
import Goal from "../Goal/Goal";
import { moleSelectors } from "../../Store/mole";

const HoleWrapper = ({ id }) => {
  const active = useSelector(moleSelectors.getActiveMole())

  return (
    <div className={ "hole-wrapper" }>
      <Mole id={ id }/>
      {
        active === id
        &&
        <Goal id={ id }/>
      }
      {/*<div id={ id } onMouseDown={ catching } className={ active === id ? "goal active" : "goal" }/>*/}
      <div className={ "hole" }/>
      <div className={ "overlap" }/>
      <div className={ "overlap_1" }/>
    </div>
  );
};

export default HoleWrapper;