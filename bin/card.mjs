import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Convertir `import.meta.url` en chemin de fichier
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Lire le fichier `output`
const output = readFileSync(join(__dirname, 'output'), 'utf8');

// Afficher le contenu
console.log(output);
