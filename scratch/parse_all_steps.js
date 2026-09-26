const fs = require('fs');
const path = require('path');

const stepsDir = 'C:/Users/NATAL/.gemini/antigravity-ide/brain/1d4932a9-7544-46af-80d7-7f7de6348a6a/.system_generated/steps';
const stepIds = [481, 600, 606, 608, 610, 612, 614, 616, 618, 620, 622, 646, 648, 650, 652, 654, 656, 658, 660, 662, 664];

const results = [];

stepIds.forEach(id => {
  const filePath = path.join(stepsDir, String(id), 'content.md');
  if (!fs.existsSync(filePath)) {
    console.log(`Step ${id} não encontrado`);
    return;
  }
  const text = fs.readFileSync(filePath, 'utf8');
  
  // Encontrar o título real do produto na página da Shopee
  // Na página da Shopee, o título costuma aparecer logo após o breadcrumb ou em tags específicas
  let title = 'Desconhecido';
  const titleMatch = text.match(/# (.*?)\n/) || 
                     text.match(/Piercing[^\n]+i\.\d+\.\d+/) || 
                     text.match(/【Rock-Body】[^\n]+/i) ||
                     text.match(/Rock-Body[^\n]+/i);
  
  // Buscar no texto trechos do título do anúncio
  const lines = text.split('\n');
  for (let l of lines) {
    if (l.includes('Piercing') || l.includes('Argola') || l.includes('Labret') || l.includes('Rock Body')) {
      if (l.length > 15 && l.length < 150 && !l.includes('http') && !l.includes('Shopee') && !l.includes('Avaliações')) {
        title = l.trim();
        break;
      }
    }
  }

  // Extrair imagens do CDN
  const imgMatches = text.match(/https:\/\/down-br\.img\.susercontent\.com\/file\/[a-zA-Z0-9_-]+/g) || [];
  const uniqueImgs = [...new Set(imgMatches)];

  results.push({
    step: id,
    title: title,
    imagesCount: uniqueImgs.length,
    firstImage: uniqueImgs[0],
    secondImage: uniqueImgs[1] || null,
    allImages: uniqueImgs
  });
});

console.log(JSON.stringify(results, null, 2));
