const https = require('https');
const fs = require('fs');
const path = require('path');

// Ensure directory exists
const targetDir = path.join(__dirname, '..', 'public', 'mock', 'hero');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// High-quality kitchen and bathroom hero images from Unsplash
const imageUrls = [
  'https://source.unsplash.com/random/1920x1080?luxury,kitchen,interior',
  'https://source.unsplash.com/random/1920x1080?modern,kitchen,design',
  'https://source.unsplash.com/random/1920x1080?luxury,bathroom,interior',
  'https://source.unsplash.com/random/1920x1080?kitchen,marble,countertop',
  'https://source.unsplash.com/random/1920x1080?bathroom,spa,design',
  'https://source.unsplash.com/random/1920x1080?kitchen,bright,luxury'
];

// Download each image
imageUrls.forEach((url, index) => {
  const fileName = `hero-${index + 1}.jpg`;
  const filePath = path.join(targetDir, fileName);
  
  console.log(`Downloading ${fileName}...`);
  
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${fileName}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${fileName}:`, err.message);
  });
}); 