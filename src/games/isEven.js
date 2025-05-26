import app from '../index.js'
import getRandomNumber from '../helpers.js'

// описание игры
const gameDescription
  = 'Answer "yes" if the number is even, otherwise answer "no".'

// механика игры
const getNumber = () => {
  return getRandomNumber(100)
}

// правильный ответ
const getRightAnswer = (hiddenNumber) => {
  return hiddenNumber % 2 === 0 ? 'yes' : 'no'
}

export default () => app(gameDescription, getNumber, getRightAnswer)
