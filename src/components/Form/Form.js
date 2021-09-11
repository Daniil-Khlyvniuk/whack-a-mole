import "./_form.scss"
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logDOM } from "@testing-library/react";

const Form = ({ titleText, supTitleText, btnText, text, cb }) => {
  const didStarted = useSelector(state => state.game.isPlaying)
  const startGame = useDispatch()
  const setLevel = useDispatch()
  let choosenLevel

  const setDifficultyLevel = (ev) => {
    ev.preventDefault()
    if (!choosenLevel) return
    console.log(choosenLevel);
    setLevel({type: "SET_DIFFICULTY_LEVEL", payload: choosenLevel})
    startGame({type: "START_GAME", payload: choosenLevel})
  }

  const handleChange = (ev) => {
    console.log("change")
    choosenLevel = ev.target.value
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