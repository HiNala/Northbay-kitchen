const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const kitchenDir = path.join(__dirname, '../public/mock/kitchens');
const bathDir = path.join(__dirname, '../public/mock/baths');

if (!fs.existsSync(kitchenDir)) {
  fs.mkdirSync(kitchenDir, { recursive: true });
}

if (!fs.existsSync(bathDir)) {
  fs.mkdirSync(bathDir, { recursive: true });
}

// Unsplash URLs for high-quality kitchen and bath images
const kitchenImages = [
  {
    url: 'https://source.unsplash.com/gFB1IPmH6RE/1600x900',
    filename: 'kitchen-1.jpg',
    description: 'Modern white kitchen with island and wood accents'
  },
  {
    url: 'https://source.unsplash.com/MP0bgaS_d1c/1600x900',
    filename: 'kitchen-2.jpg',
    description: 'Contemporary kitchen with marble countertops'
  },
  {
    url: 'https://source.unsplash.com/7noZJ_4nhU8/1600x900',
    filename: 'kitchen-3.jpg',
    description: 'Farmhouse kitchen with brass fixtures'
  },
  {
    url: 'https://source.unsplash.com/R0bQu0RQY8o/1600x900',
    filename: 'kitchen-4.jpg',
    description: 'Luxury kitchen with custom cabinetry'
  },
  {
    url: 'https://source.unsplash.com/5DS-19BrcpI/1600x900',
    filename: 'kitchen-5.jpg',
    description: 'Bright kitchen with large windows'
  },
  {
    url: 'https://source.unsplash.com/AQl-J19ocWE/1600x900',
    filename: 'kitchen-6.jpg',
    description: 'Upscale kitchen with high-end appliances'
  },
  {
    url: 'https://source.unsplash.com/n9qTUWV99qc/1600x900',
    filename: 'kitchen-7.jpg',
    description: 'Modern kitchen with waterfall island'
  },
  {
    url: 'https://source.unsplash.com/DXsQvwtdvnE/1600x900',
    filename: 'kitchen-8.jpg',
    description: 'Elegant kitchen with brass accents'
  }
];

const bathImages = [
  {
    url: 'https://source.unsplash.com/Zm2n2O7Fph4/1600x900',
    filename: 'bath-1.jpg',
    description: 'Spa-like bathroom with freestanding tub'
  },
  {
    url: 'https://source.unsplash.com/0FQneB1VjaM/1600x900',
    filename: 'bath-2.jpg',
    description: 'Modern bathroom with glass shower'
  },
  {
    url: 'https://source.unsplash.com/SDDVW5G4bAQ/1600x900',
    filename: 'bath-3.jpg',
    description: 'Elegant bathroom with marble features'
  },
  {
    url: 'https://source.unsplash.com/KBIYg_CWwDw/1600x900',
    filename: 'bath-4.jpg',
    description: 'Contemporary bathroom with double vanity'
  },
  {
    url: 'https://source.unsplash.com/22ETin-M8bU/1600x900',
    filename: 'bath-5.jpg',
    description: 'Luxurious bathroom with soaking tub'
  },
  {
    url: 'https://source.unsplash.com/y4KZ8xSHQIc/1600x900',
    filename: 'bath-6.jpg',
    description: 'Minimalist bathroom with clean lines'
  },
  {
    url: 'https://source.unsplash.com/IH7wPsjwomc/1600x900',
    filename: 'bath-7.jpg',
    description: 'Upscale bathroom with brass fixtures'
  },
  {
    url: 'https://source.unsplash.com/KFOtOXb5KzQ/1600x900',
    filename: 'bath-8.jpg',
    description: 'Sophisticated bathroom with custom tile work'
  }
];

// Function to download an image
function downloadImage(imageObj, directory) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(directory, imageObj.filename);
    const file = fs.createWriteStream(fullPath);
    
    https.get(imageObj.url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${imageObj.filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(fullPath, () => {}); // Delete the file if there's an error
      console.error(`Error downloading ${imageObj.filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all kitchen images
async function downloadKitchenImages() {
  for (const image of kitchenImages) {
    await downloadImage(image, kitchenDir);
  }
}

// Download all bath images
async function downloadBathImages() {
  for (const image of bathImages) {
    await downloadImage(image, bathDir);
  }
}

// Run the download
async function downloadAllImages() {
  console.log('Starting download of kitchen images...');
  await downloadKitchenImages();
  
  console.log('Starting download of bathroom images...');
  await downloadBathImages();
  
  console.log('All images downloaded successfully!');
}

downloadAllImages().catch(console.error); 