import readlineSync from 'readline-sync'

export const isEven = function () {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let roundCount = 0; roundCount < 3;) {
    const randomNumber = Math.floor(Math.random() * 100)
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'
    console.log(`Question: ${randomNumber}`)
    const playerAnswer = readlineSync.question('Your answer: ').toLowerCase()
    if (playerAnswer === rightAnswer) {
      console.log('Correct!')
      roundCount += 1
    }
    else {
      console.log(
        `"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${name}!`,
      )
      roundCount = 0
      break
    }
    if (roundCount === 3) {
      console.log(`Congratulations, ${name}!`)
    }
  }
}
