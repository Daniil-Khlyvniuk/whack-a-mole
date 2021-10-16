import React, { memo } from 'react';
import "./_mole.scss"
import "./animation.css"
import MoleSVG from "../Images/MoleSVG";
import { useSelector } from "react-redux";
import { moleSelectors } from "../../Store/mole";
import { CSSTransition } from "react-transition-group";
import { gamePlaySelectors } from "../../Store/gamePlay";


const Mole = ({ id }) => {
	const isActive = +useSelector(moleSelectors.getActiveMole()) === id
	const speed = useSelector(gamePlaySelectors.getSpeed())

	return (
		<CSSTransition
			in={ isActive }
			timeout={ +speed }
			className={ "mole" }
		>
			<div id={ id }>
				<MoleSVG/>
			</div>
		</CSSTransition>
	);
};

export default memo(Mole);