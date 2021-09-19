import { combineReducers } from "redux";
import mole from "./mole"
import gamePlay from "./gamePlay"

const rootReducer = combineReducers({
  mole,
  gamePlay
})

export default rootReducer