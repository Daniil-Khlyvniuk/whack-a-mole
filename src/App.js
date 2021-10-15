import './App.css';
import Form from "./components/Form/Form";
import GameAria from "./components/GameAria/GameAria";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamePlaySelectors } from "./Store/gamePlay";
import { moleActions, moleSelectors } from "./Store/mole";

function App() {
	const [ , updateState ] = useState();
	const forceUpdate = useCallback(() => updateState({}), []);
	const didStarted = useSelector(gamePlaySelectors.getIsPlaying())
	const updateTrigger = useSelector(moleSelectors.getUpdateTrigger())
	const speed = useSelector(gamePlaySelectors.getSpeed())
	const lives = useSelector(gamePlaySelectors.getLives())
	const activeMole = useSelector(moleSelectors.getActiveMole())
	const dispatch = useDispatch();


	useEffect(() => {
		if (!didStarted) return


		setTimeout(() => {
			const activeId = getRandomActiveMole()
			// console.log(activeMole === activeId)
			// console.log(activeMole)
			// console.log(activeId)
			// console.log("updateTrigger", updateTrigger);
			// if (activeId === activeMole) {
			// 	return dispatch(moleActions.setActiveMole(activeId.toString()))
			// }
			// dispatch(moleActions.setActiveMole(-1))
			dispatch(moleActions.setActiveMole(activeId))
		}, speed)
	}, [ didStarted, activeMole, updateTrigger ])


	const getRandomActiveMole = () => {
		const molesIDs = [ 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13 ]
		let index = Math.floor(Math.random() * molesIDs.length)

		while(molesIDs[index] === activeMole){
			index = Math.floor(Math.random() * molesIDs.length)
		}
		// let index = Math.floor(Math.random() * molesIDs.length)

		return molesIDs[index]
	}

	return (
		<div className="App">
			<GameAria/>
			{
				!didStarted
				&&
				<Form
					titleText={ "Welcome to the" }
					supTitleText={ "\"Whack a mole\"!" }
					btnText={ "Start" }
					text={ "Please choose the difficulty level" }
				/>
			}
			{
				lives < 1
				&&
				<Form
					titleText={ "Game over" }
					supTitleText={ "" }
					btnText={ "retry" }
					text={ "Please choose the difficulty level" }
				/>
			}
		</div>
	);
}

export default App;
