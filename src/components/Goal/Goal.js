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
	let isActive = useSelector(moleSelectors.getActiveMole()) === id

	const [ caught, setCaught ] = useState(false)
	const [ updateTrigger, setUpdateTrigger ] = useState(true)
	const caughtId = useSelector(moleSelectors.getCaughtMole())
	const isPlaying = useSelector(gamePlaySelectors.getIsPlaying())
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
			time = t1 - t0
		}
		if (lives > 0) {
			dispatch(gamePlayActions.setScore(5))
		}

		setCaught(true)
		dispatch(moleActions.setCaughtMole(id))

		setTimeout(() => {
			setCaught(false)

			t0 = 0
			t1 = 0
		}, speed - time)
	}

	const handleEnter = () => {
		setTimeout(() => {
			setUpdateTrigger(false)
		}, +speed)
	}

	const handleExit = () => {
		if ((caughtId !== id) && isPlaying) dispatch(gamePlayActions.livesDecrement(1))
		dispatch(moleActions.setCaughtMole(-1))
		setUpdateTrigger(isActive)
	}


	return (
		<CSSTransition
			in={ isActive && updateTrigger }
			timeout={ +speed }
			classNames={ goal }
			onEnter={ handleEnter }
			onExit={ handleExit }
		>
			<div
				className={ isActive ? `${ goal } ${ active }` : goal }
				onMouseDown={ caught ? null : catching }
				id={ id }
			/>
		</CSSTransition>
	)
};

export default memo(Goal);
