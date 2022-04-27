#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const runCommand = (command) => {
	try {
		execSync(`${command}`, { stdio: 'inherit' });
	} catch (e) {
		console.error(`Failed to execute ${command}`, e);
		return false;
	}
	return true;
};

//1- Subir el repo tal cual está en otro repo
//2- git clone con sparse-checkout para descargar solo carpeta packages de ese nuevo repo
////https://git-scm.com/docs/git-sparse-checkout
////https://github.community/t/how-can-i-download-a-specific-folder-from-a-github-repo/278

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Silinde87/create-boilerplate-react ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;

const rootDir = path.join(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');
const packageJsonFile = path.join(packagesDir, 'package.json');

// Cloning repository
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

// Setting default package.json
const packageJSON = JSON.parse(fs.readFileSync(packageJsonFile, 'utf8'));
packageJSON.name = repoName;
fs.writeFileSync(`./${repoName}/package.json`, JSON.stringify(packageJSON, null, 2));


// Installing dependencies
console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`Congratulations! You are ready. Follow the following commands to start`);
console.log(`cd ${repoName} && yarn start`);
