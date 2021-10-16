import React, { memo } from 'react';
import "./lifes.scss"
import { useSelector } from "react-redux";
import { gamePlaySelectors } from "../../Store/gamePlay";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Lives = () => {
	const lives = useSelector(gamePlaySelectors.getLives())


	return (
		<TransitionGroup className="lifeWrapper">
			{
				lives > 0
					?
					Array(lives)
					.fill("")
					.map((el, index) => (
						<CSSTransition
							unmountOnExit
							key={ index }
							timeout={ 500 }
							classNames={ "heart" }
						>
							<div className={ "heart" }/>
						</CSSTransition>
					))
					:
					[]
			}
		</TransitionGroup>
	);
};

export default memo(Lives);