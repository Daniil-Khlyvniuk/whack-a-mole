const getSettings = () => (state) => state.gamePlay.settings
const getDifficultyLevel = () => (state) => state.gamePlay.settings.difficultyLevel
const getSpeed = () => (state) => state.gamePlay.settings.speed.currentSpeed
const speedUpTime = () => (state) => state.gamePlay.settings.speed.speedUpTime
const speedUpValue = () => (state) => state.gamePlay.settings.speed.speedUpValue
const getSpeedDelta = () => (state) => state.gamePlay.settings.speed.delta
const isDynamicDifficultyLevel = () => (state) => state.gamePlay.settings.dynamicDifficultyLevel
const isHummerChosen = () => (state) => state.gamePlay.settings.hummer
const getScore = () => (state) => state.gamePlay.score
const getLives = () => (state) => state.gamePlay.lives
const getIsPlaying = () => (state) => state.gamePlay.isPlaying
const getIsLoading = () => (state) => state.gamePlay.isLoading

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDifficultyLevel,
  getScore,
  getLives,
  getSpeed,
  getIsPlaying,
  getIsLoading,
	isDynamicDifficultyLevel,
	isHummerChosen,
	getSettings,
	speedUpTime,
	getSpeedDelta,
	speedUpValue
}