import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "../GameAria/_gameAria.scss"

const Goal = ({ id }) => {
  const active = useSelector(({ game }) => game.gamePlay.activeMole)
  let caught
  const setScore = useDispatch()
  const setLives = useDispatch()

  useEffect(() => {
    return loose
  }, [])

  const loose = () => {
    if (id !== caught) setLives({ type: "SET_LIVES", payload: 1 })
  }


  const catching = () => {
    if (caught === id) return
    caught = id
    setScore({ type: "SET_SCORE", payload: 1 })
    setTimeout(clearCaughtMole, 1350)
  }

  const clearCaughtMole = () => {
    caught = -1
  }

  return (
    <div onMouseDown={ catching } id={ id } className={ "goal active" }/>
  );
};

export default Goal;