import app from '../index.js'

// описание игры
const gameDescription = 'What is the result of the expression?'

// механика игры
const calcTask = () => {
  const operatorsArray = ['*', '+', '-']
  const randomOperator = Math.floor(Math.random() * operatorsArray.length)
  return `${Math.floor(Math.random() * 10)} ${
    operatorsArray[randomOperator]
  } ${Math.floor(Math.random() * 10)}`
}

// правильный ответ
const rightAnswer = (hiddenNumber) => {
  const firstOperand = Number(hiddenNumber[0])
  const lastOperand = Number(hiddenNumber[hiddenNumber.length - 1])
  const operatorIndex = Math.floor((hiddenNumber.length - 1) / 2)
  const operator = hiddenNumber[operatorIndex]

  let result
  switch (operator) {
    case '+':
      result = firstOperand + lastOperand
      break
    case '-':
      result = firstOperand - lastOperand
      break
    case '*':
      result = firstOperand * lastOperand
      break
    case '/':
      result = firstOperand / lastOperand
      break
  }
  return String(result)
}

export default () => app(gameDescription, calcTask, rightAnswer)
