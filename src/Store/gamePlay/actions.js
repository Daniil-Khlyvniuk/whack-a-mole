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
	type: types.LIVES_DECREMENT,
	payload: decrement
})

const setLives = (lives) => ({
	type: types.SET_LIVES,
	payload: lives
})

const setSpeed = (speed) => ({
	type: types.SET_SPEED,
	payload: speed
})

const setSpeedDelta = (speedDelta) => ({
	type: types.SET_SPEED_DELTA,
	payload: speedDelta
})

const setSpeedUpTime = (speedUp) => ({
	type: types.SET_SPEED_UP,
	payload: speedUp
})


const setIsDifLvlDynamic = (isDynamic) => ({
	type: types.SET_SPEED_DYNAMIC,
	payload: isDynamic
})

const setIsSpeedEvently = (isEvently) => ({
	type: types.SET_IS_SPEED_EVENTLY,
	payload: isEvently
})

const replay = () => ({
	type: types.SET_INITIAL_STATE,
})


// eslint-disable-next-line import/no-anonymous-default-export
export default {
	setDifficultyLevel,
	setScore,
	setIsPlaying,
	setIsLoading,
	livesDecrement,
	setSpeed,
	replay,
	setLives,
	setIsDifLvlDynamic,
	setSpeedUpTime,
	setIsSpeedEvently,
	setSpeedDelta
}

