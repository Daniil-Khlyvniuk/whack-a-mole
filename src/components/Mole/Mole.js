import React, { useEffect } from 'react';
import "./_mole.scss"
import MoleSVG from "../Images/MoleSVG";
import { useDispatch, useSelector } from "react-redux";
import { moleSelectors } from "../../Store/mole";

const Mole = ({id}) => {
  const active = useSelector(moleSelectors.getActiveMole())
  return (
    <div id={id}  className={active === id ? "mole active" : "mole"}>
      <MoleSVG />
    </div>
  );
};

export default Mole;