import React from 'react';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	goal: {
	cursor: "pointer",
	position: "absolute",
	top: "100%",
	left: "20%",
	right: "20%",
	bottom: "-25%",
	zIndex: "5",
	borderRadius: "25%",
	backgroundColor: "#00000000",
	// backgroundColor: "#00000055",
}
})

export default useStyles;