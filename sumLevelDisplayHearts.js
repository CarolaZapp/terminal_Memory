import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import gradient from 'gradient-string';

console.log("");
console.log("");

/* let decide = gradient.rainbow.multiline([
  "There are 4 levels available:",
  "Level 1 with 6 cards and 3 pairs to find",
  "Level 2 with 12 cards and 6 pairs to find",
  "Level 3 with 18 cards and 9 pairs to find",
  "Level 4 with 24 cards and 12 pairs to find",
  ].join('\n'));
  console.log(decide);
  
  console.log("");
  console.log(""); 
  
  const chooseLevel = prompt("Please choose the level for your game! (number):  ");
  console.log("");
  console.log(""); 
  console.log(gradient.rainbow("You choose level: " + chooseLevel));
  console.log("");
  console.log("");  */


// // //  Level 1
// face Level 1

console.log("");
console.log("");

let headerL1 = gradient.rainbow.multiline([
  "           )))           +++           &&&           xxx           (((     ",
  "          (o o)         (o o)         (o o)         (o o)         (o o)    ",
  "      ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo",
  ].join('\n'));
  console.log(headerL1);


// Rahmen  Level 1
console.log(); 

let frameL1 = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 1                      I love memory!                                OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                                             OO",
"OO                                                                             OO",
].join('\n'));
console.log(frameL1);

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
  
let frame0L1 = gradient.rainbow.multiline([
"OO                                                                             OO",
"OO                                                                             OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
].join('\n'));
console.log(frame0L1);
  
console.log("");
console.log("");

// Hidden items
// Array of Objects Level 2
const testArray = [
  {
    name: "clock1",
    pic: "🕓",
    // id: 1,
  },
  {
    name: "clock2",
    pic: "🕓",
    // id: 2,
  },
  {
    name: "monkey1",
    pic: "🙊 ",
    // id: 3,
  },
  {
    name: "monkey2",
    pic: "🙊 ",
    // id: 4,
  },
  {
    name: "world1",
    pic: "🌍 ",
    // id: 5,
  },
  {
    name: "world2",
    pic: "🌍 ",
    // id: 6,
  }
]

let newTestArrayL1 = []

for( let i = 0; i< testArray.length; i++){
  let allPics = testArray[i].pic;
  newTestArrayL1.push(allPics)
}

console.log(gradient.rainbow("Level 1: 3 hidden pairs:"), newTestArrayL1.join(" ")  );


// // // Level 2
// face Level 2

console.log("");
console.log("");

let header4 = gradient.rainbow.multiline([
"           )))           +++           &&&           xxx           (((     ",
"          (o o)         (o o)         (o o)         (o o)         (o o)    ",
"      ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo",
].join('\n'));
console.log(header4);


// Rahmen  Level 2
console.log(); 

let frameL2 = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 2                      I love memory!                                OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                                             OO",
"OO                                                                             OO",
].join('\n'));
console.log(frameL2);
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

// Reihe 2
console.log
(gradient.rainbow("OO  "),"╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗",gradient.rainbow("  OO" ) );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️   6 ❤️"),"║","║", gradient.rainbow ("❤️   7 ❤️"), "║","║", gradient.rainbow ("❤️   8 ❤️"), "║","║",gradient.rainbow ("❤️   9 ❤️"), "║","║", gradient.rainbow ("❤️ 1 0 ❤️"),"║","║", gradient.rainbow ("❤️ 1 1 ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );

console.log
(gradient.rainbow("OO  "),"╚═════════╝","╚═════════╝","╚═════════╝","╚═════════╝", "╚═════════╝", "╚═════════╝",gradient.rainbow("  OO" ));
  
let frame0L2 = gradient.rainbow.multiline([
"OO                                                                             OO",
"OO                                                                             OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
].join('\n'));
console.log(frame0L2);
  
console.log("");
console.log("");

// Array of Objects Level 2
const testArrayL2 = [
  {
    name: "clock1",
    pic: "🕓",
    // id: 1,
  },
  {
    name: "clock2",
    pic: "🕓",
    // id: 2,
  },
  {
    name: "monkey1",
    pic: "🙊 ",
    // id: 3,
  },
  {
    name: "monkey2",
    pic: "🙊 ",
    // id: 4,
  },
  {
    name: "world1",
    pic: "🌍 ",
    // id: 5,
  },
  {
    name: "world2",
    pic: "🌍 ",
    // id: 6,
  },
  {
    name: "hand1",
    pic: "🤟 ",
    // id: 7,
  },
  {
    name: "hand2",
    pic: "🤟 ",
    // id: 8,
  },
  {
    name: "face1",
    pic: "🧑 ",
    // id: 9,
  },
  {
    name: "face 2",
    pic: "🧑 ",
    // id: 10,
  },
  {
    name: "tree1",
    pic: "🎄 ",
    // id: 11,
  },
  {
    name: "tree2",
    pic: "🎄 ",
    // id: 12,
  },
]


let newTestArrayL2= []

for( let i = 0; i< testArrayL2.length; i++){
  let allPics = testArrayL2[i].pic;
  newTestArrayL2.push(allPics)
}

