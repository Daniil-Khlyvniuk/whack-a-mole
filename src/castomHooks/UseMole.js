import React from 'react';
import { moleActions, moleSelectors } from "../Store/mole";
import { useDispatch, useSelector } from "react-redux";

const getRandomActiveMole = () => {
	const molesIDs = [ 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13 ]
	let index = Math.floor(Math.random() * molesIDs.length)
	return molesIDs[index]
};


const UseMole = () => {
	let activeMole = useSelector(moleSelectors.getActiveMole())
	let activeId = getRandomActiveMole();
	const dispatch = useDispatch()

	 const test = () => {
		 setInterval(() => {
			 console.log(activeMole === activeId)
			 console.log(activeMole)
			 console.log(activeId)
			 if (activeMole === activeId) dispatch(moleActions.setActiveMole(-1))

			 dispatch(moleActions.setActiveMole(activeId))
		 }, 600)
	 }
	 return test
};

export default UseMole
