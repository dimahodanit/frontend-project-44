import app from '../index.js'
import { getGameRules, getRandomNumber } from '../helpers.js'

// описание игры
const gameDescription = 'What is the result of the expression?'

// механика игры
const getMathTask = () => {
  const operatorsArray = ['*', '+', '-']
  const randomOperator = getRandomNumber(operatorsArray.length)
  return `${getRandomNumber()} ${
    operatorsArray[randomOperator]
  } ${getRandomNumber()}`
}

// правильный ответ
const getRightAnswer = (hiddenNumber) => {
  const firstOperand = Number(hiddenNumber[0])
  const lastOperand = Number(hiddenNumber[hiddenNumber.length - 1])
  const operatorIndex = Math.floor((hiddenNumber.length - 1) / 2)
  const operator = hiddenNumber[operatorIndex]

  switch (operator) {
    case '+':
      return String(firstOperand + lastOperand)
    case '-':
      return String(firstOperand - lastOperand)
    case '*':
      return String(firstOperand * lastOperand)
    case '/':
      return String(firstOperand / lastOperand)
  }
}

const gameRules = getGameRules(getMathTask, getRightAnswer)

export default () => app(gameDescription, gameRules)
