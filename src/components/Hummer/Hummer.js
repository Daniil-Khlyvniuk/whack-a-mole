import React, { useEffect, useRef, useState } from 'react';
import hummerPNG from "../../assets/img/hummer.png"
import UseHummerMove from "../../customHooks/useHummerMove";
import { CSSTransition } from "react-transition-group";
import useStyles from "./styles";

const Hummer = () => {
	const [ x, setX ] = useState(0)
	const [ y, setY ] = useState(0)
	const [ isHitAnimActive, setIsStartAnimActive ] = useState(false)
	const hummer = useRef(null)
	const [ widthPX, setWidthPX ] = useState()
	const [ heightPX, setHeightPX ] = useState()
	const { active, exitActive, hummerClass } = useStyles()

	const handleMoseMove = (ev) => {
		setX(ev.x)
		setY(ev.y)
	}
	const handleMoseDown = (ev) => {
		setIsStartAnimActive(true)
		console.log("handleMoseDown")
	}
	const handleMoseUp = (ev) => {
		setIsStartAnimActive(false)
		console.log("handleMoseUp")

	}


	useEffect(() => {
		document.addEventListener("mousemove", handleMoseMove)
		document.addEventListener("mousedown", handleMoseDown)
		document.addEventListener("mouseup", handleMoseUp)
		setWidthPX(hummer.current.offsetWidth)
		setHeightPX(hummer.current.offsetHeight)
		return () => {
			document.removeEventListener("mousemove", handleMoseMove)
		}
	}, [])


	return (
		<CSSTransition
			in={ isHitAnimActive }
			timeout={ 150 }
			classNames={ {
				enter: active,
			} }
		>
			<div
				ref={ hummer }
				className={ hummerClass }
				style={ {
					top: `calc(${ y }px - ${ heightPX - 30 }px)`,
					left: `calc(${ x }px - ${ widthPX * 0.85 }px)`,
				} }
			>
				<img
					style={ {
						width: "100%",
						aspectRatio: "inherit",
						pointerEvents: "none"
					} }
					src={ hummerPNG } alt={ "hummer" }/>
			</div>
		</CSSTransition>
	);
};

export default Hummer;