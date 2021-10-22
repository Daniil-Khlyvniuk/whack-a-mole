import React, { memo, useEffect, useState } from 'react';
import "./_mole.scss"
import "./animation.css"
import MoleSVG from "../Images/MoleSVG";
import { useSelector } from "react-redux";
import { moleSelectors } from "../../Store/mole";
import { CSSTransition } from "react-transition-group";
import { gamePlaySelectors } from "../../Store/gamePlay";
import UseMovingAnimationStyles from "../../customHooks/useMovingAnimationStyles";


const Mole = ({ id }) => {
	const isActive = +useSelector(moleSelectors.getActiveMole()) === id
	const active1 = +useSelector(moleSelectors.getActiveMole())
	const speed = useSelector(gamePlaySelectors.getSpeed())
	const classes = UseMovingAnimationStyles("mole")

	// useEffect(() => {
	// 	if (!active) return
	// 	setIsActive(true)
	//
	// 	setTimeout(() => {
	// 		active && setIsActive(true)
	//
	// 	}, +speed)
	//
	// }, [ active ])


	return (
		<CSSTransition
			in={ isActive }
			timeout={ +speed }
			className={ isActive ? `mole ${ classes.active }` : "mole" }

			// onExiting={ () => setIsActive(true) }

		>
			<div>
				<MoleSVG/>
			</div>
		</CSSTransition>
	);
};

export default memo(Mole);