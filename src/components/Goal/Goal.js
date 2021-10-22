import React, { memo, useCallback, useEffect, useState } from 'react';
import "../GameAria/_gameAria.scss"
import { gamePlayActions, gamePlaySelectors } from "../../Store/gamePlay";
import { useDispatch, useSelector } from "react-redux";
import { moleActions, moleSelectors } from "../../Store/mole";
import { CSSTransition } from "react-transition-group";
import useMovingAnimationStyles from "../../customHooks/useMovingAnimationStyles"
import UseMovingAnimationStyles from "../../customHooks/useMovingAnimationStyles";
import { jsx, css, Global, ClassNames } from '@emotion/react'
import useStyles from "./styles";

const Goal = ({ id }) => {
	let t0 = 0
	let t1 = 0
	let time = 0
	const isActive = useSelector(moleSelectors.getActiveMole()) === id
	let [ caught, setCaught ] = useState(false)
	const lives = useSelector(gamePlaySelectors.getLives())
	const dispatch = useDispatch();
	const speed = useSelector(gamePlaySelectors.getSpeed())
	const { active } = UseMovingAnimationStyles()
	const { goal } = useStyles()
	if (isActive) {
		t0 = performance.now()
	}

	const catching = () => {
		if (isActive) {
			t1 = performance.now()
		}
		setCaught(true)
		dispatch(moleActions.setCaughtMole(id))

		if (lives > 0) {
			dispatch(gamePlayActions.setScore(5))
		}

		time = Math.floor(t1 - t0) - 10
		setTimeout(() => {
			setCaught(false)
		}, speed - time)
	}

	const handleExit = () => {
		if (!caught) {
			dispatch(gamePlayActions.livesDecrement(1))
		}
		t0 = 0
		t1 = 0
	}

	return !caught && (
		<CSSTransition
			in={ isActive }
			timeout={ +speed }
			className={ isActive ? `${ goal } ${ active }` : goal }
			onExit={ handleExit }
		>
			<div
				onMouseDown={ catching }
				id={ id }
			/>
		</CSSTransition>
	)
};

export default memo(Goal);
