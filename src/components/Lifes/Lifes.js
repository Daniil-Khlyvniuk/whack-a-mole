import React from 'react';
import "./lifes.scss"
import { useSelector } from "react-redux";
import { gamePlaySelectors } from "../../Store/gamePlay";

const Lives = () => {
	const lives = useSelector(gamePlaySelectors.getLives())
	const hearts = lives > 0 ? Array(lives).fill("").map((el, index) => (<div key={ index } className="heart"/>)) : []
	return (
		<div className="lifeWrapper">
			{
				hearts
			}
		</div>
	);
};

export default Lives;