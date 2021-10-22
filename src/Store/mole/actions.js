import types from "./types"

const setActiveMole = (activeMole) => ({
	type: types.SET_ACTIVE_MOLE,
	payload: activeMole
})

const setCaughtMole = (activeMole) => ({
	type: types.SET_CAUGHT_MOLE,
	payload: activeMole
})

const setUpdateTrigger = () => ({
	type: types.SET_UPDATE_TRIGGER,
	payload: ""
})

const setMoleIDs = (moleIDs) => ({
	type: types.SET_MOLE_IDs,
	payload: moleIDs
})

export default { setActiveMole, setCaughtMole, setUpdateTrigger, setMoleIDs }

