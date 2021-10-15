import React from 'react';
import HoleWrapper from "./HoleWrapper";
import "./_gameAria.scss"
import "../Mole/_mole.scss"
import "../Mole/animation.css"
import Lives from "../Lifes/Lifes"
import Score from "../Score/Score";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const GameAria = () => {


	const holes = [ ...Array(15) ].map((e, i) =>
		[ 0, 4, 10, 14 ].includes(i)
			?
			<div key={ i }/>
			:
			<HoleWrapper key={ i } id={ i }/>
	)

	return (
		<div id={ "game-aria" }>
			<Lives/>
			<Score/>
			<TransitionGroup component={ "div" } id={ "hole-field" }>
				{ holes }
			</TransitionGroup>
		</div>
	);
};


export default GameAria;