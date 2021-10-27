import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";
import { route } from "express/lib/router";

const useStyles = createUseStyles({
	'@keyframes hit': {
		"0%": {
			transform: "rotate(-15deg)"
		},
		"50%": {
			transform: "rotate(5deg)"
		},
		"100%": {
			transform: "rotate(-15deg)"
		},
	},

	hummerClass: {
		position: "absolute",
		zIndex: "4",
		width: "30%",
		aspectRatio: "3 / 1.3",
		pointerEvents: "none",
		transform: "rotate(-15deg)",
	},

	active: {
		animation: `.15s cubic-bezier(1, 0, 0, 1) 1 $hit forwards`,
	},
})

export default useStyles;