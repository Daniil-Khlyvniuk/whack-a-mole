import React, { useEffect, useRef, useState } from 'react';
import hummerPNG from "../../assets/img/hummer.png"
import { CSSTransition } from "react-transition-group";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { gamePlaySelectors } from "../../Store/gamePlay";


const Hummer = () => {
	const didStart = useSelector(gamePlaySelectors.getIsPlaying())
	const [ x, setX ] = useState(0)
	const [ y, setY ] = useState(0)
	const [ isHitAnimActive, setIsStartAnimActive ] = useState(false)
	const [ widthPX, setWidthPX ] = useState()
	const [ heightPX, setHeightPX ] = useState()
	const { active, hummerClass } = useStyles()
	const hummer = useRef()


	const handleMoseMove = (ev) => {
		setX(ev.x)
		setY(ev.y)
	}
	const handleMoseDown = () => {
		setIsStartAnimActive(true)
	}
	const handleMoseUp = () => {
		setIsStartAnimActive(false)
	}


	useEffect(() => {
		document.addEventListener("mousemove", handleMoseMove)
		document.addEventListener("mousedown", handleMoseDown)
		document.addEventListener("mouseup", handleMoseUp)
		setWidthPX(hummer?.current?.offsetWidth)
		setHeightPX(hummer?.current?.offsetHeight)

		return () => {
			document.removeEventListener("mousemove", handleMoseMove)
			document.addEventListener("mousedown", handleMoseDown)
			document.addEventListener("mouseup", handleMoseUp)
		}
	}, [ didStart ])


	return didStart && (
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