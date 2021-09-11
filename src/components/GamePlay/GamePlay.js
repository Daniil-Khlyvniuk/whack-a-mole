const gamePlay = (setActiveMole, MoleID, speed) => {
  setInterval(() => {
    let indexOfActiveMole = Math.floor(Math.random() * 16);
    while (!MoleID.includes(indexOfActiveMole)) {
      indexOfActiveMole = Math.floor(Math.random() * 16);
    }
    setActiveMole({ type: "SET_ACTIVE_MOLE", payload: indexOfActiveMole })
  }, 1500)
}

export  default gamePlay