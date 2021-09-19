const getActiveMole = () => (state) => state.mole.activeMole
const getCaughtMole = () => (state) => state.mole.caughtMole
const getUpdateTrigger = () => (state) => state.mole.updateTrigger

export default { getActiveMole, getCaughtMole, getUpdateTrigger }