# Agent Guide: Migrating Exams to Version 2.0

## Goal

Migrate one legacy exam at a time into its own JSON file under `exams/`, preserving the original 1.0 bank and making the 2.0 exam usable offline. The JSON files are the source of truth; `exams-v2.bundle.js` is generated output.

## Files

- `questions.js`: immutable legacy 1.0 bank during the migration.
- `exams/{exam}.json`: editable 2.0 question data for one exam.
- `build-exams.js`: validates exam names, versions, arrays, and duplicate question IDs, then generates the offline bundle.
- `exams-v2.bundle.js`: generated runtime fallback for opening `index.html` as `file://`; do not hand-edit it.
- `app.js`: renderers, grading, persistence, review, and localization.
- `sw.js`: precaches the loader, bundle, JSON files, and assets for the published offline PWA.

## Question identity

Every 2.0 record must include:

```json
{
  "exam": "A",
  "n": 1,
  "id": "v2-A-1",
  "sourceId": "A-1",
  "version": "2.0"
}
```

Keep `sourceId` equal to the original question ID. Prefix the runtime `id` with the version and exam (`v2-A-1`) so histories for 1.0 and 2.0 cannot collide. Preserve original question order and metadata where useful.

## Interaction types

Use the smallest control that matches the original exercise:

- Ordinary single-answer choice: `opts`, `ans`, `multi: false`; the app renders radio inputs.
- Ordinary multi-answer choice: `opts`, `ans`, `multi: true`; the app renders checkboxes and permits selecting every option.
- `select-grid`: one dropdown per row. Each row has a stable `id`, visible `label`, `options` with stable IDs/text, and one `answer` ID.
- `boolean`: one Yes/No radio group per row.
- `assign`: drag blocks to named targets. Set `reuse: "once"` when an option disappears from the source list after placement; set `reuse: "multiple"` when the source image/instructions allow an option to be used more than once. Used one-time blocks remain visible in place, dimmed and disabled.
- `order`: drag blocks into ordered slots. Use one-time options and a fixed number of slots. Keep an accessible keyboard path through selecting a block and activating a slot.
- Code/formula question: set `layout: "code"`; `interaction.code` is an ordered array of literal `{ "text": "..." }` fragments and `{ "row": "row-id" }` placeholders. Each placeholder references a row in `interaction.rows`. Put only text and answer slots actually present in the source; do not invent wrappers, conditions, columns, or lines.

Example row:

```json
{
  "id": "storage-type",
  "label": "Sensor data",
  "answer": "elastic",
  "options": [
    { "id": "standard", "text": "Standard" },
    { "id": "elastic", "text": "Elastic" }
  ]
}
```

## Source verification

1. Read the original question text and identify its matching question and solution images by the record's `stem`/`ex` references. Do not infer the image pairing from adjacent filenames or question numbers alone.
2. Compare each prompt, row label, choice, and correct answer against the matching original. Treat the solution image as authoritative for answer keys; use the exercise instructions to determine whether choices repeat or are ordered.
3. For case-study questions, preserve the relevant exhibits as context images or transcribe their content accurately. Do not remove context images needed to answer the question. Remove only images that are replaced by actual controls.
4. If text, choice, pairing, or answer is unclear, stop and mark that question for human review rather than guessing.
5. Keep answer IDs language-independent. Future translations belong in locale-specific text fields; never encode translated text as the answer key.

## Required validation

For each migrated exam:

1. Parse the JSON and check that all question IDs are unique within the 2.0 bank and do not collide with 1.0 IDs.
2. Check that every interaction row has options and its answer ID exists in that row.
3. Check that code placeholders reference existing rows and that each literal fragment matches the original formula.
4. Check D&D reuse rules, slot count, and order against the prompt and answer-area evidence.
5. Run `node build-exams.js`; this validates the JSON set and refreshes the offline bundle.
6. Test representative questions in practice and exam modes, including saving, resume, grading, review, and rendering with no screenshot substituted for an interactive control.
7. Open `index.html` as `file://` to check the bundle fallback. On the published site, confirm JSON and the updated bundle are cached by the service worker after a connected visit.

## Scope and safety

- Do not edit unrelated exams or refactor the 1.0 bank during a single-exam migration.
- Do not delete 1.0 until all exams are migrated, answer/history compatibility is verified, and removal is explicitly scheduled in the roadmap.
- Do not edit generated `exams-v2.bundle.js` by hand; always rebuild it from JSON.
