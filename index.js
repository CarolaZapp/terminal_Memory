import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
import gradient from 'gradient-string';

// Use the rainbow gradient
console.log(gradient.rainbow('I ❤️ gradient-strings!'))

const frage = prompt("Willst Du mit mir Memory spielen? (j/n) " ).toLowerCase();

  if ( frage === "j"){
    console.log(gradient.rainbow("Prima! 😃")); 
    // return true;
  }
  if (frage ==="n"){
    console.log(gradient.rainbow("Schade... 😦")); 
    // return false;
  }
