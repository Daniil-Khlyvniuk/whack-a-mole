import React, { memo, useCallback, useEffect, useState } from 'react';
import "../GameAria/_gameAria.scss"
import { gamePlayActions, gamePlaySelectors } from "../../Store/gamePlay";
import { useDispatch, useSelector } from "react-redux";
import { moleActions, moleSelectors } from "../../Store/mole";
import { CSSTransition } from "react-transition-group";
import UseMovingAnimationStyles from "../../customHooks/useMovingAnimationStyles";
import useStyles from "./styles";


const Goal = ({ id }) => {
	const isActive = useSelector(moleSelectors.getActiveMole()) === id
	const [ caught, setCaught ] = useState(false)
	const [ updateTrigger, setUpdateTrigger ] = useState(true)
	const isPlaying = useSelector(gamePlaySelectors.getIsPlaying())
	const lives = useSelector(gamePlaySelectors.getLives())
	const dispatch = useDispatch();
	const speed = useSelector(gamePlaySelectors.getSpeed())
	const { active } = UseMovingAnimationStyles()
	const { goal } = useStyles()


	useEffect(() => () => {
		setUpdateTrigger(true)
	}, [ isActive, caught, updateTrigger ])

	const catching = useCallback(() => {
		if (lives > 0) dispatch(gamePlayActions.setScore(5))

		setCaught(true)
		dispatch(moleActions.setCaughtMole(id))
	}, [ speed ])

	const handleEnter = useCallback(() => {
		setTimeout(() => {
			setUpdateTrigger(false)
			setCaught(false)
			dispatch(moleActions.setCaughtMole(-1))
		}, +speed)
	}, [ speed ])

	const handleExit = useCallback(() => {
		if (isPlaying && !caught) {
			dispatch(gamePlayActions.livesDecrement(1))
		}
	}, [ isPlaying, caught ])

	return (
		<CSSTransition
			in={ isActive && updateTrigger }
			timeout={ +speed }
			classNames={ {
				enter: goal,
				enterActive: active,
				enterDone: goal,
				exit: goal,
				exitActive: goal,
				exitDone: goal,
			} }
			onEntering={ handleEnter }
			onExit={ handleExit }
		>
			<div onMouseDown={ caught ? null : catching }>
			</div>
		</CSSTransition>
	)
};

export default memo(Goal);
