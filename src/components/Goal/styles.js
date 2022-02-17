import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	goal: {
		position: "absolute",
		top: "80%",
		left: "15%",
		right: "15%",
		bottom: "-25%",
		zIndex: "5",
		borderRadius: "25%",
		backgroundColor: "#00000000",
		// backgroundColor: "#00000055",
	}
})

export default useStyles;