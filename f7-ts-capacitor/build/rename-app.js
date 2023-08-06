const fs = require('fs');
const path = require('path');
const prompt = require('prompt-sync')();
const exclusions = ["node_modules", ".vscode","vite.config.js", "tsconfig.json", "build",".git"];

function searchReplace(folderPath, searchStr, replaceStr) {
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file);
    const fileName = path.basename(filePath);

    if (exclusions.some((exclusion) => fileName.match(exclusion))) {
      console.log(`Skipping excluded: ${filePath}`);
      return;
    }

    if (fs.statSync(filePath).isDirectory()) {
      // Recursively process subfolders
      searchReplace(filePath, searchStr, replaceStr);
    } else {
      // Process individual file
      fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
          console.error(`Error reading file: ${filePath}`, err);
          return;
        }

        const updatedContent = content.replace(new RegExp(searchStr, 'g'), replaceStr);

        fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
          if (err) {
            console.error(`Error writing to file: ${filePath}`, err);
          }
        });
      });
    }
  });
}

const appName = prompt('App name:');
const appPackage = prompt('App id (e.g. com.f7.app): ');

if(!appName || !appPackage) {
  console.log('App name or id not set - exiting.');
  process.exit(0);
}
const parentFolderPath = process.cwd();

searchReplace(parentFolderPath, "xyzappname", appName);
searchReplace(parentFolderPath, "com.f7.xyzappname", appPackage);
