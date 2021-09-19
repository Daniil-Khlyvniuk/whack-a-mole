const getDifficultyLevel = () => (state) => state.gamePlay.difficultyLevel
const getScore = () => (state) => state.gamePlay.score
const getLives = () => (state) => state.gamePlay.lives
const getSpeed = () => (state) => state.gamePlay.speed
const getIsPlaying = () => (state) => state.gamePlay.isPlaying
const getIsLoading = () => (state) => state.gamePlay.isLoading
// const getDifficultyLevel = () => (state) => state.difficultyLevel
// const getDifficultyLevel = () => (state) => state.difficultyLevel

export default {
  getDifficultyLevel,
  getScore,
  getLives,
  getSpeed,
  getIsPlaying,
  getIsLoading
}