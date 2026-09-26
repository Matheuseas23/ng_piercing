const fs = require('fs');
const path = require('path');

const stepsDir = 'C:/Users/NATAL/.gemini/antigravity-ide/brain/1d4932a9-7544-46af-80d7-7f7de6348a6a/.system_generated/steps';

const allSteps = [
  { id: 481, model: "labretBorboleta", name: "Labret Borboleta Titânio Zircônia" },
  { id: 600, model: "argolaCravejada2Fileiras", name: "Argola Segmento Articulado 2 Fileiras Zircônia" },
  { id: 606, model: "umbigoBananaDupla", name: "Umbigo Banana Titânio 2 Pedras Zircônia" },
  { id: 608, model: "transversalCoracao", name: "Transversal Coração Zircônia PVD" },
  { id: 610, model: "clusterConch", name: "Cluster Conch Helix Barbell Zircônia" },
  { id: 612, model: "dRingNostril", name: "Argola D-Ring Aço Cirúrgico Nostril" },
  { id: 614, model: "labretSolitario", name: "Labret Solitário Zircônia Cravejada Titânio" },
  { id: 616, model: "bananaLisa", name: "Bananinha Microbell Aço Cirúrgico" },
  { id: 618, model: "argolaEstrelaPingente", name: "Argola Titânio com Estrela / Cruz" },
  { id: 620, model: "barbellMamiloEsferico", name: "Barbell Mamilo Titânio PVD Esférico" },
  { id: 622, model: "labretTiara4Pedras", name: "Labret Tiara Marquise 4 Pedras Strass" },
  { id: 646, model: "labretGotaEstrela", name: "Labret Titânio Pingente Estrela / Gota" },
  { id: 648, model: "argolaClickerLisa", name: "Argola Aço Inoxidável Clicker Lisa" },
  { id: 650, model: "transversalIndiano", name: "Transversal Indiano Strass Orelha" },
  { id: 652, model: "labretMiniClusterPontoLuz", name: "Labret Mini Cluster Titânio PVD Ponto de Luz" },
  { id: 654, model: "argolaSegmentoEstrelas", name: "Argola Segmento Articulado Estrelas" },
  { id: 656, model: "argolaSegmentoLosango", name: "Argola Segmento Losango Zircônias Cravejadas" },
  { id: 658, model: "umbigo4Pedras", name: "Umbigo Aço Cirúrgico 4 Pedras Zircônia" },
  { id: 660, model: "umbigoMeiaFlor", name: "Umbigo Banana Meia Flor Zircônias" },
  { id: 662, model: "umbigoIndianoMandala", name: "Umbigo Indiano Mandala Zircônia" },
  { id: 664, model: "barbellRetoMinibarbell", name: "Minibarbell Reto Aço Cirúrgico Bolinha" },
  { id: 690, model: "labretCoracaoZirconia", name: "Labret Trágus Titânio Coração Zircônia" },
  { id: 692, model: "labretPlanetaEstrela", name: "Labret Titânio PVD Planeta / Estrela" },
  { id: 694, model: "clusterHelixLabret", name: "Labret Titânio Cluster Zircônias" },
  { id: 702, model: "labretPingenteBorboleta", name: "Labret Titânio Pingente Borboleta Zircônia" },
  { id: 704, model: "cluster3Flores", name: "Labret Cluster 3 Flores Zircônia" },
  { id: 715, model: "nostrilPontoLuz", name: "Nostril Aço Cirúrgico 2 Pedras / Ponto de Luz" },
  { id: 717, model: "ferraduraSepto", name: "Ferradura Aço Cirúrgico Rosca Interna Septo Daith" }
];

const mappedImages = {};

allSteps.forEach(item => {
  const filePath = path.join(stepsDir, String(item.id), 'content.md');
  if (fs.existsSync(filePath)) {
    const text = fs.readFileSync(filePath, 'utf8');
    const matches = text.match(/https:\/\/down-br\.img\.susercontent\.com\/file\/[a-zA-Z0-9_-]+/g) || [];
    const unique = [...new Set(matches)];
    if (unique.length > 0) {
      mappedImages[item.model] = {
        name: item.name,
        primaryImage: unique[0],
        secondaryImage: unique[1] || unique[0],
        allCount: unique.length,
        images: unique.slice(0, 5)
      };
    }
  }
});

console.log(JSON.stringify(mappedImages, null, 2));
fs.writeFileSync('scratch/rock_body_images.json', JSON.stringify(mappedImages, null, 2), 'utf8');
