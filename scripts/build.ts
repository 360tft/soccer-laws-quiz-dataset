import { writeFileSync } from 'node:fs'
import { QUESTIONS } from './questions-source.ts'

export const EDITION = 'IFAB Laws of the Game 2025/26'
export const CHECKED = '2026-10-28'

const rows = QUESTIONS.map((q, i) => ({ id: `q${String(i + 1).padStart(3, '0')}`, ...q, edition: EDITION }))
const root = new URL('../', import.meta.url)
writeFileSync(new URL('questions.json', root), JSON.stringify({ edition: EDITION, lastChecked: CHECKED, count: rows.length, questions: rows }, null, 2) + '\n')

const esc = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`
const header = ['id', 'law', 'law_name', 'question', 'option_a', 'option_b', 'option_c', 'option_d', 'answer', 'explanation', 'edition']
const lines = rows.map((r) => [r.id, r.law, r.lawName, r.question, ...r.options, 'ABCD'[r.answerIndex], r.explanation, r.edition].map(esc).join(','))
writeFileSync(new URL('questions.csv', root), [header.join(','), ...lines].join('\n') + '\n')
console.log(`wrote ${rows.length} questions`)
