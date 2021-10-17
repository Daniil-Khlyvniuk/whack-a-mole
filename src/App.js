import './App.css';
import Form from "./components/Form/Form";
import GameAria from "./components/GameAria/GameAria";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamePlaySelectors } from "./Store/gamePlay";
import { moleActions, moleSelectors } from "./Store/mole";
import { CSSTransition, Transition, TransitionGroup } from "react-transition-group";

function App() {
	const [ , updateState ] = useState();
	const forceUpdate = useCallback(() => updateState({}), []);
	const [ isOpen, setIsOpen ] = useState(false)
	const didStarted = useSelector(gamePlaySelectors.getIsPlaying())
	const updateTrigger = useSelector(moleSelectors.getUpdateTrigger())
	const speed = useSelector(gamePlaySelectors.getSpeed())
	const lives = useSelector(gamePlaySelectors.getLives())
	const activeMole = useSelector(moleSelectors.getActiveMole())
	const dispatch = useDispatch();


	useEffect(() => {
		setTimeout(() => {
			setIsOpen(true)
		}, 1000)
	}, [ didStarted ])


	useEffect(() => {
		if (!didStarted) return
		const delta = Math.random() * 350

		setTimeout(() => {
			const activeId = getRandomActiveMole()
			dispatch(moleActions.setActiveMole(activeId))
		}, +speed)
	}, [ didStarted, activeMole, updateTrigger ])


	const test = (delta) => {
		return new Promise(((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, +delta);
		}))
	}


	const getRandomActiveMole = () => {
		const molesIDs = [ 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13 ]
		let index = Math.floor(Math.random() * molesIDs.length)

		while (molesIDs[index] === activeMole) {
			index = Math.floor(Math.random() * molesIDs.length)
		}
		return molesIDs[index]
	}

	return (
		<div className="App">
			<GameAria/>
			<TransitionGroup component={ null }>
				{
					!didStarted
					&&
					<CSSTransition
						timeout={ 500 }
						in={ didStarted }
						appear
						classNames={ "formWrapper" }
					>
						<Form
							didStarted={didStarted}
							titleText={ "Welcome to the" }
							supTitleText={ "\"Whack a mole\"!" }
							btnText={ "Start" }
							text={ "Please choose the difficulty level" }
						/>
					</CSSTransition>
				}
			</TransitionGroup>
		</div>
	)
}

export default App;
