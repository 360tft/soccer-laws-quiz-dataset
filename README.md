# soccer-laws-quiz-dataset

30 original multiple-choice questions on the Laws of the Game. Each has the Law number,
four options, the right answer and a one-line explanation. JSON and CSV.

- Edition: **IFAB Laws of the Game 2025/26**. Last checked 28 Oct 2026.
- Files: [questions.json](questions.json), [questions.csv](questions.csv), [schema.json](schema.json).
- Examples: [examples/](examples/) (random question, count by Law, flashcard export).

```json
{
  "id": "q001", "law": 1, "lawName": "The Field of Play",
  "question": "How far from the goal line is the penalty mark?",
  "options": ["9.15 m", "11 m", "12 yards", "16.5 m"], "answerIndex": 1,
  "explanation": "The mark sits 11 metres from the midpoint between the posts.",
  "edition": "IFAB Laws of the Game 2025/26"
}
```

## Keep it current

Laws change each July. Questions here cover long-stable facts (pitch sizes, restarts, cards, offside basics).
Check any question against the current IFAB edition before you rely on it. Rebuild with `npm run build`.
Source of truth is [scripts/questions-source.ts](scripts/questions-source.ts).

## Test

Needs Node 22.6 or newer. Run `npm test`.

## Practise more

Train for the referee exam with [RefereeGPT](https://refereegpt.co/quiz?utm_source=github&utm_medium=open_source&utm_campaign=soccer-laws-quiz-dataset).

## Licence and credit

- Questions, answers and explanations: CC BY 4.0. See [LICENSE-DATA](LICENSE-DATA). Credit "360TFT".
- Scripts, tests and examples: MIT. See [LICENSE](LICENSE).
- The Laws of the Game are published and owned by IFAB. This dataset is not endorsed by IFAB.
  Questions are written in our own words. Read the official Laws at theifab.com.

---
Made by [360TFT](https://360tft.com). Build practices and sessions with [FootballGPT](https://footballgpt.co?utm_source=github&utm_medium=open_source&utm_campaign=soccer-laws-quiz-dataset). Test your knowledge of the Laws with [RefereeGPT](https://refereegpt.co/quiz?utm_source=github&utm_medium=open_source&utm_campaign=soccer-laws-quiz-dataset).
