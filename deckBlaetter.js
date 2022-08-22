import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import chalk from 'chalk';
import gradient from 'gradient-string';

// Deckblatt coverLine 1
console.log("");
console.log("");

console.log
(gradient.rainbow("╔═══╗═══╗ "), gradient.rainbow("╔═══╗═══╗ "), gradient.rainbow("╔═══╗═══╗ "), gradient.rainbow("╔═══╗═══╗ "), gradient.rainbow("╔═══╗═══╗ "), gradient.rainbow("╔═══╗═══╗ "));
console.log
(gradient.rainbow("║═╗ ╚╗  ║ "), gradient.rainbow("║═╗ ╚╗  ║ "), gradient.rainbow("║═╗ ╚╗  ║ "), gradient.rainbow("║═╗ ╚╗  ║ "), gradient.rainbow("║═╗ ╚╗  ║ "), gradient.rainbow("║═╗ ╚╗  ║ "));
console.log
(gradient.rainbow("║ ╚╗ ╚╗ ║ "), gradient.rainbow("║ ╚╗ ╚╗ ║ "), gradient.rainbow("║ ╚╗ ╚╗ ║ "), gradient.rainbow("║ ╚╗ ╚╗ ║ "), gradient.rainbow("║ ╚╗ ╚╗ ║ "), gradient.rainbow("║ ╚╗ ╚╗ ║ "));
console.log
(gradient.rainbow("║  ╚╗ ╚╗║ "), gradient.rainbow("║  ╚╗ ╚╗║ "), gradient.rainbow("║  ╚╗ ╚╗║ "), gradient.rainbow("║  ╚╗ ╚╗║ "), gradient.rainbow("║  ╚╗ ╚╗║ "), gradient.rainbow("║  ╚╗ ╚╗║ "));
console.log
(gradient.rainbow("║  0╚╗ ╚║ "), gradient.rainbow("║  1╚╗ ╚║ "), gradient.rainbow("║  2╚╗ ╚║ "), gradient.rainbow("║  3╚╗ ╚║ "), gradient.rainbow("║  4╚╗ ╚║ "), gradient.rainbow("║  5╚╗ ╚║ "));
console.log
(gradient.rainbow("╚════╝══╝ "), gradient.rainbow("╚════╝══╝ "), gradient.rainbow("╚════╝══╝ "), gradient.rainbow("╚════╝══╝ "), gradient.rainbow("╚════╝══╝ "), gradient.rainbow("╚════╝══╝ "));


//  test
/* console.log("");
console.log("");
let  coverLine1 = gradient.rainbow.multiline([
"╔═══╗═══╗ ", "╔═══╗═══╗ ", "╔═══╗═══╗ ", "╔═══╗═══╗ ", "╔═══╗═══╗ ", "╔═══╗═══╗ ",
"║═╗ ╚╗  ║ ", "║═╗ ╚╗  ║ ", "║═╗ ╚╗  ║ ", "║═╗ ╚╗  ║ ", "║═╗ ╚╗  ║ ", "║═╗ ╚╗  ║ ",
"║ ╚╗ ╚╗ ║ ", "║ ╚╗ ╚╗ ║ ", "║ ╚╗ ╚╗ ║ ", "║ ╚╗ ╚╗ ║ ", "║ ╚╗ ╚╗ ║ ", "║ ╚╗ ╚╗ ║ ",
"║  ╚╗ ╚╗║ ", "║  ╚╗ ╚╗║ ", "║  ╚╗ ╚╗║ ", "║  ╚╗ ╚╗║ ", "║  ╚╗ ╚╗║ ", "║  ╚╗ ╚╗║ ",
"║ 12╚╗ ╚║ ", "║ 12╚╗ ╚║ ", "║ 12╚╗ ╚║ ", "║ 12╚╗ ╚║ ", "║ 12╚╗ ╚║ ", "║ 12╚╗ ╚║ ",
"╚════╝══╝ ", "╚════╝══╝ ", "╚════╝══╝ ", "╚════╝══╝ ", "╚════╝══╝ ", "╚════╝══╝ ", 
].join('\n'));
console.log(coverLine1); */

// Deckblatt coverLine 2

console.log("");
console.log(""); 

console.log(gradient.rainbow("╔═══════╗ "));
console.log(gradient.rainbow("║══║════║ "));
console.log(gradient.rainbow("║════12═║ "));
console.log(gradient.rainbow("║═║═════║ "));
console.log(gradient.rainbow("║═══║═══║ "));
console.log(gradient.rainbow("╚═══════╝ "));


console.log("");
console.log("");
console.log(gradient.rainbow("╔═══════╗ "));
console.log(gradient.rainbow("║ (_)   ║ "));
console.log(gradient.rainbow("║    (_)║ "));
console.log(gradient.rainbow("║(12)   ║ "));
console.log(gradient.rainbow("║   (_) ║ "));
console.log(gradient.rainbow("╚═══════╝ "));





// Deckblatt coverFull 1

console.log("");
console.log(""); 

let  coverFull1 = gradient.rainbow.multiline([
"███████   ███████   ███████   ███████   ███████   ███████   ",
"███████   ███████   ███████   ███████   ███████   ███████   ",
"███████   ███████   ███████   ███████   ███████   ███████   ",
"██  0 █   ██  1 █   ██  2 █   ██  3 █   ██  4 █   ██  5 █   ",
"███████   ███████   ███████   ███████   ███████   ███████   ",

].join('\n'));
console.log(coverFull1);



// Deckblatt coverFull 2

console.log("");
console.log(""); 

  console.log(
  gradient.rainbow("███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████   "));
  
  console.log(
  gradient.rainbow("███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████   "));
 
  console.log(
    gradient.rainbow("███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████   "));
  
  console.log(
  gradient.rainbow("██  0 █"),gradient.rainbow("   ██  1 █"),gradient.rainbow("   ██  2 █"),gradient.rainbow("   ██  3 █"),gradient.rainbow("   ██  4 █"),gradient.rainbow("   ██  5 █   "));

      
  console.log(
    gradient.rainbow("███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████"),gradient.rainbow("   ███████   "));


  console.log("");
  console.log("");