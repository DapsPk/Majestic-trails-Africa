const sharp = require('sharp');
const path = require('path');

async function optimizeDescriptionImage() {
  console.log('🖼️  Optimizing description image...');
  
  const inputPath = path.join(__dirname, '../public/images/zanzibar/description/beach.jpg');
  const outputPath = path.join(__dirname, '../public/images/zanzibar/description/beach.webp');
  
  await sharp(inputPath)
    .resize(800, 600, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(outputPath);
  
  console.log('✅ Done! Image optimized and saved as beach.webp');
}

optimizeDescriptionImage();