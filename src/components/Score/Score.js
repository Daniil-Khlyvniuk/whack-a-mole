import React, { memo } from 'react';
import "./score.css"
import AnimatedScoreCounter from "./animatedScoreCounter";

const Score = () => (
	<div className={ `score` }>
		<AnimatedScoreCounter/>
	</div>
);

export default memo(Score);