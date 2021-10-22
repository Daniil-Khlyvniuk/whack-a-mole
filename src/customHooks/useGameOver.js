import React from 'react';
import { useDispatch } from "react-redux";
import { moleActions } from "../Store/mole";
import { gamePlayActions } from "../Store/gamePlay";

const UseGameOver = () => {
	const dispatch = useDispatch()

	const backToInitState = () => {
		dispatch(moleActions.replay())
		dispatch(gamePlayActions.replay())
	}


	return {
		backToInitState
	}
};

export default UseGameOver;