import "./_form.scss"
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { gamePlayActions, gamePlaySelectors } from "../../Store/gamePlay";


const Form = ({ titleText, supTitleText, btnText, text }) => {
  const didStarted = useSelector(gamePlaySelectors.getIsPlaying())
  const dispatch = useDispatch()
  let chosenLevel

  const setDifficultyLevel = (ev) => {
    ev.preventDefault()
    if (!chosenLevel) return
    dispatch(gamePlayActions.setDifficultyLevel(chosenLevel))
    dispatch(gamePlayActions.setIsPlaying(true))
    dispatch(gamePlayActions.setIsLoading(false))
  }

  const handleChange = (ev) => {
    chosenLevel = ev.target.value
  }


  return (
    <div className={ "formWrapper" }>
      <form onSubmit={ setDifficultyLevel } className={ "form" } action="">
        <h2>{ titleText }</h2>
        <h2>{ supTitleText }</h2>
        {
          !didStarted
          &&
        <div onChange={handleChange}>
          <p>{ text }</p>
          <label>
            <input value={"easy"} type={ "radio" } name={ "DifficultyLeve" }/>
            Easy
          </label>
          <label>
            <input value={"normal"} type={ "radio" } name={ "DifficultyLeve" }/>
            Normal
          </label>
          <label>
            <input value={"hard"} type={ "radio" } name={ "DifficultyLeve" }/>
            Hard
          </label>
        </div>
        }
        <button>{ btnText }</button>
      </form>
    </div>
  );
};

export default Form;