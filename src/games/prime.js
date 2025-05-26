import app from '../index.js'
import getRandomNumber from '../helpers.js'


// описание игры
const gameDescription
  = 'Answer "yes" if given number is prime. Otherwise answer "no".'

// механика игры
const getNumber = () => {
  return getRandomNumber(100)
}

// правильный ответ
const isPrime = (hiddenNumber) => {
  const n = hiddenNumber
  let result = true
  if (n < 2 || (n > 2 && n % 2 === 0)) {
    result = false
  }
  else {
    for (let i = 3; i <= n ** 0.5; i += 2) {
      if (n % i === 0) {
        result = false
      }
    }
  }
  const rightAnswer = result ? 'yes' : 'no'
  return rightAnswer
}

export default () => app(gameDescription, getNumber, isPrime)
