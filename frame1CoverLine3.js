import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import chalk from 'chalk';
import gradient from 'gradient-string';

// // // Rahmen  Level 1 Deckblatt coverLine 3
console.log(); 
console.log();

function frame1CoverLine3(){

let frameCL3 = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                            I love memory!                             OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                                       OO",
"OO                                                                       OO",
].join('\n'));
console.log(frameCL3);

// Reihe 1

  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("╔═══════╗ "), gradient.rainbow
  ("╔═══════╗ "), gradient.rainbow("╔═══════╗ "), gradient.rainbow("╔═══════╗ "), gradient.rainbow("╔═══════╗ "), gradient.rainbow("╔═══════╗ "), gradient.rainbow("  OO" ));

  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("║* * * *║ "), gradient.rainbow("║* * * *║ "), gradient.rainbow("║* * * *║ "), gradient.rainbow("║* * * *║ "), gradient.rainbow("║* * * *║ "), gradient.rainbow("║* * * *║ "),gradient.rainbow("  OO" ));

  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("║ * * * ║ "), gradient.rainbow("║ * * * ║ "), gradient.rainbow("║ * * * ║ "), gradient.rainbow("║ * * * ║ "), gradient.rainbow("║ * * * ║ "), gradient.rainbow("║ * * * ║ "), gradient.rainbow("  OO" ));
  
  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("║* * * *║ "), gradient.rainbow("║* * * *║ "), gradient.rainbow("║* * * *║ "), gradient.rainbow("║* * * *║ "), gradient.rainbow("║* * * *║ "), gradient.rainbow("║* * * *║ "),gradient.rainbow("  OO" ));

  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("║ * * 0*║ "), gradient.rainbow("║ * * 1*║ "), gradient.rainbow("║ * * 2*║ "), gradient.rainbow("║ * * 3*║ "), gradient.rainbow("║ * * 4*║ "), gradient.rainbow("║ * * 5*║ "), gradient.rainbow("  OO" ));
  
  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("  OO" ));

  
let frame0CL3 = gradient.rainbow.multiline([
"OO                                                                       OO",
"OO                                                                       OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",

].join('\n'));
console.log(frame0CL3);
}

export default frame1CoverLine3
