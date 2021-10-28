import React, { useEffect, useState } from 'react';
import { Transition } from "react-transition-group";
import "./score.css"
import { useSelector } from "react-redux";
import { gamePlaySelectors } from "../../Store/gamePlay";

const AnimatedScoreCounter = () => {
	const score = useSelector(gamePlaySelectors.getScore())
	const [ isChange, setIsChange ] = useState(false)

	useEffect(() => {
		if (score < 1) return
		setIsChange(true)
	}, [ score ])

	return (
		<Transition
			in={ isChange }
			timeout={ 100 }
			onEntered={ () => setIsChange(false) }
		>
			{
				state => (
					<span className={ `scoreCounter ${ state }` }> { score } </span>
				)
			}
		</Transition>
	);
};

export default AnimatedScoreCounter;