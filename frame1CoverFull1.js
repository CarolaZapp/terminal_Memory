import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import chalk from 'chalk';
import gradient from 'gradient-string';

// // // Rahmen  Level 1 Deckblatt coverFull 1
console.log(); 
console.log(); 

let frameCF = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                        I love memory!                         OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                               OO",
"OO                                                               OO",
].join('\n'));
console.log(frameCF);

// Reihe 1

let  coverFull1 = gradient.rainbow.multiline([
"OO   ███████   ███████   ███████   ███████   ███████   ███████   OO",
"OO   ███████   ███████   ███████   ███████   ███████   ███████   OO",
"OO   ███████   ███████   ███████   ███████   ███████   ███████   OO",
"OO   ██  0 █   ██  1 █   ██  2 █   ██  3 █   ██  4 █   ██  5 █   OO",
"OO   ███████   ███████   ███████   ███████   ███████   ███████   OO",
  
  ].join('\n'));
  console.log(coverFull1);
 
let frame0CF = gradient.rainbow.multiline([
"OO                                                               OO",
"OO                                                               OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
].join('\n'));
console.log(frame0CF);
  
  console.log("                                                          ");
  console.log("                                                          ");