import readlineSync from 'readline-sync'

const app = function (gameDescription, gameRules, rightAnswer) {
  // Приветствие
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameDescription)

  // Цикл
  for (let roundCount = 0; roundCount < 3;) {
    const hiddenNumber = gameRules()
    console.log(`Question: ${hiddenNumber}`)
    const playerAnswer = readlineSync.question('Your answer: ').toLowerCase()

    // Проверка ответа игрока
    if (playerAnswer === rightAnswer(hiddenNumber)) {
      console.log('Correct!')
      roundCount += 1
    }
    else {
      console.log(
        `"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer(
          hiddenNumber,
        )}". Let's try again, ${name}!`,
      )
      break
    }

    // Победа игрока
    if (roundCount === 3) {
      console.log(`Congratulations, ${name}!`)
    }
  }
}

export default app
