#!/usr/bin/env node
const readline = require('readline');

const Dim = '\x1b[2m';
const Reset = '\x1b[0m';

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



const yesno = (textPrompt) => {
  
  const regex = new RegExp(/^(y|yes)$/gi);
  
  return getUserInput(`${ textPrompt } ${ Dim }[y/n] \n> ${ Reset }`, regex);
  
};



module.exports = {
  getUserInput,
  yesno,
};
