import React, { memo, useEffect, useState } from 'react';
import "./score.scss"
import { useSelector } from "react-redux";
import { gamePlaySelectors } from "../../Store/gamePlay";
import { Transition, CSSTransition } from "react-transition-group";
import AnimatedScoreCounter from "./animatedScoreCounter";

const Score = () => {
	// const score = useSelector(gamePlaySelectors.getScore())
	// // const [ isChange, setIsChange ] = useState(false)
	// // console.log("render")
	// // //
	// //
	// // useEffect(() => {
	// // 	if (score < 5) return
	// // 	setIsChange(true)
	// // }, [ score ])
	//

	return (
		<div className={ `score` }>
			{/*<p> Score: </p>*/}
			<AnimatedScoreCounter/>
		</div>
	);
};

export default memo(Score);