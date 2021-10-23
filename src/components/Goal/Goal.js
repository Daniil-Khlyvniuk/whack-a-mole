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

	const score = useSelector(gamePlaySelectors.getScore())
	const [ caught, setCaught ] = useState(false)
	const [ test, setTest ] = useState(true)
	const caughtId = useSelector(moleSelectors.getCaughtMole())

	let [ loosen, setLoosen ] = useState(false)
	const lives = useSelector(gamePlaySelectors.getLives())
	const dispatch = useDispatch();
	const speed = useSelector(gamePlaySelectors.getSpeed())
	const { active } = UseMovingAnimationStyles()
	const { goal } = useStyles()
	if (isActive) {
		t0 = performance.now()
	}

	// if (test) {
	// 	setTimeout(() => {
	// 		setTest(false)
	// 		console.log("setTEst")
	// 	}, +speed - t0)
	// }


	const catching = () => {
		let repeatsCount = 1

		if (isActive) {
			t1 = performance.now()
			time = t1 - t0

			if (time > speed) {
				repeatsCount = time / speed

			}
		}
		if (lives > 0) {
			dispatch(gamePlayActions.setScore(5))
		}

		setCaught(true)
		dispatch(moleActions.setCaughtMole(id))

		setTimeout(() => {
			setCaught(false)
			dispatch(moleActions.setCaughtMole(-1))

			t0 = 0
			t1 = 0
		}, speed - time)
	}

	const handleExit = () => {
		console.log("handleExit")
		setCaught((state) => !state)
		setCaught((state) => !state)
		if (caughtId === id) {
			// setLoosen(true)
			// dispatch(gamePlayActions.livesDecrement(1))
		}
	}


	return (
		<CSSTransition
			in={ isActive && test }
			timeout={ +speed }
			classNames={ goal }
			onEnter={ () => {
				console.log("ENTER")
				setTimeout(() => {
					setTest(false)
				}, +speed)
			} }
			onExit={ () => {
				if (caughtId !== id) dispatch(gamePlayActions.livesDecrement(1))
				dispatch(moleActions.setCaughtMole(-1))
				setTest(isActive)
			} }
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
