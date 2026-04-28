const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const desktopJlptDir = path.join(process.env.USERPROFILE, 'Desktop', 'jlpt');
const projectRoot = path.resolve(__dirname, '..');

function normalizeText(value) {
  return String(value || '')
    .replace(/\u0000/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\s*\n\s*/g, ' ')
    .trim();
}

function cleanMeaning(value) {
  return normalizeText(value)
    .replace(/^[-ㆍ・:：]+/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function hasJapanese(value) {
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(value);
}

async function pdfText(fileNamePrefix) {
  const fileName = fs.readdirSync(desktopJlptDir).find((name) => name.startsWith(fileNamePrefix));
  if (!fileName) {
    throw new Error(`PDF not found with prefix: ${fileNamePrefix}`);
  }

  const parser = new PDFParse({
    data: fs.readFileSync(path.join(desktopJlptDir, fileName)),
  });

  try {
    const result = await parser.getText({ pageJoiner: '\n---PAGE page_number---\n' });
    return result.text;
  } finally {
    await parser.destroy();
  }
}

function extractWords(text) {
  const words = [];
  const seen = new Set();
  const lines = text.split(/\r?\n/);

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i].trim();
    if (!raw || raw.includes('---PAGE') || raw.includes('저작권자') || raw.includes('해커스')) {
      continue;
    }

    const parts = raw.split(/\t+/).map((part) => part.trim()).filter(Boolean);
    if (parts.length < 3) {
      continue;
    }

    for (let partIndex = 0; partIndex + 2 < parts.length; partIndex += 3) {
      let kanji = parts[partIndex];
      let hiragana = parts[partIndex + 1];
      let meaning = parts[partIndex + 2];

      if (!hasJapanese(kanji) || !/[\u3040-\u309f]/.test(hiragana)) {
        continue;
      }

      kanji = normalizeText(kanji);
      hiragana = normalizeText(hiragana);
      meaning = cleanMeaning(meaning);

      if (!kanji || !hiragana || !meaning || /[①②③④ⓐⓑⓒⓓⓔⓕ]/.test(kanji)) {
        continue;
      }

      const key = `${kanji}|${hiragana}`;
      if (seen.has(key)) {
        continue;
      }

      seen.add(key);
      words.push({ kanji, hiragana, meaning });
    }
  }

  return words;
}

function extractVocabQuizQuestions(text) {
  const questions = [];
  const pages = text.split(/---PAGE \d+---/);

  for (const page of pages) {
    if (!page.includes('정답 :')) {
      continue;
    }

    const lines = page.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const optionsByLetter = {};
    const stemsByNumber = {};

    for (const line of lines) {
      const optionMatch = line.match(/^([a-f])\.\s+(.+?)\s*\(/);
      if (optionMatch) {
        optionsByLetter[optionMatch[1]] = normalizeText(optionMatch[2]);
        continue;
      }

      const stemMatch = line.match(/^(\d+)\.\s+(.+)$/);
      if (stemMatch && hasJapanese(stemMatch[2])) {
        stemsByNumber[stemMatch[1]] = normalizeText(stemMatch[2]);
      }
    }

    const answerText = page.slice(page.indexOf('정답 :')).replace(/\s+/g, ' ');
    const answersByNumber = {};
    for (const match of answerText.matchAll(/(\d+)\.\s*([a-f])\(([^)]*)\)/g)) {
      answersByNumber[match[1]] = {
        letter: match[2],
        meaning: cleanMeaning(match[3]),
      };
    }

    const optionEntries = Object.entries(optionsByLetter);
    for (const [number, stem] of Object.entries(stemsByNumber)) {
      const answer = answersByNumber[number];
      if (!answer || !optionsByLetter[answer.letter]) {
        continue;
      }

      questions.push({
        type: 'reading-match',
        source: '어휘 암기 퀴즈',
        prompt: '다음 단어의 알맞은 읽기를 고르세요.',
        stem,
        options: optionEntries.map(([letter, text]) => ({ label: letter, text })),
        answer: answer.letter,
        meaning: answer.meaning,
      });
    }
  }

  return questions;
}

function writeJsConst(fileName, constName, data) {
  const js = `const ${constName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(projectRoot, fileName), js, 'utf8');
}

(async () => {
  const wordsText = await pdfText('1.');
  const quizText = await pdfText('3.');

  const words = extractWords(wordsText);
  const questions = extractVocabQuizQuestions(quizText);

  writeJsConst('words.js', 'jlptWords', words);
  writeJsConst('questions.js', 'jlptQuestions', questions);

  console.log(JSON.stringify({
    words: words.length,
    questions: questions.length,
    firstWord: words[0],
    firstQuestion: questions[0],
  }, null, 2));
})();
