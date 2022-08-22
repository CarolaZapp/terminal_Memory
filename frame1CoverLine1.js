import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import chalk from 'chalk';
import gradient from 'gradient-string';

// // // Rahmen  Level 1 Deckblatt coverLine 1
console.log(); 
console.log();

function frame1CoverLine1(){

let frameCL1 = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                            I love memory!                             OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                                       OO",
"OO                                                                       OO",
].join('\n'));
console.log(frameCL1);

// Reihe 1

  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("╔═══╗═══╗ "), gradient.rainbow("╔═══╗═══╗ "), gradient.rainbow("╔═══╗═══╗ "), gradient.rainbow("╔═══╗═══╗ "), gradient.rainbow("╔═══╗═══╗ "), gradient.rainbow("╔═══╗═══╗ "), gradient.rainbow("  OO" ));

  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("║═╗ ╚╗  ║ "), gradient.rainbow("║═╗ ╚╗  ║ "), gradient.rainbow("║═╗ ╚╗  ║ "), gradient.rainbow("║═╗ ╚╗  ║ "), gradient.rainbow("║═╗ ╚╗  ║ "), gradient.rainbow("║═╗ ╚╗  ║ "), gradient.rainbow("  OO" ));
  console.log

  (gradient.rainbow("OO  "), gradient.rainbow("║ ╚╗ ╚╗ ║ "), gradient.rainbow("║ ╚╗ ╚╗ ║ "), gradient.rainbow("║ ╚╗ ╚╗ ║ "), gradient.rainbow("║ ╚╗ ╚╗ ║ "), gradient.rainbow("║ ╚╗ ╚╗ ║ "), gradient.rainbow("║ ╚╗ ╚╗ ║ "), gradient.rainbow("  OO" ));
  console.log

  (gradient.rainbow("OO  "), gradient.rainbow("║  ╚╗ ╚╗║ "), gradient.rainbow("║  ╚╗ ╚╗║ "), gradient.rainbow("║  ╚╗ ╚╗║ "), gradient.rainbow("║  ╚╗ ╚╗║ "), gradient.rainbow("║  ╚╗ ╚╗║ "), gradient.rainbow("║  ╚╗ ╚╗║ "), gradient.rainbow("  OO" ));
  console.log

  (gradient.rainbow("OO  "), gradient.rainbow("║  0╚╗ ╚║ "), gradient.rainbow("║  1╚╗ ╚║ "), gradient.rainbow("║  2╚╗ ╚║ "), gradient.rainbow("║  3╚╗ ╚║ "), gradient.rainbow("║  4╚╗ ╚║ "), gradient.rainbow("║  5╚╗ ╚║ "), gradient.rainbow("  OO" ));
  
  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("╚════╝══╝ "), gradient.rainbow("╚════╝══╝ "), gradient.rainbow("╚════╝══╝ "), gradient.rainbow("╚════╝══╝ "), gradient.rainbow("╚════╝══╝ "), gradient.rainbow("╚════╝══╝ "), gradient.rainbow("  OO" ));

  
let frame0CL1 = gradient.rainbow.multiline([
"OO                                                                       OO",
"OO                                                                       OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",

].join('\n'));
console.log(frame0CL1);
  
}

export default frame1CoverLine1;