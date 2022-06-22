#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = (cmd) => {
    try{
        execSync(`${cmd}`, {stdio: 'inherit'});
    }
    catch(e) {
        console.error(`Failed to execute command ${cmd}`);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/emcdaniel1624/create-otter-api ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Creating otter-api project with name: ${repoName}`);
const isCheckedOut = runCommand(gitCheckoutCommand);

if(!isCheckedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);

const didInstallDeps = runCommand(installDepsCommand);

if(!didInstallDeps) process.exit(-1);

console.log("Your project is ready! Run the following command to start.");
console.log(`cd ${repoName} && npm start`);