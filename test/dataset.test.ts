import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = (p: string) => readFileSync(new URL(p, import.meta.url), 'utf8')
const data = JSON.parse(read('../questions.json'))
const qs: any[] = data.questions

test('has at least 25 questions and a count that matches', () => {
  assert.ok(qs.length >= 25)
  assert.equal(data.count, qs.length)
})
test('edition and check date are set', () => {
  assert.match(data.edition, /20\d\d\/\d\d/)
  assert.match(data.lastChecked, /^\d{4}-\d{2}-\d{2}$/)
})
test('every question fits the shape', () => {
  for (const q of qs) {
    assert.match(q.id, /^q\d{3}$/)
    assert.ok(Number.isInteger(q.law) && q.law >= 1 && q.law <= 17, q.id)
    assert.equal(q.options.length, 4, q.id)
    assert.ok(Number.isInteger(q.answerIndex) && q.answerIndex >= 0 && q.answerIndex < 4, q.id)
    assert.ok(q.question.length >= 10 && q.explanation.length >= 10, q.id)
    assert.equal(new Set(q.options).size, 4, `${q.id} has duplicate options`)
  }
})
test('ids and questions are unique', () => {
  assert.equal(new Set(qs.map((q) => q.id)).size, qs.length)
  assert.equal(new Set(qs.map((q) => q.question)).size, qs.length)
})
test('no explanation is long enough to be copied Laws text', () => {
  for (const q of qs) assert.ok(q.explanation.split(' ').length <= 40, q.id)
})
test('CSV has one row per question plus header', () => {
  const lines = read('../questions.csv').trim().split('\n')
  assert.equal(lines.length, qs.length + 1)
})
test('CSV answer letter matches JSON', () => {
  const lines = read('../questions.csv').trim().split('\n').slice(1)
  lines.forEach((l, i) => assert.ok(l.includes(`,"${'ABCD'[qs[i].answerIndex]}",`), qs[i].id))
})
test('no banned word', () => {
  const banned = 'dr' + 'ill'
  for (const f of ['../questions.json', '../questions.csv']) assert.ok(!read(f).toLowerCase().includes(banned))
})
