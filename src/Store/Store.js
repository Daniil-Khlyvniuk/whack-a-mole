import { createStore } from "redux"
import defaultState from "./dfaultState";


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_DIFFICULTY_LEVEL":
      return { ...state, game: { ...state.game, difficultyLevel: action.payload } }
    case "START_GAME":
      return { ...state, game: { ...state.game, isPlaying: action.payload } }
    case "SET_ACTIVE_MOLE":
      return { ...state, game: { ...state.game, gamePlay: { ...state.game.gamePlay, activeMole: action.payload } } }
    default:
      return state
  }
}


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store