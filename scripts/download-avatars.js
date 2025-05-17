const https = require('https');
const fs = require('fs');
const path = require('path');

// Ensure directory exists
const targetDir = path.join(__dirname, '..', 'public', 'mock', 'avatars');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Avatar images from Unsplash (random portraits)
const imageUrls = [
  'https://source.unsplash.com/random/200x200?portrait,woman',
  'https://source.unsplash.com/random/200x200?portrait,woman,professional',
  'https://source.unsplash.com/random/200x200?portrait,man',
  'https://source.unsplash.com/random/200x200?portrait,man,professional',
  'https://source.unsplash.com/random/200x200?portrait,person',
  'https://source.unsplash.com/random/200x200?portrait,business'
];

// Download each image
imageUrls.forEach((url, index) => {
  const fileName = `avatar-${index + 1}.jpg`;
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