console.log(gradient.rainbow("Level 2: 6 hidden pairs:"), newTestArrayL2.join(" ") );


// // // Level 3
// face Level 3
console.log("");
console.log("");

let headerL3 = gradient.rainbow.multiline([
"           )))           +++           &&&           xxx           (((     ",
"          (o o)         (o o)         (o o)         (o o)         (o o)    ",
"      ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo",
].join('\n'));
console.log(headerL3);


// // // Rahmen  Level 3
console.log(); 

let frameL3 = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 3                      I love memory!                                OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                                             OO",
"OO                                                                             OO",
].join('\n'));
console.log(frameL3);

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

// Reihe 2
console.log
(gradient.rainbow("OO  "),"╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗",gradient.rainbow("  OO" ) );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️   6 ❤️"),"║","║", gradient.rainbow ("❤️   7 ❤️"), "║","║", gradient.rainbow ("❤️   8 ❤️"), "║","║",gradient.rainbow ("❤️   9 ❤️"), "║","║", gradient.rainbow ("❤️ 1 0 ❤️"),"║","║", gradient.rainbow ("❤️ 1 1 ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );

console.log
(gradient.rainbow("OO  "),"╚═════════╝","╚═════════╝","╚═════════╝","╚═════════╝", "╚═════════╝", "╚═════════╝",gradient.rainbow("  OO" ));
  
  // Reihe 3
console.log
(gradient.rainbow("OO  "),"╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗",gradient.rainbow("  OO" ) );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ 1 2 ❤️"),"║","║", gradient.rainbow ("❤️ 1 3 ❤️"), "║","║", gradient.rainbow ("❤️ 1 4 ❤️"), "║","║",gradient.rainbow ("❤️ 1 5 ❤️"), "║","║", gradient.rainbow ("❤️ 1 6 ❤️"),"║","║", gradient.rainbow ("❤️ 1 7 ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );

console.log
(gradient.rainbow("OO  "),"╚═════════╝","╚═════════╝","╚═════════╝","╚═════════╝", "╚═════════╝", "╚═════════╝",gradient.rainbow("  OO" ));
  
let frame0L3 = gradient.rainbow.multiline([
"OO                                                                             OO",
"OO                                                                             OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
].join('\n'));
console.log(frame0L3);
  
console.log("");
console.log("");

// Array of Objects Level 3
const testArrayL3 = [
  {
    name: "clock1",
    pic: "🕓",
    // id: 1,
  },
  {
    name: "clock2",
    pic: "🕓",
    // id: 2,
  },
  {
    name: "monkey1",
    pic: "🙊 ",
    // id: 3,
  },
  {
    name: "monkey2",
    pic: "🙊 ",
    // id: 4,
  },
  {
    name: "world1",
    pic: "🌍 ",
    // id: 5,
  },
  {
    name: "world2",
    pic: "🌍 ",
    // id: 6,
  },
  {
    name: "hand1",
    pic: "🤟 ",
    // id: 7,
  },
  {
    name: "hand2",
    pic: "🤟 ",
    // id: 8,
  },
  {
    name: "face1",
    pic: "🧑 ",
    // id: 9,
  },
  {
    name: "face 2",
    pic: "🧑 ",
    // id: 10,
  },
  {
    name: "tree1",
    pic: "🎄 ",
    // id: 11,
  },
  {
    name: "tree2",
    pic: "🎄 ",
    // id: 12,
  },
  {
    name: "ball1",
    pic: "⚽️ ",
    // id: 13,
  },
  {
    name: "ball2",
    pic: "⚽️ ",
    // id: 14,
  },
  {
    name: "sun1",
    pic: "🌤 ",
    // id: 15,
  },
  {
    name: "sun2",
    pic: "🌤 ",
    // id: 16,
  },
  {
    name: "run1",
    pic: "🏃 ",
    // id: 17,
  },
  {
    name: "run2",
    pic: "🏃 ",
    // id: 18,
  }
]

let newTestArrayL3= []

for( let i = 0; i< testArrayL3.length; i++){
  let allPics = testArrayL3[i].pic;
  newTestArrayL3.push(allPics)
}

console.log(gradient.rainbow("Level 3: 9 hidden pairs:"), newTestArrayL3.join(" ") );

// // // Level 4
// face Level 4

console.log("");
console.log("");

let headerL4 = gradient.rainbow.multiline([
"     )))           +++           &&&           xxx           (((     ",
"    (o o)         (o o)         (o o)         (o o)         (o o)    ",
"ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo",
].join('\n'));
console.log(headerL4);

//  Rahmen  Level 4
console.log(); 

let frameL4 = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 4                      I love memory!                                OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                                             OO",
"OO                                                                             OO",
].join('\n'));
console.log(frameL4);
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

// Reihe 2
console.log
(gradient.rainbow("OO  "),"╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗",gradient.rainbow("  OO" ) );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️   6 ❤️"),"║","║", gradient.rainbow ("❤️   7 ❤️"), "║","║", gradient.rainbow ("❤️   8 ❤️"), "║","║",gradient.rainbow ("❤️   9 ❤️"), "║","║", gradient.rainbow ("❤️ 1 0 ❤️"),"║","║", gradient.rainbow ("❤️ 1 1 ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );

