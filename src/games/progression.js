import app from '../index.js'
import { getGameRules, getRandomNumber } from '../helpers.js'

// описание игры
const gameDescription = 'What number is missing in the progression?'

// механика игры
// const progressionLength = getRandomNumber(10 - 5 + 1) + 5 // длинна прогрессии случайноe число от 5 до 10 включительно
// const step = getRandomNumber(5) + 1 // шаг прогрессии случайное число от 1 до 5 включительно.
// const progressionStart = getRandomNumber() // число с которого начинается прогрессия

const getProgressionNumbers = () => {
  const progression = {
    length: getRandomNumber(10 - 5 + 1) + 5, // длинна прогрессии случайноe число от 5 до 10 включительно
    step: getRandomNumber(5) + 1, // шаг прогрессии случайное число от 1 до 5 включительно.
    start: getRandomNumber(), // число с которого начинается прогрессия
    numbers: [],
  }

  // добавляем числа в массив
  for (let index = 0; index < progression['length']; index++) {
    const currentElement = progression['start'] + index * progression['step']
    progression['numbers'].push(currentElement)
  }
  // добавляем в массив пропущенное число
  const missNumber = '..'
  progression['numbers'][getRandomNumber(progression['length'])] = missNumber
  return progression['numbers'].join(' ')
}
// правильный ответ
const getRightAnswer = (progressionNumbers) => {
  const numbersArray = progressionNumbers.split(' ')

  const startIndex = numbersArray[0] === '..' ? 1 : 0
  const endIndex
    = numbersArray[numbersArray.length - 1] === '..'
      ? numbersArray.length - 2
      : numbersArray.length - 1
  const missNumberIndex = numbersArray.indexOf('..')
  const step
    = (Number(numbersArray[endIndex]) - Number(numbersArray[startIndex]))
      / (endIndex - startIndex)
  let rightAnswer
  if (startIndex === 1) {
    // Если первый элемент пропущен, то вычисляем его
    rightAnswer = Number(numbersArray[startIndex]) - step
  }
  else {
    // если пропущен любой другой элемент
    rightAnswer = Number(numbersArray[startIndex]) + missNumberIndex * step
  }

  return String(rightAnswer)
}

const gameRules = getGameRules(getProgressionNumbers, getRightAnswer)
export default () => app(gameDescription, gameRules)
