import readlineSync from 'readline-sync'

const app = function (gameDescription, gameRules) {
  // Приветствие
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameDescription)

  // функция проверки правильности ответа
  function checkAnswer(playerAnswer, rightAnswer) {
    if (playerAnswer === rightAnswer) {
      return true
    }

    return false
  }

  // Цикл игры
  let roundCount = 0
  while (roundCount < 3) {
    const numbers = gameRules.numbers()
    console.log(`Question: ${numbers}`)
    const playerAnswer = readlineSync.question('Your answer: ').toLowerCase()

    // Вызов функции проверки ответа
    if (!checkAnswer(playerAnswer, gameRules.rightAnswer(numbers))) {
      console.log(
        `"${playerAnswer}" is wrong answer ;(. Correct answer was "${gameRules.rightAnswer(numbers)}". Let's try again, ${name}!`,
      )
      return
    }
    console.log('Correct!')
    roundCount += 1
  }
  // Победа игрока
  if (roundCount === 3) {
    console.log(`Congratulations, ${name}!`)
  }
}

export default app
