const defaultState = {
    user: {
      data: null,
      error: null,
      isloading: true,
    },
  game: {
    gamePlay: {
      activeMole: null,
      DifficultyLeve: null,
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