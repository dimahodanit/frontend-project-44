import app from '../index.js'
import { getGameRules, getRandomNumber } from '../helpers.js'

// описание игры
const gameDescription
  = 'Answer "yes" if the number is even, otherwise answer "no".'

// механика игры
const getNumber = () => {
  return getRandomNumber(100)
}

// правильный ответ
const getRightAnswer = (number) => {
  return number % 2 === 0 ? 'yes' : 'no'
}

const gameRules = getGameRules(getNumber, getRightAnswer)

export default () => app(gameDescription, gameRules)
