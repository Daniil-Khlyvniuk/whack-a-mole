import types from "./types";

const initialState = {
  caughtMole: -1,
  activeMole: -1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_MOLE:
      return {
        ...state,
        activeMole: action.payload
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
