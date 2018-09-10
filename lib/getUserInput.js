#!/usr/bin/env node
const readline = require('readline');

const getUserInput = (textPrompt, choicesRegEx) => {
  
  return new Promise((resolve, reject) => {
    
    const prompt = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    
    prompt.question(textPrompt, (userInput) => {
      if (choicesRegEx) {
        if (choicesRegEx.test(userInput)) {
          resolve(userInput);
        } else {
          reject(userInput);
        }
      } else {
        resolve(userInput);
      }
      console.log('');
      prompt.close();
    });
    
  });
  
};

module.exports = getUserInput;
