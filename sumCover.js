import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import gradient from 'gradient-string';

// // // Rahmen  Level 1 Deckblatt coverFull 1
console.log(); 
console.log(); 

console.log(gradient.rainbow("Number 1: Cover Full Color", frame1CoverFull1()));
console.log(""); 

function frame1CoverFull1(){
let frameCF = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 1                I love memory!                          OO", 
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
}


// // // Rahmen  Level 1 Deckblatt coverFull2
console.log(); 
console.log();

console.log(gradient.rainbow("Number 2: Cover Rainbow", frame1CoverFull2()));
console.log(""); 

function frame1CoverFull2(){
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
}

// // // Rahmen  Level 1 Deckblatt coverLine 1
console.log(); 
console.log();

console.log(gradient.rainbow("Number 3: Cover Line 1", frame1CoverLine1()));
console.log(""); 

function frame1CoverLine1(){

let frameCL1 = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 1                   I love memory!                             OO", 
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
console.log("");
}

// // // Rahmen  Level 1 Deckblatt coverLine 2
console.log(); 
console.log();


console.log(gradient.rainbow("Number 4: Cover Line 2", frame1CoverLine2()));
console.log(""); 

function frame1CoverLine2(){

let frameCL2 = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 1                   I love memory!                             OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                                       OO",
"OO                                                                       OO",
].join('\n'));
console.log(frameCL2);

// Reihe 1

  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("╔═══════╗ "), gradient.rainbow
  ("╔═══════╗ "), gradient.rainbow("╔═══════╗ "), gradient.rainbow("╔═══════╗ "), gradient.rainbow("╔═══════╗ "), gradient.rainbow("╔═══════╗ "), gradient.rainbow("  OO" ));

  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("║══║════║ "), gradient.rainbow("║══║════║ "), gradient.rainbow("║══║════║ "), gradient.rainbow("║══║════║ "), gradient.rainbow("║══║════║ "), gradient.rainbow("║══║════║ "), gradient.rainbow("  OO" ));
  
  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("║════ 0═║ "), gradient.rainbow("║════ 1═║ "), gradient.rainbow("║════ 2═║ "), gradient.rainbow("║════ 3═║ "), gradient.rainbow("║════ 4═║ "), gradient.rainbow("║════ 5═║ "), gradient.rainbow("  OO" ));
  
  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("║═║═════║ "), gradient.rainbow("║═║═════║ "), gradient.rainbow("║═║═════║ "), gradient.rainbow("║═║═════║ "), gradient.rainbow("║═║═════║ "), gradient.rainbow("║═║═════║ "), gradient.rainbow("  OO" ));
  
  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("║═══║═══║ "), gradient.rainbow("║═══║═══║ "), gradient.rainbow("║═══║═══║ "), gradient.rainbow("║═══║═══║ "), gradient.rainbow("║═══║═══║ "), gradient.rainbow("║═══║═══║ "), gradient.rainbow("  OO" ));
  
  console.log
  (gradient.rainbow("OO  "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("╚═══════╝ "), gradient.rainbow("  OO" ));

  
let frame0CL1 = gradient.rainbow.multiline([
"OO                                                                       OO",
"OO                                                                       OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",

].join('\n'));
console.log(frame0CL1);
console.log("");
}

// // // Rahmen  Level 1 Deckblatt coverLine 3
console.log(); 
console.log();

console.log(gradient.rainbow("Number 5: Cover Line 3", frame1CoverLine3()));
console.log(""); 

function frame1CoverLine3(){

let frameCL3 = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 1                   I love memory!                             OO", 
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
console.log("");
}

// // // Rahmen  Level 1 Deckblatt Hearts
console.log(); 
console.log(); 

console.log(gradient.rainbow("Number 6: Cover Hearts", frame1CoverHearts()));
console.log(""); 

function frame1CoverHearts(){
let frame = gradient.rainbow.multiline([
  "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
  "OO  Level 1                      I love memory!                                OO", 
  "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
  "OO                                                                             OO",
  "OO                                                                             OO",
  ].join('\n'));
  console.log(frame);
  
  // Reihe 1
    console.log
    (gradient.rainbow("OO  "),"╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗",gradient.rainbow("  OO" ) );
    
    console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
    ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );
  
    console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
    ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );
    
    console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
    ("❤️   0 ❤️"),"║","║", gradient.rainbow ("❤️   1 ❤️"), "║","║", gradient.rainbow ("❤️   2 ❤️"), "║","║",gradient.rainbow ("❤️   3 ❤️"), "║","║", gradient.rainbow ("❤️   4 ❤️"),"║","║", gradient.rainbow ("❤️   5 ❤️"), "║", gradient.rainbow("  OO") );
    
    console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
    ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );
  
    console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
    ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );
    
    console.log
    (gradient.rainbow("OO  "),"╚═════════╝","╚═════════╝","╚═════════╝","╚═════════╝", "╚═════════╝", "╚═════════╝",gradient.rainbow("  OO" ));
    
  let frame0 = gradient.rainbow.multiline([
  "OO                                                                             OO",
  "OO                                                                             OO",
  "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
  "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
  ].join('\n'));
  console.log(frame0);
  console.log("");
}