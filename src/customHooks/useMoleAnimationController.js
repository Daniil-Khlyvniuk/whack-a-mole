import React, { useCallback } from 'react';
import { moleActions, moleSelectors } from "../Store/mole";
import { useDispatch, useSelector } from "react-redux";
import { gamePlaySelectors } from "../Store/gamePlay";

const useMoleAnimationController = () => {
	const dispatch = useDispatch()
	const speed = useSelector(gamePlaySelectors.getSpeed())
	const molesIDs = useSelector(moleSelectors.getMoleIDs())
	let timer

	const getRandomActiveMole = () => {
		let index = Math.floor(Math.random() * molesIDs.length)

		while ([ 4, 10 ].includes(index)) {
			index = Math.floor(Math.random() * molesIDs.length)
		}
		return molesIDs[index]
	}

	const startAnimation = useCallback(() => timer = setTimeout(() => {
		let activeId = getRandomActiveMole()
		dispatch(moleActions.setActiveMole(activeId))
	}, +speed), [])

	const stopAnimation = useCallback(() => {
		dispatch(moleActions.setActiveMole(-1))
		return clearTimeout(timer)
	}, [])


	return {
		startAnimation,
		stopAnimation,
		timer,
	}
};

export default useMoleAnimationController;