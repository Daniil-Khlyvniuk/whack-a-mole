import types from "./types";

const initialState = {
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
        test: action.payload === -1 ? state.updateTrigger : (!state.updateTrigger)
      }
      case types.SET_CAUGHT_MOLE:
      return {
        ...state,
        caughtMole: action.payload
      }
    default:
      return state;
  }
}

export default reducer
