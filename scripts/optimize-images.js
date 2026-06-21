import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicImgDir = path.join(__dirname, '../public/img');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const name = path.basename(file, path.extname(file));
        const newPath = path.join(dir, `${name}.webp`);
        
        console.log(`Converting ${file} -> ${name}.webp`);
        try {
          await sharp(fullPath)
            .webp({ quality: 80, effort: 6 })
            .toFile(newPath);
            
          // Delete original file
          fs.unlinkSync(fullPath);
          console.log(`Deleted original: ${file}`);
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  }
}

async function run() {
  console.log('Starting image optimization...');
  await processDirectory(publicImgDir);
  console.log('Finished image optimization.');
}

run();
