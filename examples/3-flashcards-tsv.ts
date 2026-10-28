// Writes tab-separated flashcards (front, back) to stdout. Import into any flashcard app.
import { readFileSync } from 'node:fs'
const { questions } = JSON.parse(readFileSync(new URL('../questions.json', import.meta.url), 'utf8'))
for (const q of questions) console.log(`${q.question}\t${q.options[q.answerIndex]}. ${q.explanation}`)
