import types from "./types";

const initialState = {
	settings: {
		difficultyLevel: "easy",
		dynamicDifficultyLevel: false,
		speed: {
			currentSpeed: 1200,
			isSpeedEvenly: true,
			delta: 1,
			speedUpTime: 1000,
			speedUpValue: .9
		},
		hummer: false,
	},

	score: 0,
	lives: 3,
	pause: false,
	isPlaying: false,
	isLoading: true,
}


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_DIFFICULTY_LEVEL:
			return {
				...state,
				settings: {
					...state.settings,
					difficultyLevel: action.payload
				}
			}

		case types.SET_SPEED:
			return {
				...state,
				settings: {
					...state.settings,
					speed: {
						...state.settings.speed,
						currentSpeed: action.payload
					}
				}
			}

		case types.SET_SPEED_DELTA:
			return {
				...state,
				settings: {
					...state.settings,
					speed: {
						...state.settings.speed,
						delta: action.payload
					}
				}
			}

		case types.SET_SPEED_UP:
			return {
				...state,
				settings: {
					...state.settings,
					speed: {
						...state.settings.speed,
						speedUpTime: action.payload,
					}
				}
			}

			case types.SET_IS_SPEED_EVENTLY:
			return {
				...state,
				settings: {
					...state.settings,
					speed: {
						...state.settings.speed,
						isSpeedEvenly: action.payload
					}
				}
			}

		case types.SET_SPEED_DYNAMIC:
			return {
				...state,
				settings: {
					...state.settings,
					dynamicDifficultyLevel: action.payload
				}
			}

		case types.SET_SCORE:
			return {
				...state,
				score: state.score + action.payload
			}

		case types.IS_LOADING:
			return {
				...state,
				isLoading: action.payload
			}

		case types.IS_PLAYING:
			return {
				...state,
				isPlaying: action.payload
			}

		case types.LIVES_DECREMENT:
			return {
				...state,
				lives: state.lives - 1
			}
			case types.SET_LIVES:
			return {
				...state,
				lives: action.payload
			}

		case types.SET_INITIAL_STATE:
			return {
				...initialState,
				lives: state.lives
			}

		default:
			return state;
	}
}

export default reducer
