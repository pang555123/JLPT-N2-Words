const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { lookup } = require('@seyoungsong/hanjadict');

const projectRoot = path.resolve(__dirname, '..');
const ctx = {};

vm.createContext(ctx);
vm.runInContext(
  `${fs.readFileSync(path.join(projectRoot, 'words.js'), 'utf8')}; this.words = jlptWords;`,
  ctx
);

const chars = new Set();
for (const word of ctx.words) {
  for (const char of word.kanji || '') {
    if (/[\u3400-\u9fff]/.test(char)) chars.add(char);
  }
}

const huneum = {};
for (const char of [...chars].sort()) {
  const value = lookup(char);
  if (value) huneum[char] = value;
}

fs.writeFileSync(
  path.join(projectRoot, 'hanja_huneum.js'),
  `const KOREAN_HANJA_HUNEUM = ${JSON.stringify(huneum, null, 2)};\n`,
  'utf8'
);

console.log(JSON.stringify({
  uniqueKanji: chars.size,
  mapped: Object.keys(huneum).length,
}, null, 2));
