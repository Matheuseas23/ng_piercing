const https = require('https');
const fs = require('fs');

async function searchDDG(query) {
  return new Promise((resolve, reject) => {
    const url = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query);
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
  });
}

async function run() {
  const queries = [
    'site:shopee.com.br "Rock Body Piercing" daith coracao',
    'site:shopee.com.br "Rock Body Piercing" kit',
    'site:shopee.com.br "Rock Body Piercing" nostril',
    'site:shopee.com.br "Rock Body Piercing" mamilo',
    'site:shopee.com.br "Rock Body Piercing" clicker'
  ];

  for (const q of queries) {
    console.log('Searching:', q);
    const html = await searchDDG(q);
    const matches = html.match(/uddg=([^&"]+)/g) || [];
    for (const m of matches) {
      const decoded = decodeURIComponent(m.replace('uddg=', ''));
      if (decoded.includes('487265551') || (decoded.includes('shopee.com.br') && decoded.toLowerCase().includes('piercing'))) {
        console.log(' ->', decoded);
      }
    }
  }
}

run();
