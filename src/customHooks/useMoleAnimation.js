import React, { useCallback } from 'react';
import { moleActions, moleSelectors } from "../Store/mole";
import { useDispatch, useSelector } from "react-redux";
import { gamePlaySelectors } from "../Store/gamePlay";

const useMoleAnimation = () => {
	const dispatch = useDispatch()
	const speed = useSelector(gamePlaySelectors.getSpeed())
	const activeMole = useSelector(moleSelectors.getActiveMole())
	let timer

	const getRandomActiveMole = () => {
		const molesIDs = [ 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13 ]
		let index = Math.floor(Math.random() * molesIDs.length)

		while (molesIDs[ index ] === activeMole || [ 4, 10 ].includes(index)) {
			index = Math.floor(Math.random() * molesIDs.length)
		}
		return molesIDs[ index ]
	}

	const startAnimation = () => timer = setTimeout(() => {
		let activeId = getRandomActiveMole()
		dispatch(moleActions.setActiveMole(activeId))
	}, +speed)

	const stopAnimation = useCallback(() => {
		return clearTimeout(timer)
	}, [])


	return {
		startAnimation,
		stopAnimation,
		timer
	}
};

export default useMoleAnimation;