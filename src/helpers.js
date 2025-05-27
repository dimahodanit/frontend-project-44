function getRandomNumber(power = 10) {
  return Math.floor(Math.random() * power)
}

function getGameRules(numbers, rightAnswer) {
  const gameRules = {
    numbers,
    rightAnswer,
  }
  return gameRules
}
export { getGameRules, getRandomNumber }
