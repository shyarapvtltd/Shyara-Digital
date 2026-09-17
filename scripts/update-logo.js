const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, '..', 'frontend', 'public', 'shyara.png');
const htmlPath = path.join(__dirname, '..', 'frontend', 'public', 'invoice-generator.html');

// Read image and convert to base64
const imgBuffer = fs.readFileSync(imgPath);
const base64Img = imgBuffer.toString('base64');
const dataUri = `data:image/png;base64,${base64Img}`;

// Read HTML template
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace logo image src
html = html.replace(/<img id="logo-img" src="[^"]*" alt="Shyara" onerror="handleLogoError\(\)">/, `<img id="logo-img" src="${dataUri}" alt="Shyara" onerror="handleLogoError()">`);

// Save updated HTML
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Logo successfully embedded as Base64 in HTML!');
