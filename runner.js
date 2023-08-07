import fs from 'fs';
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from 'child_process';

const currentFileName = fileURLToPath(import.meta.url);
const currentDirectoryName = dirname(currentFileName);

const files = fs.readdirSync(path.join(currentDirectoryName, 'dist'));

files.forEach(file => {

    if (path.extname(file) === '.js') {

        const jsFilePath = path.join(currentDirectoryName, 'dist', file);

        execSync(`node "${jsFilePath}"`, { stdio: 'inherit' });
    }
});
