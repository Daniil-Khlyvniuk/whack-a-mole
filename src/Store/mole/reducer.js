import types from "./types";

const initialState = {
	molesIDs: [ 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13 ],
	caughtMole: -1,
	activeMole: -1,
	updateTrigger: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_ACTIVE_MOLE:
			return {
				...state,
				activeMole: action.payload,
				updateTrigger: !state.updateTrigger
			}
		case types.SET_CAUGHT_MOLE:
			return {
				...state,
				caughtMole: action.payload
			}

		case types.SET_UPDATE_TRIGGER:
			return {
				...state,
				updateTrigger: !state.updateTrigger
			}
		case types.SET_MOLE_IDs:
			return {
				...state,
				molesIDs: action.payload
			}

		case types.SET_INITIAL_STATE:
			return initialState

		default:
			return state;
	}
}

export default reducer
