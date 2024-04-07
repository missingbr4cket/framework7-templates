import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {rollup} from 'rollup';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const cordovaDir = path.resolve(__dirname, '../cordova');
const cordovaWWWDir = `${cordovaDir}/www`;
const cordovaAssetsDir = `${cordovaWWWDir}/assets`;

const build = async () => {
  if(fs.existsSync(cordovaWWWDir)) {
    fs.readdirSync(cordovaWWWDir).forEach((f) => {
        const filePath = path.join(cordovaWWWDir, f);
        fs.rmSync(filePath, { recursive: true, force: true });
    });
  }
  if(!fs.existsSync(cordovaWWWDir)) {
    fs.mkdirSync(cordovaWWWDir);
  }
  fs.cpSync(distDir, path.resolve(__dirname, cordovaWWWDir),{recursive: true});  
  // rebuild JS without modules
  let entry = fs
    .readdirSync(path.resolve(__dirname, cordovaAssetsDir))
    .filter((f) => f.includes('index-') && f.includes('.js'))[0];
  const hash = entry.split('index-')[1].split('.js')[0];

  const bundle = await rollup({
    input: path.resolve(__dirname, cordovaAssetsDir, entry),
  });
  await bundle.write({
    file: path.resolve(__dirname, cordovaAssetsDir, `index-${hash}.js`),
    format: 'iife',
    name: "App",
    sourcemap: false,
  });

  // Remove old chunk files
  fs.readdirSync(path.resolve(__dirname, cordovaAssetsDir)).forEach((f) => {
    if (f.includes('.js') && f.split('.').length > 2 && f !== `index-${hash}.js`) {
      fs.rmSync(path.resolve(__dirname, cordovaAssetsDir, f));
    }
  });

  // fix index.html
  const indexPath = path.resolve(__dirname, `${cordovaWWWDir}/index.html`);
  const indexContent = fs
    .readFileSync(indexPath, 'utf8')
    .split('\n')
    .map((line) => {
      if (line.includes('<link rel="modulepreload"')) return '';
      if (line.includes('<script type="module"')) return '';
      if (line.includes('</body>'))
        return `  <script src="assets/index-${hash}.js"></script>\n</body>`;
      return line;
    })
    .join('\n');
  fs.writeFileSync(indexPath, indexContent);
};

build();