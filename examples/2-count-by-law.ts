import { readFileSync } from 'node:fs'
const { questions } = JSON.parse(readFileSync(new URL('../questions.json', import.meta.url), 'utf8'))
const counts = new Map<string, number>()
for (const q of questions) counts.set(`Law ${q.law} ${q.lawName}`, (counts.get(`Law ${q.law} ${q.lawName}`) ?? 0) + 1)
for (const [k, v] of counts) console.log(String(v).padStart(3), k)
