const getRandomActiveMole = () => {
  const molesIDs = [ 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13 ]
  let index = Math.floor(Math.random() * molesIDs.length)

  return molesIDs[index]
}

export default getRandomActiveMole