const fs = require('node:fs');

const questions = ['a', 'b', 'c'].flatMap(name => {
    const file = JSON.parse(fs.readFileSync(`exams/${name}.json`, 'utf8'));
    if (file.version !== '2.0' || file.exam !== name.toUpperCase() || !Array.isArray(file.questions)) throw new Error(`Invalid exam ${name}`);
    return file.questions;
});
const ids = questions.map(question => question.id);
if (new Set(ids).size !== ids.length) throw new Error('Duplicate version 2 question IDs');
fs.writeFileSync('exams-v2.bundle.js', `window.EXAMS_V2=${JSON.stringify(questions)};\nwindow.EXAMS_V2_UNAVAILABLE=false;\n`);
console.log(`Built offline bundle with ${questions.length} questions.`);
