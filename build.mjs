// Importations nécessaires
import chalk from 'chalk';
import boxen from 'boxen';
import { writeFileSync, mkdirSync } from 'node:fs';
import path, { join } from 'node:path';
import { fileURLToPath } from 'url';

// Convertir import.meta.url en __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Définir les options pour Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
};

// Définir le texte et les couleurs avec chalk
const data = {
    name: chalk.white('           Arnaud Van Acker'),
    handle: chalk.white('arnaudweb'),
    shorthandle: chalk.white('arnaud'),
    work: chalk.white('Junior Developer @ BeCode.org'),
    npm: chalk.gray('https://npmjs.com/') + chalk.red('~arnaudweb'),
    github: chalk.gray('https://github.com/') + chalk.green('javadaller'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('arnaud-van-acker'),
    web: chalk.cyan('https://arnaudweb.be'),
    npx: `${chalk.red('npx')} ${chalk.white('arnaudweb')}`,
    labelWork: chalk.white.bold('    Work:'),
    labelnpm: chalk.white.bold('     npm:'),
    labelGitHub: chalk.white.bold('  GitHub:'),
    labelLinkedIn: chalk.white.bold('LinkedIn:'),
    labelWeb: chalk.white.bold('     Web:'),
    labelCard: chalk.white.bold('    Card:'),
};

// Créer les chaînes de texte à afficher
const newline = '\n';
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Combinez toutes les parties en une seule variable pour l'utiliser avec boxen
const output =
    heading +
    newline +
    newline + // Ajouter une ligne vide
    working +
    newline +
    npming +
    newline +
    githubing +
    newline +
    linkedining +
    newline +
    webing +
    newline +
    newline +
    carding;

// Définir le chemin de sortie
const outputDir = join(__dirname, 'bin');
const outputPath = join(outputDir, 'output');

// Créer le dossier 'bin' s'il n'existe pas
mkdirSync(outputDir, { recursive: true });

// Écrire le contenu formaté dans le fichier
writeFileSync(outputPath, chalk.green(boxen(output, options)), 'utf8');

// Confirmation
console.log(`Fichier écrit avec succès à ${outputPath}`);

// Afficher la carte de visite dans le terminal
console.log(chalk.green(boxen(output, options)));
