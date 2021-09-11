const defaultState = {
  user: {
    data: null,
    error: null,
    isloading: true,
  },
  game: {
    gamePlay: {
      MoleID: [1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13],
      activeMole: null,
      DifficultyLevel: null,
      score: 0,
      lives: 3,
      speed: 1500,
      error: null,
    },

    record: 0,
    isPlaying: false,
    isloading: true,
    error: null,
  }
}




export default defaultState