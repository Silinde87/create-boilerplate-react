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

const repoName = process.argv[2];
const repoUrl = 'https://github.com/Silinde87/create-boilerplate-react';

const gitCheckoutCommand = `
	git clone --filter=blob:none --no-checkout ${repoUrl} ${repoName} &&
	cd ${repoName} &&
	git sparse-checkout init &&
	git sparse-checkout set /packages/* &&
	git read-tree -mu HEAD &&
	mv ./packages/{*,.[^.]*}  ./ &&
	rm -rf ./packages
`;
const gitCommitCommand = `
	cd ${repoName} &&
	git add . && git commit -m "Repository created"
`;
const installDepsCommand = `cd ${repoName} && yarn install`;

// Cloning repository
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

const rootDir = path.join(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');
const packageJsonFile = path.join(packagesDir, 'package.json');

// Setting default package.json
const packageJSON = JSON.parse(fs.readFileSync(packageJsonFile, 'utf8'));
packageJSON.name = repoName;
fs.writeFileSync(`./${repoName}/package.json`, JSON.stringify(packageJSON, null, 2));

// Commiting changes
const committed = runCommand(gitCommitCommand);
if (!committed) process.exit(-1);

// Installing dependencies
console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`Congratulations! You are ready. Follow the following commands to start`);
console.log(`cd ${repoName} && yarn start`);
