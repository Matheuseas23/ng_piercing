const fs = require('fs');
const content = fs.readFileSync('js/products.js', 'utf8');

// Extrair produtos usando regex
const regex = /id:\s*(\d+),\s*nome:\s*"([^"]+)",[\s\S]*?categoria:\s*"([^"]+)",[\s\S]*?imagemUrl:\s*([^,\n]+)/g;
let m;
const items = [];
while ((m = regex.exec(content)) !== null) {
  items.push({ id: m[1], nome: m[2], categoria: m[3], img: m[4].trim() });
}
console.log('Total encontrados: ' + items.length);
items.forEach(i => console.log(i.id.padStart(2) + ' | ' + i.categoria.padEnd(14) + ' | ' + i.img.padEnd(40) + ' | ' + i.nome));
