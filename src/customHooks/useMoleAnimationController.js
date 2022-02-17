import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { gamePlayActions, gamePlaySelectors } from "../Store/gamePlay"
import { moleActions, moleSelectors } from "../Store/mole"


const useMoleAnimationController = () => {
	const dispatch = useDispatch()
	const speed = useSelector(gamePlaySelectors.getSpeed())
	const diffLvl = useSelector(gamePlaySelectors.getDifficultyLevel())
	// const isDiffLvlDynamic =
	// useSelector(gamePlaySelectors.isDynamicDifficultyLevel())
	const speedUpValue = useSelector(gamePlaySelectors.speedUpValue())
	const speedUpTime = useSelector(gamePlaySelectors.speedUpTime())
	// const setIsDiffLvlDynamic = useSelector()
	const molesIDs = useSelector(moleSelectors.getMoleIDs())
	let timer


	const getRandomActiveMole = () => {
		let index = Math.floor(Math.random() * molesIDs.length)

		while ([ 4, 10 ].includes(index)) {
			index = Math.floor(Math.random() * molesIDs.length)
		}
		return molesIDs[index]
	}

	const startAnimation = useCallback(() =>
		// eslint-disable-next-line react-hooks/exhaustive-deps
		timer = setTimeout(() => {
			let activeId = getRandomActiveMole()
			dispatch(moleActions.setActiveMole(activeId))
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, +speed), [ speed ])


	const stopAnimation = useCallback(() => {
		dispatch(moleActions.setActiveMole(-1))
		return clearTimeout(timer)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getDelta = () => {
		return Math.random() + 1
	}

	const speedUp = (diffLvl) => {
		switch (diffLvl) {
			case "normal":
				setTimeout(function fn() {
					const newSpeed = Math.max(550, speed * speedUpValue)
					dispatch(gamePlayActions.setSpeed(newSpeed))
				}, +speedUpTime)
				return
			case "hard":
				let delta = getDelta()
				setTimeout(function fn() {
					delta = getDelta()
					const newSpeed = Math.max(450, speed * speedUpValue)
					dispatch(gamePlayActions.setSpeed(newSpeed))
				}, +speedUpTime * delta)
				return
			default:
				return null
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}

	const setAnimation = useCallback((diffLvl) => {
		switch (diffLvl) {
			case "easy":
				dispatch(gamePlayActions.setIsDifLvlDynamic(false))
				dispatch(gamePlayActions.setSpeed(1200))
				return
			case "normal":
				dispatch(gamePlayActions.setIsDifLvlDynamic(true))
				dispatch(gamePlayActions.setSpeedUpTime(15000))
				dispatch(gamePlayActions.setSpeed(1000))
				return
			case "hard":
				dispatch(gamePlayActions.setIsDifLvlDynamic(true))
				dispatch(gamePlayActions.setSpeedUpTime(9000))
				dispatch(gamePlayActions.setIsSpeedEvently(false))
				dispatch(gamePlayActions.setSpeed(1000))
				return
			default:
				return null
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ diffLvl ])


	return {
		startAnimation,
		stopAnimation,
		timer,
		setAnimation,
		speedUp
	}
}

export default useMoleAnimationController