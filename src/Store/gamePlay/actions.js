import types from "./types"

const setDifficultyLevel = (difficultyLevel) => ({
	type: types.SET_DIFFICULTY_LEVEL,
	payload: difficultyLevel
})

const setScore = (score) => ({
	type: types.SET_SCORE,
	payload: score
})

const setIsPlaying = (isPlaying) => ({
	type: types.IS_PLAYING,
	payload: isPlaying
})

const setIsLoading = (isLoading) => ({
	type: types.IS_LOADING,
	payload: isLoading
})

const livesDecrement = (decrement) => ({
	type: types.SET_LIVES,
	payload: decrement
})

const setSpeed = (speed) => ({
	type: types.SET_SPEED,
	payload: speed
})


export default {
	setDifficultyLevel,
	setScore,
	setIsPlaying,
	setIsLoading,
	livesDecrement,
	setSpeed
}

