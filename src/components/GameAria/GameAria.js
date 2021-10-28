import React, { memo, useEffect, useMemo, useState } from 'react';
import HoleWrapper from "./HoleWrapper";
import "./gameAria.css"
import Lives from "../Lifes/Lifes"
import Score from "../Score/Score";
import { TransitionGroup } from "react-transition-group";
import Hummer from "../Hummer/Hummer";


const GameAria = () => {
	const holes = useMemo(() => ([ ...Array(15) ].map((e, i) =>
		[ 0, 4, 10, 14 ].includes(i)
			?
			<div key={ i }/>
			:
			<HoleWrapper key={ i } id={ i }/>
	)), [])


	return (
		<div id={ "game-aria" }>
			<Lives/>
			<Score/>
			<TransitionGroup id={ "hole-field" }>
				{ holes }
			</TransitionGroup>
			<Hummer/>
		</div>
	);
};


export default memo(GameAria);