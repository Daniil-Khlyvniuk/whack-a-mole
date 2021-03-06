import React, { memo } from 'react';
import "./mole.css"
import "./animation.css"
import MoleSVG from "../Images/MoleSVG";
import { useSelector } from "react-redux";
import { moleSelectors } from "../../Store/mole";
import { CSSTransition } from "react-transition-group";
import { gamePlaySelectors } from "../../Store/gamePlay";
import UseMovingAnimationStyles from "../../customHooks/useMovingAnimationStyles";


const Mole = ({ id }) => {
	const didStart = useSelector(gamePlaySelectors.getIsPlaying())
	const isActive = +useSelector(moleSelectors.getActiveMole()) === id
	const caught = useSelector(moleSelectors.getCaughtMole()) === id
	const speed = useSelector(gamePlaySelectors.getSpeed())
	const classes = UseMovingAnimationStyles("mole")
	return (
		<CSSTransition
			in={ isActive && didStart }
			timeout={ +speed }
			className={ isActive && didStart ? `mole ${ classes.active }` : "mole" }
		>
			<div>
				<MoleSVG isCaught={ caught }/>
			</div>
		</CSSTransition>
	);
};

export default memo(Mole);