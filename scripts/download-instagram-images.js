const https = require('https');
const fs = require('fs');
const path = require('path');

// Ensure directory exists
const targetDir = path.join(__dirname, '..', 'public', 'mock', 'instagram');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Kitchen and bath design image searches from Unsplash
const imageUrls = [
  'https://source.unsplash.com/random/800x800?kitchen,modern',
  'https://source.unsplash.com/random/800x800?bathroom,luxury',
  'https://source.unsplash.com/random/800x800?kitchen,interior',
  'https://source.unsplash.com/random/800x800?bath,design',
  'https://source.unsplash.com/random/800x800?kitchen,design',
  'https://source.unsplash.com/random/800x800?interior,bathroom'
];

// Download each image
imageUrls.forEach((url, index) => {
  const fileName = `instagram-${index + 1}.jpg`;
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