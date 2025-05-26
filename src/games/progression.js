import app from '../index.js'
import getRandomNumber from '../helpers.js'

// описание игры
const gameDescription = 'What number is missing in the progression?'

// механика игры
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
  progression['numbers'][getRandomNumber(progression['length'])]
    = missNumber
  return progression['numbers'].join(' ')
}

// правильный ответ
const getRightAnswer = (progressionNumbers) => {
  const numbersArray = progressionNumbers.split(' ')

  const startIndex = 0
  const endIndex = numbersArray.length - 1
  const missNumberIndex = numbersArray.indexOf('..')
  let step = Number(numbersArray[2]) - Number(numbersArray[1])
  let rightAnswer

  switch (missNumberIndex) {
    case startIndex:
      rightAnswer = Number(numbersArray[1]) - step
      break
    case endIndex:
      rightAnswer = Number(numbersArray[endIndex - 1]) + step
      break
    default:
      step
        = (Number(numbersArray[endIndex]) - Number(numbersArray[startIndex]))
          / (endIndex - startIndex)
      rightAnswer = Number(numbersArray[missNumberIndex - 1]) + step
  }

  return String(rightAnswer)
}

export default () => app(gameDescription, getProgressionNumbers, getRightAnswer)
