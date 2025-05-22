import app from '../index.js'

// описание игры
const gameDescription = 'Find the greatest common divisor of given numbers.'

// механика игры
const getNumbers = () => {
  return `${Math.floor(Math.random() * 100)} ${Math.floor(Math.random() * 100)}`
}

// правильный ответ
const getRightAnswer = (numbersPair) => {
  const numbers = numbersPair.split(' ')
  let firstNumber = Number(numbers[0])
  let secondNumber = Number(numbers[1])
  // алгоритм евклида для поиска НОД
  while (secondNumber !== 0) {
    const temp = secondNumber
    secondNumber = firstNumber % secondNumber
    firstNumber = temp
  }
  return String(firstNumber) // преобразуем в строку, чтобы затем сравнить со строковым ответом игрока
}
export default () => app(gameDescription, getNumbers, getRightAnswer)
