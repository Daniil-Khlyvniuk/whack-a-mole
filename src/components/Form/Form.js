import "./form.css"
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { gamePlayActions } from "../../Store/gamePlay";
import { CSSTransition, TransitionGroup } from "react-transition-group";


const Form = ({ titleText, supTitleText, btnText, text, didStarted, cb }) => {
	const dispatch = useDispatch()
	const [ isMainTitleShowed, setIsMainTitleShowed ] = useState(didStarted)
	let chosenLevel

	const setDifficultyLevel = (ev) => {
		ev.preventDefault()
		if (!chosenLevel) return
		dispatch(gamePlayActions.setDifficultyLevel(chosenLevel))
		dispatch(gamePlayActions.setIsPlaying(true))
		dispatch(gamePlayActions.setIsLoading(false))
		cb()
	}

	const handleChange = (ev) => {
		chosenLevel = ev.target.value
	}


	return (
		<TransitionGroup className={ `formWrapper` }>
			<CSSTransition
				timeout={ {
					appear: 700,
					enter: 300,
					exit: 1000,
				} }
				in={ didStarted }
				appear
				classNames={ "form" }
				onEntered={ () => setIsMainTitleShowed(true) }
			>
				<form onSubmit={ setDifficultyLevel } className={ `form ` } action="">
					<TransitionGroup component={ null }>
						<CSSTransition
							timeout={ 500 }
							in={ isMainTitleShowed }
							classNames={ "mainFormTitle" }
							appear
						>
							<div className={ "mainFormTitle" }>
								<h2>{ titleText }</h2>
								<h2>{ supTitleText }</h2>
							</div>
						</CSSTransition>
						<CSSTransition
							timeout={ 500 }
							in={ isMainTitleShowed }
							classNames={ "formContent" }
							appear
						>
							<div className={ "formContent" } onChange={ handleChange }>
								<p>{ text }</p>
								<label>
									<input value={ "easy" } type={ "radio" } name={ "DifficultyLeve" }/>
									Easy
								</label>
								<label>
									<input value={ "normal" } type={ "radio" } name={ "DifficultyLeve" }/>
									Normal
								</label>
								<label>
									<input value={ "hard" } type={ "radio" } name={ "DifficultyLeve" }/>
									Hard
								</label>
							</div>
						</CSSTransition>
						<CSSTransition
							timeout={ 500 }
							in={ isMainTitleShowed }
							classNames={ "formBtn" }
							appear
						>
							<button className={ "formBtn" }>{ btnText }</button>
						</CSSTransition>
					</TransitionGroup>
				</form>
			</CSSTransition>
		</TransitionGroup>
	)
};

export default Form;