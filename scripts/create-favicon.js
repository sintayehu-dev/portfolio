const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Path to source SVG and destination ICO
const svgPath = path.join(__dirname, '../public/circle-favicon.svg');
const icoPath = path.join(__dirname, '../public/favicon.ico');

// Create favicon.ico from SVG with multiple sizes
async function createFavicon() {
  try {
    // Create a PNG buffer from the SVG at different sizes
    const sizes = [16, 32, 48, 64, 128, 256];
    const pngBuffers = await Promise.all(
      sizes.map(size => 
        sharp(svgPath)
          .resize(size, size)
          .png()
          .toBuffer()
      )
    );
    
    // For now, we'll just use the 16x16 size for the ICO
    // In a production environment, you might want to use a library 
    // that can create proper multi-size ICO files
    fs.writeFileSync(icoPath, pngBuffers[0]);
    
    // Also save individual PNG files for different use cases
    const publicDir = path.join(__dirname, '../public');
    
    pngBuffers.forEach((buffer, index) => {
      const size = sizes[index];
      fs.writeFileSync(
        path.join(publicDir, `favicon-${size}x${size}.png`), 
        buffer
      );
    });
    
    console.log('Favicon created successfully in multiple sizes!');
  } catch (err) {
    console.error('Error creating favicon:', err);
  }
}

createFavicon(); 