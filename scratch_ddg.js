const fs = require('fs');
const https = require('https');

const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent('site:shopee.com.br "Rock Body"')}`;
https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    fs.writeFileSync('ddg_out.html', html);
    const links = html.match(/href="([^"]+)"/g) || [];
    console.log('Links count:', links.length);
    links.filter(l => l.includes('shopee')).slice(0, 10).forEach(l => console.log(l));
  });
});
