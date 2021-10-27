import React, { memo, useEffect, useMemo, useState } from 'react';
import HoleWrapper from "./HoleWrapper";
import "./_gameAria.scss"
import Lives from "../Lifes/Lifes"
import Score from "../Score/Score";
import { TransitionGroup } from "react-transition-group";
import Hummer from "../Hummer/Hummer";
import UseHummerMove from "../../customHooks/useHummerMove";


const GameAria = () => {
	const holes = useMemo(() => ([ ...Array(15) ].map((e, i) =>
		[ 0, 4, 10, 14 ].includes(i)
			?
			<div key={ i }/>
			:
			<HoleWrapper key={ i } id={ i }/>
	)), [])

	const [ x, setX ] = useState(0)
	const [ y, setY ] = useState(0)
	//
	//
	console.log("render")
	// const handleMoseMove = (ev) => {
	// 	setX(ev.x)
	// 	setY(ev.y)
	// }

	// const handleMoseMove = (ev) => {
	// 	console.log(ev.x, ev.y)
	// 	setX(prevState => prevState = ev.x)
	// 	setY(prevState => prevState = ev.y)
	// }
	// useEffect(() => {
	// 	document.addEventListener("mousemove", (ev) => {
	// 		console.log(ev.x, ev.y)
	// 		setX(ev.x)
	// 		setY(ev.y)
	// 	})
	// 	return () => {
	// 		document.removeEventListener("mousemove", (ev) => handleMoseMove)
	// 	}
	// }, [])


	return (
		<div id={ "game-aria" }>
			<Lives/>
			<Score/>
			<TransitionGroup id={ "hole-field" }>
				{ holes }
			</TransitionGroup>
			<Hummer x={ x } y={ y }/>
		</div>
	);
};


export default memo(GameAria);