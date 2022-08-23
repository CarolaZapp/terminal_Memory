import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import chalk from 'chalk';
import gradient from 'gradient-string';

// // // Rahmen  Level 1 Deckblatt coverFull 1
console.log(); 
console.log(); 

/* function frame1CoverFull1(){ */
let frameCF = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 1               I love memory!                           OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                                 OO",
"OO                                                                 OO",
].join('\n'));
console.log(frameCF);

// Reihe 1

let  coverFull1 = gradient.rainbow.multiline([
"OO    ███████   ███████   ███████   ███████   ███████   ███████    OO",
"OO    ███████   ███████   ███████   ███████   ███████   ███████    OO",
"OO    ███████   ███████   ███████   ███████   ███████   ███████    OO",
"OO    ██  0 █   ██  1 █   ██  2 █   ██  3 █   ██  4 █   ██  5 █    OO",
"OO    ███████   ███████   ███████   ███████   ███████   ███████    OO",
  
  ].join('\n'));
  console.log(coverFull1);
 
let frame0CF = gradient.rainbow.multiline([
"OO                                                                 OO",
"OO                                                                 OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
].join('\n'));
console.log(frame0CF);
console.log("");
/* }

export default frame1CoverFull1; */