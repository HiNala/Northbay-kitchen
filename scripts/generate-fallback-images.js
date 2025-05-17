const fs = require('fs');
const path = require('path');

// Define the directories we need to check/create
const directories = [
  ['public', 'mock', 'kitchens'],
  ['public', 'mock', 'baths'],
  ['public', 'mock', 'portfolio'],
  ['public', 'mock', 'instagram']
];

// Create placeholder HTML for a simple SVG image
function createPlaceholderSVG(text, width, height, backgroundColor) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${backgroundColor}" />
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
}

// Ensure directories exist
directories.forEach(dirParts => {
  let currentPath = '';
  dirParts.forEach(part => {
    currentPath = path.join(currentPath, part);
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath, { recursive: true });
      console.log(`Created directory: ${currentPath}`);
    }
  });
});

// Generate kitchen images
const kitchenDir = path.join('public', 'mock', 'kitchens');
for (let i = 1; i <= 10; i++) {
  const fileName = `kitchen-${i}.jpg`;
  const filePath = path.join(kitchenDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    const svg = createPlaceholderSVG(`Kitchen ${i}`, 800, 600, '#7c5430');
    fs.writeFileSync(filePath, svg);
    console.log(`Created placeholder: ${filePath}`);
  }
}

// Generate bathroom images
const bathDir = path.join('public', 'mock', 'baths');
for (let i = 1; i <= 10; i++) {
  const fileName = `bath-${i}.jpg`;
  const filePath = path.join(bathDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    const svg = createPlaceholderSVG(`Bathroom ${i}`, 800, 600, '#4a6d8c');
    fs.writeFileSync(filePath, svg);
    console.log(`Created placeholder: ${filePath}`);
  }
}

// Generate portfolio images
const portfolioDir = path.join('public', 'mock', 'portfolio');
for (let i = 1; i <= 10; i++) {
  const fileName = `portfolio-${i}.jpg`;
  const filePath = path.join(portfolioDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    const svg = createPlaceholderSVG(`Portfolio ${i}`, 800, 600, '#5a7d59');
    fs.writeFileSync(filePath, svg);
    console.log(`Created placeholder: ${filePath}`);
  }
}

// Generate Instagram images
const instagramDir = path.join('public', 'mock', 'instagram');
for (let i = 1; i <= 6; i++) {
  const fileName = `instagram-${i}.jpg`;
  const filePath = path.join(instagramDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    const svg = createPlaceholderSVG(`Instagram ${i}`, 800, 800, '#8c6d4a');
    fs.writeFileSync(filePath, svg);
    console.log(`Created placeholder: ${filePath}`);
  }
}

console.log('All placeholder images have been generated successfully!'); 