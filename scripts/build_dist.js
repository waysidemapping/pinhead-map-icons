import { existsSync, rmSync, mkdirSync, readdirSync, copyFileSync, writeFileSync, readFileSync } from 'fs';
import { join, basename, extname } from 'path';

const sourceDir = 'icons';
const distIconsDir = 'dist/icons';

const version = JSON.parse(readFileSync('package.json')).version;

function ensureEmptyDir(dir) {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
  }
  mkdirSync(dir, { recursive: true });
}

function collectFiles(dir) {
  let results = [];
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(collectFiles(fullPath));
    } else if (entry.isFile() &&
      extname(entry.name).toLowerCase() === '.svg') {
      results.push(fullPath);
    }
  }

  return results;
}

async function flatCopy() {
  ensureEmptyDir(distIconsDir);

  const files = collectFiles(sourceDir);
  const seenNames = new Set();

  const manifest = {
    version: version,
    icons: {}
  };
  const complete = {
    version: version,
    icons: {}
  };

  for (const file of files) {
    const filename = basename(file, extname(file))
    manifest.icons[filename] = {};

    const subdir = file.slice(sourceDir.length + 1, file.length - basename(file).length - 1);
    complete.icons[filename] = Object.assign({}, manifest.icons[filename]);
    if (subdir) {
      complete.icons[filename].srcdir = subdir;
    }
    complete.icons[filename].svg = readFileSync(file, {encoding: 'utf8'});

    if (seenNames.has(filename)) {
      throw new Error(`Filename collision detected: ${filename}`);
    }

    seenNames.add(filename);

    copyFileSync(file, join(distIconsDir, filename) + '.svg');
  }
  // sort icons by ID
  manifest.icons = Object.fromEntries(
    Object.entries(manifest.icons).sort(([keyA], [keyB]) =>
      keyA.localeCompare(keyB)
    )
  );
  complete.icons = Object.fromEntries(
    Object.entries(complete.icons).sort(([keyA], [keyB]) =>
      keyA.localeCompare(keyB)
    )
  );

  writeFileSync(distIconsDir + '/index.json', JSON.stringify(manifest));
  writeFileSync(distIconsDir + '/index.complete.json', JSON.stringify(complete));
 
  console.log(`Built ${files.length} icons`);
}

try {
  flatCopy();
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
