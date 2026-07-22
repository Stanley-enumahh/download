import sharp from "sharp";
import { readdirSync } from "fs";
import { join } from "path";

const INPUT = "./public/images/gallery/original";
const OUTPUT = "./public/images/gallery";

readdirSync(INPUT).forEach(async (file) => {
  await sharp(join(INPUT, file))
    .resize(1280) // max width, keeps aspect ratio
    .webp({ quality: 80 })
    .toFile(join(OUTPUT, file.replace(/\.[^.]+$/, ".webp")));
  console.log(`✓ ${file}`);
});