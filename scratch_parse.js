const fs = require('fs');
const filepath = 'C:/Users/NATAL/.gemini/antigravity-ide/brain/1d4932a9-7544-46af-80d7-7f7de6348a6a/.system_generated/steps/600/content.md';
const text = fs.readFileSync(filepath, 'utf8');

const matches = text.match(/https:\/\/down-br\.img\.susercontent\.com\/file\/[a-zA-Z0-9_-]+/g) || [];
const unique = [...new Set(matches)];
console.log('Images for Argola 2 Fileiras:', unique);
