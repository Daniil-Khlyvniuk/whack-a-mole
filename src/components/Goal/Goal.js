import React, { memo, useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CSSTransition } from "react-transition-group"
import UseMovingAnimationStyles
	from "../../customHooks/useMovingAnimationStyles"
import { gamePlayActions, gamePlaySelectors } from "../../Store/gamePlay"
import { moleActions, moleSelectors } from "../../Store/mole"
import "../GameAria/gameAria.css"
import useStyles from "./styles"


const Goal = ({ id }) => {
	const isActive = useSelector(moleSelectors.getActiveMole()) === id
	const didStart = useSelector(gamePlaySelectors.getIsPlaying())

	const [ caught, setCaught ] = useState(false)
	const [ updateTrigger, setUpdateTrigger ] = useState(true)
	const isPlaying = useSelector(gamePlaySelectors.getIsPlaying())
	const lives = useSelector(gamePlaySelectors.getLives())
	const dispatch = useDispatch()
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ speed ])

	const handleEnter = useCallback(() => {
		setTimeout(() => {
			setUpdateTrigger(false)
			setCaught(false)
			dispatch(moleActions.setCaughtMole(-1))
		}, +speed)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ speed ])

	const handleExit = useCallback(() => {
		if (isPlaying && !caught) {
			// dispatch(gamePlayActions.livesDecrement(1))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ isPlaying, caught ])

	return (
		<CSSTransition
			in={ isActive && updateTrigger && didStart }
			timeout={ +speed }
			classNames={ {
				enterActive: active
			} }
			onEntering={ handleEnter }
			onExit={ handleExit }
		>
			<div className={ goal } onMouseDown={ caught ? null : catching } />
		</CSSTransition>
	)
}

export default memo(Goal)
