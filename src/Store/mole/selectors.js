const getActiveMole = () => (state) => state.mole.activeMole
const getCaughtMole = () => (state) => state.mole.caughtMole
const getUpdateTrigger = () => (state) => state.mole.updateTrigger
const getMoleIDs = () => (state) => state.mole.molesIDs

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getActiveMole,
	getCaughtMole,
	getUpdateTrigger,
	getMoleIDs
}