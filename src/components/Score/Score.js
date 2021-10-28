import React, { memo } from 'react';
import "./score.css"
import AnimatedScoreCounter from "./animatedScoreCounter";

const Score = () => (
	<div className={ `score` }>
		{/*<p> Score: </p>*/ }
		<AnimatedScoreCounter/>
	</div>
);

export default memo(Score);