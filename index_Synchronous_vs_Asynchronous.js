import fetch from 'node-fetch'
import rl from 'readline-sync'

let mp

async function run() {
  const postalCode = rl.question('What is your postal code?')
  const response = await fetch(
    `http://represent.opennorth.ca/postcodes/${postalCode
      .toUpperCase()
      .replaceAll(' ', '')}`,
  )
  const result = await response.json()
  console.log(`You live in ${result.city}, ${result.province}`)

  //   if (response.status !== 200) {
  //   console.log('That is not a valid postal code')
  //   return
  // }
}

run()
