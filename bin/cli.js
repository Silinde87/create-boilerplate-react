#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Silinde87/create-boilerplate-react ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;
const removeBinCommand = `cd ${repoName} && rm -rf bin`
const gitCommand = `cd ${repoName} && git add . && git commit -m "Repository ${repoName} created"`

const rootDir = path.join(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');
const packageJsonFile = path.join(packagesDir, 'package.json');

// Cloning repository
console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

// Setting default package.json
const packageJSON = JSON.parse(fs.readFileSync(packageJsonFile, 'utf8'));
packageJSON.name = repoName;

// Committing changes
const changesCommited = runCommand(gitCommand);
if (!changesCommited) process.exit(-1);

// Installing dependencies
console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);

console.log(`Congratulations! You are ready. Follow the following commands to start`);
console.log(`cd ${repoName} && yarn start`);

// Removing bin folder from app
const removeBin = runCommand(removeBinCommand);
if(!removeBin) process.exit(-1);