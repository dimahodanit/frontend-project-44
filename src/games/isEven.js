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
const isEven = number => (number % 2 === 0)
const getRightAnswer = (number) => {
  return isEven(number) ? 'yes' : 'no'
}

const gameRules = getGameRules(getNumber, getRightAnswer)

export default () => app(gameDescription, gameRules)
