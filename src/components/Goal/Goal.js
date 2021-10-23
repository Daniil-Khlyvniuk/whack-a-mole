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
import useMoleAnimationController from "../../customHooks/useMoleAnimationController";

const Goal = ({ id }) => {
	let t0 = 0
	let t1 = 0
	let time = 0
	let isActive = useSelector(moleSelectors.getActiveMole()) === id

	const [ caught, setCaught ] = useState(false)
	const [ click, setClick ] = useState(0)
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
		setClick(1)
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
			setClick(0)
		}, +speed)
	}

	const handleExit = () => {
		if (!click && !caught && isPlaying && !updateTrigger) {
			console.log(isActive)
			dispatch(gamePlayActions.livesDecrement(1))
		}

		setUpdateTrigger(isActive)
	}


	return (
		<CSSTransition
			in={ updateTrigger && isActive }
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
