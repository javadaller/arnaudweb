#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Convertir `import.meta.url` en chemin de fichier
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Lire le fichier `output`
const outputFilePath = join(__dirname, 'output');
const output = readFileSync(outputFilePath, 'utf8');

// Afficher la carte de visite
console.log(chalk.green(boxen(output, { padding: 1, margin: 1, borderStyle: 'round' })));
