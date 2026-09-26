const https = require('https');

const url = 'https://down-br.img.susercontent.com/file/br-11134207-820m0-mn5k2kwtn7r4b4';

https.get(url, (res) => {
  console.log('Status code:', res.statusCode);
  console.log('Content-Type:', res.headers['content-type']);
  console.log('Content-Length:', res.headers['content-length']);
});
