import React, { memo, useCallback, useEffect, useState } from 'react';
import "../GameAria/_gameAria.scss"
import { gamePlayActions, gamePlaySelectors } from "../../Store/gamePlay";
import { useDispatch, useSelector } from "react-redux";
import { moleActions, moleSelectors } from "../../Store/mole";
import { CSSTransition } from "react-transition-group";


const Goal = ({ id }) => {
	let [ caught, setCaught ] = useState(false)
	const lives = useSelector(gamePlaySelectors.getLives())
	const dispatch = useDispatch();
	const isActive = useSelector(moleSelectors.getActiveMole()) === id
	const speed = useSelector(gamePlaySelectors.getSpeed())


	const catching = useCallback(() => {
		setCaught(true)

		dispatch(moleActions.setCaughtMole(id))
		if (lives > 0) dispatch(gamePlayActions.setScore(5))

		setTimeout(() => {
			setCaught(false)
		}, +speed)
	}, [])

	const handleExit = useCallback(() => {
		if (!caught) {
			return dispatch(gamePlayActions.setLives(1))
		}
	}, [])


	useEffect(() => {
		if (lives < 1) dispatch(gamePlayActions.setIsPlaying(false))
	}, [ lives ])


	return (
		<>
			{
				caught
					?
					null
					:
					<CSSTransition
						in={ isActive }
						timeout={ +speed }
						className={ "goal" }
						onExited={ handleExit }
					>
						<div
							onMouseDown={ catching }
							id={ id }
							className={ "goal" }
						/>
					</CSSTransition>
			}
		</>
	)
};

export default memo(Goal);
