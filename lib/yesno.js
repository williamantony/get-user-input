#!/usr/bin/env node
const getUserInput = require('./getUserInput');

const Dim = '\x1b[2m';
const Reset = '\x1b[0m';

const yesno = (textPrompt) => {
  
  return getUserInput(
    `${ textPrompt } ${ Dim }[y/n] \n> ${ Reset }`, 
    new RegExp(/^(y|yes)$/gi)
  );

};

module.exports = yesno;
