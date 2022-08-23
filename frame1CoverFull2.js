import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import chalk from 'chalk';
import gradient from 'gradient-string';

// // // Rahmen  Level 1 Deckblatt coverFull2
console.log(); 
console.log(); 
/* function frame1CoverFull2(){ */
let frameCF2 = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 1                  I love memory!                           OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                                    OO",
"OO                                                                    OO",
].join('\n'));
console.log(frameCF2);

// Reihe 1
console.log(gradient.rainbow("OO  "),
  gradient.rainbow("███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"), gradient.rainbow("  OO" ));
  
  console.log(gradient.rainbow("OO  "),
  gradient.rainbow("███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"), gradient.rainbow("  OO" ));
 
  console.log(gradient.rainbow("OO  "),
    gradient.rainbow("███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"), gradient.rainbow("  OO" ));
  
  console.log(gradient.rainbow("OO  "),
  gradient.rainbow("██  0 █"),gradient.rainbow("   ██  1 █"),gradient.rainbow("   ██  2 █"),gradient.rainbow("   ██  3 █"),gradient.rainbow("   ██  4 █"),gradient.rainbow("   ██  5 █"), gradient.rainbow("  OO" ));

      
  console.log(gradient.rainbow("OO  "),
    gradient.rainbow("███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"), gradient.rainbow("  OO"));

 
let frame0CF2 = gradient.rainbow.multiline([
"OO                                                                    OO",
"OO                                                                    OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
].join('\n'));
console.log(frame0CF2);
console.log("");

/* }

  export default frame1CoverFull2; */