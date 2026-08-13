import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourcePath = process.argv[2] || path.join(root, "public", "stackorcs-logo.png");
const publicIconDirectory = path.join(root, "public", "icons");
const brandBackground = { r: 255, g: 255, b: 255, alpha: 1 };

await mkdir(publicIconDirectory, { recursive: true });

const { data, info } = await sharp(await readFile(sourcePath))
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// The master artwork is orange line art on an opaque white canvas. Preserve the
// original coloured pixels while turning only the neutral canvas transparent.
for (let index = 0; index < data.length; index += 4) {
  const red = data[index];
  const green = data[index + 1];
  const blue = data[index + 2];
  const redOverGreen = red - green;
  const redOverBlue = red - blue;
  const orangeStrength = Math.min(redOverGreen, redOverBlue);
  data[index + 3] =
    red > 120 && redOverGreen > 10 && redOverBlue > 20
      ? Math.max(0, Math.min(255, (orangeStrength - 6) * 8))
      : 0;
}

const transparentMark = await sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 2 })
  .png()
  .toBuffer();

async function makeIcon(size, markScale = 0.78) {
  const markSize = Math.round(size * markScale);
  const mark = await sharp(transparentMark)
    .resize(markSize, markSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: brandBackground,
    },
  })
    .composite([
      {
        input: mark,
        left: Math.floor((size - markSize) / 2),
        top: Math.floor((size - markSize) / 2),
      },
    ])
    .png()
    .toBuffer();
}

function createIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const directory = Buffer.alloc(images.length * 16);
  let offset = header.length + directory.length;

  images.forEach(({ size, data: image }, index) => {
    const entry = index * 16;
    directory.writeUInt8(size === 256 ? 0 : size, entry);
    directory.writeUInt8(size === 256 ? 0 : size, entry + 1);
    directory.writeUInt8(0, entry + 2);
    directory.writeUInt8(0, entry + 3);
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(image.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += image.length;
  });

  return Buffer.concat([header, directory, ...images.map(({ data: image }) => image)]);
}

const [favicon16, favicon32, favicon48, icon180, icon192, icon512, maskable512] =
  await Promise.all([
    makeIcon(16, 0.9),
    makeIcon(32, 0.9),
    makeIcon(48, 0.88),
    makeIcon(180, 0.76),
    makeIcon(192, 0.78),
    makeIcon(512, 0.78),
    makeIcon(512, 0.64),
  ]);

await Promise.all([
  writeFile(
    path.join(root, "app", "favicon.ico"),
    createIco([
      { size: 16, data: favicon16 },
      { size: 32, data: favicon32 },
      { size: 48, data: favicon48 },
    ]),
  ),
  writeFile(path.join(root, "app", "icon.png"), icon512),
  writeFile(path.join(root, "app", "apple-icon.png"), icon180),
  writeFile(path.join(publicIconDirectory, "stackorcs-192.png"), icon192),
  writeFile(path.join(publicIconDirectory, "stackorcs-512.png"), icon512),
  writeFile(path.join(publicIconDirectory, "stackorcs-maskable-512.png"), maskable512),
]);
