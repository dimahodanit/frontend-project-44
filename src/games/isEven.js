import app from '../index.js'

// описание игры
const gameDescription
  = 'Answer "yes" if the number is even, otherwise answer "no".'

// механика игры
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100)
}

// правильный ответ
const rightAnswer = (hiddenNumber) => {
  return hiddenNumber % 2 === 0 ? 'yes' : 'no'
}

export default () => app(gameDescription, getRandomNumber, rightAnswer)
