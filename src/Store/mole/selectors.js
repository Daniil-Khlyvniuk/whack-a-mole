const getActiveMole = () => (state) => state.mole.activeMole
const getCaughtMole = () => (state) => state.mole.caughtMole
const getUpdateTrigger = () => (state) => state.mole.updateTrigger
const getMoleIDs = () => (state) => state.mole.molesIDs

export default { getActiveMole, getCaughtMole, getUpdateTrigger, getMoleIDs }