console.log
(gradient.rainbow("OO  "),"╚═════════╝","╚═════════╝","╚═════════╝","╚═════════╝", "╚═════════╝", "╚═════════╝",gradient.rainbow("  OO" ));
  
  // Reihe 3
console.log
(gradient.rainbow("OO  "),"╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗",gradient.rainbow("  OO" ) );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ 1 2 ❤️"),"║","║", gradient.rainbow ("❤️ 1 3 ❤️"), "║","║", gradient.rainbow ("❤️ 1 4 ❤️"), "║","║",gradient.rainbow ("❤️ 1 5 ❤️"), "║","║", gradient.rainbow ("❤️ 1 6 ❤️"),"║","║", gradient.rainbow ("❤️ 1 7 ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );

console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );

console.log
(gradient.rainbow("OO  "),"╚═════════╝","╚═════════╝","╚═════════╝","╚═════════╝", "╚═════════╝", "╚═════════╝",gradient.rainbow("  OO" ));

  // Reihe 4
  console.log
  (gradient.rainbow("OO  "),"╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗","╔═════════╗",gradient.rainbow("  OO" ) );
  
  console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
  ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );
  
  console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
  ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );
  
  console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
  ("❤️ 1 8 ❤️"),"║","║", gradient.rainbow ("❤️ 1 9 ❤️"), "║","║", gradient.rainbow ("❤️ 2 0 ❤️"), "║","║",gradient.rainbow ("❤️ 2 1 ❤️"), "║","║", gradient.rainbow ("❤️ 2 2 ❤️"),"║","║", gradient.rainbow ("❤️ 2 3 ❤️"), "║", gradient.rainbow("  OO") );
  
  console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
  ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"), "║","║",gradient.rainbow ("❤️     ❤️"), "║","║", gradient.rainbow ("❤️     ❤️"),"║","║", gradient.rainbow ("❤️     ❤️"), "║", gradient.rainbow("  OO") );
  
  console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
  ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║",gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"),"║","║", gradient.rainbow ("❤️ ❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );
  
  console.log
  (gradient.rainbow("OO  "),"╚═════════╝","╚═════════╝","╚═════════╝","╚═════════╝", "╚═════════╝", "╚═════════╝",gradient.rainbow("  OO" ));
  
let frame0L4 = gradient.rainbow.multiline([
"OO                                                                             OO",
"OO                                                                             OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
].join('\n'));
console.log(frame0L4);
  
console.log("");
console.log("");

// Array of Objects Level 4
const testArrayL4 = [
  {
    name: "clock1",
    pic: "🕓",
    // id: 1,
  },
  {
    name: "clock2",
    pic: "🕓",
    // id: 2,
  },
  {
    name: "monkey1",
    pic: "🙊 ",
    // id: 3,
  },
  {
    name: "monkey2",
    pic: "🙊 ",
    // id: 4,
  },
  {
    name: "world1",
    pic: "🌍 ",
    // id: 5,
  },
  {
    name: "world2",
    pic: "🌍 ",
    // id: 6,
  },
  {
    name: "hand1",
    pic: "🤟 ",
    // id: 7,
  },
  {
    name: "hand2",
    pic: "🤟 ",
    // id: 8,
  },
  {
    name: "face1",
    pic: "🧑 ",
    // id: 9,
  },
  {
    name: "face 2",
    pic: "🧑 ",
    // id: 10,
  },
  {
    name: "tree1",
    pic: "🎄 ",
    // id: 11,
  },
  {
    name: "tree2",
    pic: "🎄 ",
    // id: 12,
  },
  {
    name: "ball1",
    pic: "⚽️ ",
    // id: 13,
  },
  {
    name: "ball2",
    pic: "⚽️ ",
    // id: 14,
  },
  {
    name: "sun1",
    pic: "🌤 ",
    // id: 15,
  },
  {
    name: "sun2",
    pic: "🌤 ",
    // id: 16,
  },
  {
    name: "run1",
    pic: "🏃 ",
    // id: 17,
  },
  {
    name: "run2",
    pic: "🏃 ",
    // id: 18,
  },
  {
    name: "moon1",
    pic: "🌒  ",
    // id: 19,
  },
  {
    name: "moon2",
    pic: "🌒  ",
    // id: 20,
  },
  {
    name: "thunderstorm1",
    pic: "⛈ ",
    // id: 21,
  },
  {
    name: "thunderstorm2",
    pic: "⛈ ",
    // id: 22,
  },
  {
    name: "flash1",
    pic: "💥 ",
    // id: 23,
  },
  {
    name: "flash",
    pic: "💥 ",
    // id: 24,
  }
]


let newTestArrayL4= []

for( let i = 0; i< testArrayL4.length; i++){
  let allPics = testArrayL4[i].pic;
  newTestArrayL4.push(allPics)
}

console.log(gradient.rainbow("Level 4: 12 hidden pairs:"), newTestArrayL4.join(" ") );

console.log("");
console.log("");