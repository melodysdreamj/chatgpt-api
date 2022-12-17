import dotenv from 'dotenv-safe'
import { oraPromise } from 'ora'

import { ChatGPTAPIBrowser } from '../src'

dotenv.config()

/**
 * Demo CLI for testing conversation support.
 *
 * ```
 * npx tsx demos/demo-conversation-browser.ts
 * ```
 */
async function main() {
  const email = process.env.OPENAI_EMAIL
  const password = process.env.OPENAI_PASSWORD

  const api = new ChatGPTAPIBrowser({ email, password, debug: true })
  await api.init()

  const prompt = '안녕'

  const response = await oraPromise(api.sendMessage(prompt), {
    text: prompt
  })

  console.log(response)
  console.log('Done!:', response)

  const prompt2 = '넌 누구야?'

  const response2 = await oraPromise(api.sendMessage(prompt2), {
    text: prompt2
  })

  console.log('Done!2:', response2)

  const prompt3 = '난 누구게?'

  const response3 = await oraPromise(api.sendMessage(prompt3), {
    text: prompt3
  })
  console.log('Done!3:', response3)

  const prompt4 = '송도에 대해서 설명해줘'

  const response4 = await oraPromise(api.sendMessage(prompt4), {
    text: prompt4
  })

  console.log('Done!4:', response4)

  return
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
