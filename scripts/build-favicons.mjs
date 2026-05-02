// Generate PNG variants of the favicon and OG image from SVG sources.
// Run with: node scripts/build-favicons.mjs
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const faviconSvg = readFileSync(resolve(root, "public/favicon.svg"));
const ogSvg = readFileSync(resolve(root, "scripts/og-image.svg"));

// Light-mode rendering of favicon (dark bg, light fg) for raster outputs.
// We use the same SVG but force the light branch by stripping the @media block.
const faviconRaster = Buffer.from(
  faviconSvg.toString().replace(/@media[^{]+\{[^}]+(\{[^}]+\}[^}]+)*\}/g, "")
);

async function out(name, buffer) {
  const path = resolve(root, "public", name);
  writeFileSync(path, buffer);
  console.log(`✓ ${name} (${buffer.length} bytes)`);
}

// Favicon PNG for Google search (multiple of 48; 96 is the sweet spot)
await out(
  "favicon-96.png",
  await sharp(faviconRaster).resize(96, 96).png({ compressionLevel: 9 }).toBuffer()
);

// Apple touch icon (180x180, no transparency)
await out(
  "apple-touch-icon.png",
  await sharp(faviconRaster)
    .resize(180, 180)
    .flatten({ background: "#0f0e0c" })
    .png({ compressionLevel: 9 })
    .toBuffer()
);

// Open Graph image (1200x630)
await out(
  "og-image.png",
  await sharp(ogSvg).resize(1200, 630).png({ compressionLevel: 9 }).toBuffer()
);

console.log("\nDone.");
