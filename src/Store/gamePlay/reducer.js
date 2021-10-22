import types from "./types";

const initialState = {
  difficultyLevel: "easy",
  speed: 1400,
  score: 0,
  isPlaying: false,
  isLoading: true,
  lives: 3
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DIFFICULTY_LEVEL:
      return {
        ...state,
        difficultyLevel: action.payload
      }

    case types.SET_SPEED:
      return {
        ...state,
        speed: state.speed + action.payload
      }

    case types.SET_SCORE:
      return {
        ...state,
        score: state.score + action.payload
      }

    case types.IS_LOADING:
      return {
        ...state,
        isLoading:  action.payload
      }

    case types.IS_PLAYING:
      return {
        ...state,
        isPlaying:  action.payload
      }

    case types.SET_LIVES:
      return {
        ...state,
        lives: state.lives - 1
      }

    default:
      return state;
  }
}

export default reducer
