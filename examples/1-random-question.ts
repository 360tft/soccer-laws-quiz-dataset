import { readFileSync } from 'node:fs'
const { questions } = JSON.parse(readFileSync(new URL('../questions.json', import.meta.url), 'utf8'))
const q = questions[Math.floor(Math.random() * questions.length)]
console.log(`Law ${q.law}: ${q.question}`)
q.options.forEach((o: string, i: number) => console.log(`  ${'ABCD'[i]}. ${o}`))
console.log(`Answer: ${'ABCD'[q.answerIndex]}. ${q.explanation}`)
