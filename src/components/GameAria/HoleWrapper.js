import React, { memo, useEffect, useMemo, useState } from 'react';
import "./_gameAria.scss"
import Mole from "../Mole/Mole";
import { useSelector } from "react-redux";
import Goal from "../Goal/Goal";
import { moleSelectors } from "../../Store/mole";
import { CSSTransition } from "react-transition-group";
import { gamePlaySelectors } from "../../Store/gamePlay";

const HoleWrapper = ({ id }) => {
	const active = useSelector(moleSelectors.getActiveMole())
	const speed = useSelector(gamePlaySelectors.getSpeed())
	let [ isActive, setIsActive ] = useState(true)

	// useEffect(() => {
	// 	setIsActive(true)
	//
	// 	setTimeout(() => {
	// 		setIsActive(false)
	// 	}, speed)
	// }, [ isActive ])

	return (
		<div className={ "hole-wrapper" }>
			<Mole id={ id }/>
			<Goal id={ id }/>

			<div className={ "hole" }/>
			<div className={ "overlap" }/>
			<div className={ "overlap_1" }/>
		</div>
	);
};

export default memo(HoleWrapper);