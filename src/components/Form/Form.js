import "./_form.scss"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { gamePlayActions, gamePlaySelectors } from "../../Store/gamePlay";
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from "react-transition-group";


const Form = ({ titleText, supTitleText, btnText, text, didStarted }) => {
	const dispatch = useDispatch()
	const [ isShowedMainTitle, setIsShowedMainTitle ] = useState(false)
	const [ isShowedSecondaryTitle, setIsShowedSecondaryTitle ] = useState(false)
	const [ isShowedFormContent, setIsShowedFormContent ] = useState(false)
	let chosenLevel


	const setDifficultyLevel = (ev) => {
		ev.preventDefault()
		if (!chosenLevel) return
		// dispatch(gamePlayActions.setDifficultyLevel(chosenLevel))
		dispatch(gamePlayActions.setIsPlaying(true))
		dispatch(gamePlayActions.setIsLoading(false))
	}

	const handleChange = (ev) => {
		chosenLevel = ev.target.value
	}


	return (
		<TransitionGroup className={ `formWrapper` }>
			<CSSTransition
				timeout={ 700 }
				in={ didStarted }
				appear
				classNames={ "form" }
				onEntered={ () => setIsShowedMainTitle(true) }
			>
				<form onSubmit={ setDifficultyLevel } className={ `form ` } action="">
					<TransitionGroup component={ null }>
						<CSSTransition
							timeout={ 500 }
							in={ isShowedMainTitle }
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
							in={ isShowedMainTitle }
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
							in={ isShowedMainTitle }
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