import readlineSync from 'readline-sync'

const app = function (gameDescription, gameRules) {
  // Приветствие
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameDescription)

  // Цикл
  for (let roundCount = 0; roundCount < 3;) {
    const numbers = gameRules.numbers()
    console.log(`Question: ${numbers}`)
    const playerAnswer = readlineSync.question('Your answer: ').toLowerCase()

    // Проверка ответа игрока
    if (playerAnswer === gameRules.rightAnswer(numbers)) {
      console.log('Correct!')
      roundCount += 1
    }
    else {
      console.log(
        `"${playerAnswer}" is wrong answer ;(. Correct answer was "${gameRules.rightAnswer(numbers)}". Let's try again, ${name}!`)
      break
    }
    // Победа игрока
    console.log(`Congratulations, ${name}!`)
  }
}

export default app
