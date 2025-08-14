#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

// Get current file directory with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get the GitHub username
rl.question('Enter your GitHub username: ', async (username) => {
  // Update package.json homepage
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJsonContent = await fs.promises.readFile(packageJsonPath, 'utf8');
  const packageJson = JSON.parse(packageJsonContent);
  packageJson.homepage = `https://${username}.github.io/hsk-mastery-hub3`;
  await fs.promises.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log(`Updated homepage in package.json to: ${packageJson.homepage}`);

  try {
    // Initialize git repository if not already initialized
    try {
      execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
      console.log('Git repository already initialized');
    } catch (error) {
      console.log('Initializing git repository...');
      execSync('git init');
    }

    // Add all files
    execSync('git add .');
    
    // Commit changes
    execSync('git commit -m "Initial commit"');
    
    // Create GitHub repository and push
    console.log(`Creating GitHub repository: ${username}/hsk-mastery-hub3`);
    console.log('Please follow the prompts to authenticate with GitHub...');
    
    // Instructions for manual repository creation
    console.log('\nTo complete setup, run these commands:');
    console.log(`git remote add origin https://github.com/${username}/hsk-mastery-hub3.git`);
    console.log('git branch -M main');
    console.log('git push -u origin main');
    
    console.log('\nThen deploy with: npm run deploy');
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  rl.close();
});