const gamePlay = (setActiveMole, MoleID, speed, isPlaying) => {
    let indexOfActiveMole = Math.floor(Math.random() * 16);
    while (!MoleID.includes(indexOfActiveMole) && isPlaying) {
      indexOfActiveMole = Math.floor(Math.random() * 16);
    }
    setActiveMole({ type: "SET_ACTIVE_MOLE", payload: indexOfActiveMole })
}

export default gamePlay