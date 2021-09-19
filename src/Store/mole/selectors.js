const getActiveMole = () => (state) => state.mole.activeMole
const getCaughtMole = () => (state) => state.mole.caughtMole

export default { getActiveMole, getCaughtMole }