import readlineSync from 'readline-sync'

const app = function (gameDescription, gameRules) {
  // Приветствие
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameDescription)

  // функция проверки правильности ответа
  function checkAnswer(playerAnswer, rightAnswer, name) {
    if (playerAnswer === rightAnswer) {
      console.log('Correct!')
      return true
    }
    else {
      console.log(
        `"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${name}!`,
      )
      return false
    }
  }
  let isCorrect = true
  // Цикл игры
  for (let roundCount = 0; roundCount < 3; roundCount++) {
    const numbers = gameRules.numbers()
    console.log(`Question: ${numbers}`)
    const playerAnswer = readlineSync.question('Your answer: ').toLowerCase()

    // Вызов функции проверки ответа
    if (!checkAnswer(playerAnswer, gameRules.rightAnswer(numbers), name)) {
      isCorrect = false
      break
    }
  }
  // Победа игрока
  if (isCorrect) {
    console.log(`Congratulations, ${name}!`)
  }
}

export default app
