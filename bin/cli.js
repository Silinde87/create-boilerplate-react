#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

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

// Cloning repository
console.log(`cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

// Changing app name at package.json
const packageJSON = JSON.parse(fs.readFileSync('../package.json', 'utf8'));
packageJSON.name = repoName;
fs.writeFileSync(`./${repoName}/package.json`, JSON.stringify(packageJSON, null, 2));

// Installing dependencies
console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);

console.log(`Congratulations! You are ready. Follow the following commands to start`);
console.log(`cd ${repoName} && yarn start`);

// Removing bin folder from app
const removeBin = runCommand(removeBinCommand);
if(!removeBin) process.exit(-1);