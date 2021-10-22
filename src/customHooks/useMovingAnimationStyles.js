import React from 'react';
import { createUseStyles } from 'react-jss'
import { useSelector } from "react-redux";
import { gamePlaySelectors } from "../Store/gamePlay";
import { css, keyframes } from "@emotion/react";


const UseMovingAnimationStyles = () => {
	const speed = useSelector(gamePlaySelectors.getSpeed())

	const useStyles = createUseStyles({
		'@keyframes moving': {
			"0%": {
				top: "80%"
			},
			"50%": {
				top: "0"
			},
			"100%": {
				top: "80%"
			},
		},

		active: {
			animation: `${ speed }ms cubic-bezier(1, 0, 0, 1) infinite $moving forwards`,
		},
	})

	return useStyles()
};


export default UseMovingAnimationStyles;