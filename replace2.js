const fs = require('fs');
const path = require('path');

// Fix Header
const headerPath = path.join(__dirname, 'src/components/Header.tsx');
let headerContent = fs.readFileSync(headerPath, 'utf8');
headerContent = headerContent.replace(/"Classic Build Sheets"/g, '"Classic Build Sheet"');
headerContent = headerContent.replace(/>Classic Build Sheets</g, '>Classic Build Sheet<');
fs.writeFileSync(headerPath, headerContent);

// Update Classic Window Sticker files
const files = [
  'src/components/ClassicWindowStickerSections1.tsx',
  'src/components/ClassicWindowStickerSections2.tsx',
  'src/components/ClassicWindowStickerSections3.tsx',
  'src/components/ClassicWindowStickerSections4.tsx',
  'src/app/classic-window-stickers/page.tsx'
];

for (const file of files) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/Window Stickers/g, 'Build Sheets')
    .replace(/Window Sticker/g, 'Build Sheet')
    .replace(/window stickers/g, 'build sheets')
    .replace(/window sticker/g, 'build sheet');
    
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
}
