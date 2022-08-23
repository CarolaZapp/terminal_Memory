import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import chalk from 'chalk';
import gradient from 'gradient-string';
/* import level2 from './level2.js'; */
import frame1 from './frame1.js'
import frame1CoverFull1 from './frame1CoverFull1.js';
import frame1CoverFull2 from './frame1CoverFull2.js';
import frame1CoverLine1 from './frame1CoverLine1.js';
import frame1CoverLine2 from './frame1CoverLine2.js';
import frame1CoverLine3 from './frame1CoverLine3.js';
console.clear();

// header

console.log("");
console.log("");
console.log("");
console.log(""); 


let header1 = gradient.rainbow.multiline([

  "███╗   ███╗███████╗███╗   ███╗ ██████╗ ██████╗ ██╗   ██╗",
  "████╗ ████║██╔════╝████╗ ████║██╔═══██╗██╔══██╗╚██╗ ██╔╝",
  "██╔████╔██║█████╗  ██╔████╔██║██║   ██║██████╔╝ ╚████╔╝ ",
  "██║╚██╔╝██║██╔══╝  ██║╚██╔╝██║██║   ██║██╔══██╗  ╚██╔╝  ",
  "██║ ╚═╝ ██║███████╗██║ ╚═╝ ██║╚██████╔╝██║  ██║   ██║   ",
  "╚═╝     ╚═╝╚══════╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ",
  
  ].join('\n'));
  console.log(header1);


console.log("");
console.log("");

// // //
console.log("");
console.log("");

let header2 = gradient.rainbow.multiline([
  "███    ███  ███████  ███    ███   ██████   ██████   ██    ██ ",
  "████  ████  ██       ████  ████  ██    ██  ██   ██   ██  ██  ",
  "██ ████ ██  █████    ██ ████ ██  ██    ██  ██████     ████   ",
  "██  ██  ██  ██       ██  ██  ██  ██    ██  ██   ██     ██    ",
  "██      ██  ███████  ██      ██   ██████   ██   ██     ██    ",
  ].join('\n'));
  console.log(header2);

console.log("");
console.log("");

  // // //

  console.log("");
  console.log("");

  let header3 = gradient.rainbow.multiline([
  "╔═╗     ╔═╗ ╔══════╗ ╔═╗     ╔═╗  ╔═════╗  ╔═════╗  ╔═╗   ╔═╗",
  "║ ╚═╗ ╔═╝ ║ ║ ╔════╝ ║ ╚═╗ ╔═╝ ║ ╔╝╔═══╗╚╗ ║ ╔══╗╚╗ ╚╗╚╗ ╔╝╔╝",
  "║ ╔╗╚═╝╔╗ ║ ║ ╚══╗   ║ ╔╗╚═╝╔╗ ║ ║ ║   ║ ║ ║ ╚══╝╔╝  ╚╗╚═╝╔╝ ",
  "║ ║╚╗ ╔╝║ ║ ║ ╔══╝   ║ ║╚╗ ╔╝║ ║ ║ ║   ║ ║ ║ ╔══╗╚╗   ╚╗ ╔╝  ",
  "║ ║ ╚═╝ ║ ║ ║ ╚════╗ ║ ║ ╚═╝ ║ ║ ╚╗╚═══╝╔╝ ║ ║  ║ ║    ║ ║   ",
  "╚═╝     ╚═╝ ╚══════╝ ╚═╝     ╚═╝  ╚═════╝  ╚═╝  ╚═╝    ╚═╝   ",

  ].join('\n'));
  console.log(header3);

console.log("");
console.log(""); 

// Frage
function start(){
const question = prompt("Do you want to play memory with me? (y/n)  ").toLowerCase();
  console.log("");
  console.log(""); 
console.clear()
  console.log(""); 
  console.log("");


  if ( question === "y"){
    console.log(gradient.rainbow("Great! 😃  Let's get started then...")); 
    console.log(" ");
    console.log("");

  }
  if (question === "n"){
      console.log(gradient.rainbow("What a pity!... 😦")); 
      console.log("");
      process.exit()
    }
  }
start()

// Auswahl Deckblatt Funktioniert noch nicht

/* function decide (){
console.log("There are 6 different cover available.");
console.log("Number 1:");
  const heart = frame1();
  console.log(heart);

console.log("Number 2:",);
  const full = frame1CoverFull1();
  console.log(full);

console.log("Number 3:",);
  const full2 = frame1CoverFull2();
  console.log(full2);

console.log("Number 4:");
  const line1 = frame1CoverLine1();
  console.log(line1);

console.log("Number 5:",);
  const line2 = frame1CoverLine2();
  console.log(line2);

console.log("Number 6:",);
  const line3 = frame1CoverLine3();
  console.log(line3);

  console.log("");
  console.log("");

const cover = prompt ("Please choose a cover for your game! (number):  ");
console.log("");
console.log(gradient.rainbow("You choose cover: " + cover));
}

decide() */


//  Auswahl Level - Funktioniert noch nicht

/* function level (){

let decide = gradient.rainbow.multiline([
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
console.log(""); 

if (chooseLevel === "1"){
    console.log("Level 1 soll hier sein");
}
if (chooseLevel === "2"){
   console.log("Level 2 kommt hier noch...");
}
if (chooseLevel === "3"){
   console.log("Level 3 kommt hier noch...");
}
if (chooseLevel === "4"){
   console.log("Level 4 kommt hier noch...");
}

}
level()
 */

// 
// face1

console.log("");
console.log("");

let header4 = gradient.rainbow.multiline([
"     )))           +++           &&&           xxx           (((     ",
"    (o o)         (o o)         (o o)         (o o)         (o o)    ",
"ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo",
].join('\n'));
console.log(header4);


// // // Rahmen Frame1 Level 1
console.log(); 
/* console.log(); */

let frame = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 1          I love memory!                                OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                                 OO",
"OO                                                                 OO",
].join('\n'));
console.log(frame);

  console.log
  (gradient.rainbow("OO  "),"╔═══════╗","╔═══════╗","╔═══════╗","╔═══════╗","╔═══════╗","╔═══════╗",gradient.rainbow("  OO" ) );
  
  console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
  ("❤️ ❤️ ❤️"),"║","║", gradient.rainbow("❤️ ❤️ ❤️"), "║","║", gradient.rainbow("❤️ ❤️ ❤️"), "║","║",gradient.rainbow("❤️ ❤️ ❤️"), "║","║", gradient.rainbow("❤️ ❤️ ❤️"),"║","║", gradient.rainbow("❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );
  
  console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
  ("❤️ 0 ❤️"),"║","║", gradient.rainbow("❤️ 1 ❤️"), "║","║", gradient.rainbow("❤️ 2 ❤️"), "║","║",gradient.rainbow("❤️ 3 ❤️"), "║","║", gradient.rainbow("❤️ 4 ❤️"),"║","║", gradient.rainbow("❤️ 5 ❤️"), "║", gradient.rainbow("  OO") );
  
  console.log(gradient.rainbow("OO  "),"║", gradient.rainbow
  ("❤️ ❤️ ❤️"),"║","║", gradient.rainbow("❤️ ❤️ ❤️"), "║","║", gradient.rainbow("❤️ ❤️ ❤️"), "║","║",gradient.rainbow("❤️ ❤️ ❤️"), "║","║", gradient.rainbow("❤️ ❤️ ❤️"),"║","║", gradient.rainbow("❤️ ❤️ ❤️"), "║", gradient.rainbow("  OO") );
  
  console.log
  (gradient.rainbow("OO  "),"╚═══════╝","╚═══════╝","╚═══════╝","╚═══════╝","╚═══════╝","╚═══════╝",gradient.rainbow("  OO" ));
  
let frame0 = gradient.rainbow.multiline([
"OO                                                                 OO",
"OO                                                                 OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
].join('\n'));
console.log(frame0);

  

// Array of Objects
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
    },
  ]


let newTestArray = []

for( let i = 0; i< testArray.length; i++){
  let allPics = testArray[i].pic;
  newTestArray.push(allPics)
}

/* console.log(""); */


// Mischen

  Array.prototype.testMischen = function(){
    let i = this.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random() * (i+1));
      temp = this [j];
      this[j] = this[i];
      this[i]= temp;
    }
  }

  const newArray = []

  function neueMischung(){
    testArray.testMischen();
    for(let i = 0; i < testArray.length; i++){
     newArray.push(testArray[i].pic);
    }
  return newArray
  }

neueMischung()

// Hidden Array to choose
/*     console.log("newArray_gemischt:", neueMischung().join(" ")); */

// Auswahl aus new Array
// max 2x

let prevent  = [];

function choiceA(){
  
  const choice01 = prompt(gradient.rainbow("Please do your first choice (number):   " ));
  console.log("");

  const choice1 = newArray[choice01];
  console.log("new array Choice 1:" ,newArray[choice01]);
  console.log("choice 1:", choice01);
  prevent.push(newArray[choice01])
  console.log("prevent:", prevent);
  return choice1;
}

function choiceB(){
  const choice02 = prompt(gradient.rainbow("Please do your second choice (number):   " ));
  console.log("");

  const choice2 = newArray[choice02];
  prevent.push(newArray[choice02])
  console.log("prevent:", prevent);

  if ( prevent[0] !== prevent[1]){
  return choice2;
  } 
  else {
    console.log("Please choose a different card than the first one! ");
    prevent.splice(0);
    choiceB();
  }
}

// if(choiceA() === choiceB()){
//   console.log("Please choose a different card than the first one! ");
//   do{ 
//     choiceB()}
//     while (choiceA() !== choiceB())
//   console.log("");
// }
// }

// prevent();


// if(choiceA() === choiceB()){
//   console.log("Please choose a different card than the first one! ");
//   console.log("");
//   console.log("");
// }


console.log("");
console.log("");


//  Check
    let pairs = [];
    let choiceCount = 0;

    function check(){
    let choiceArray = [];
  
      if (choiceArray.length === 0){
          choiceArray.push(choiceA());
          choiceCount ++;
      }
      if (choiceArray.length === 1){
          choiceArray.push(choiceB());
          choiceCount ++;
      }
      console.log("");
      console.log("Your first choice:", choiceArray[0], "  Your second choice:", choiceArray[1]); 
      console.log("");

      if ( choiceArray[0] === choiceArray[1]){
      console.log(" ");
      console.log(gradient.rainbow("✨   ✨   ✨ Great! You found a match! ✨   ✨   ✨"));
      pairs.push(choiceArray[0],choiceArray[1]) 
      console.log("");
      console.log("");
      console.log(gradient.rainbow("Already found pairs: "), pairs.join(" "));
      console.log("");
      console.log("");
      }

      else {
      console.log("");
      console.log(gradient.rainbow("      Sorry you failed. Please try again...         ")); 
      console.log("");
      console.log("");
      }

      if( pairs.length === newArray.length){
        let all = gradient.rainbow.multiline([
        "💥   💥   💥   💥   💥   💥   💥   💥   💥   💥   💥",
        "💥   💥   💥                            💥   💥   💥",
        "💥   💥   💥   You found all matches!   💥   💥   💥",
        "💥   💥   💥                            💥   💥   💥",
        "💥   💥   💥   💥   💥   💥   💥   💥   💥   💥   💥",
        ].join('\n'));
        console.log(all);

        console.log("");
        console.log("");
        pairs = [];
        console.log(gradient.rainbow("Needed choices: "), choiceCount);

        /* neuesSpiel();  */   
      }
    }

  check()


// Weiterspielen - neue Runde 

function weiterSpielen(){

  const weiter = prompt("Would you like to play another round? (y/n) " ).toLowerCase();
console.log("");
console.log("");
  if ( weiter === "y"){
      check();
      weiterSpielen()
  }
  if (weiter ==="n"){
    console.log(gradient.rainbow("What a pity!... 🙈 ")); 
    console.log("");
    console.log("");
    neuesSpiel();
  }
/* return weiterSpielen() */
}
weiterSpielen()

// Weiterspielen - neues Spiel
function neuesSpiel(){
  const neuMischen = prompt("Would you like to re-shuffel and start a new game? (y/n) ").toLowerCase();
    console.log("");
    console.log("");
      if (neuMischen === "y"){
      // neueMischung(); // funktioniert nicht....
      // return neueMischung(); // funktioniert nicht
      // return true funktioniert nicht
         console.log(gradient.rainbow("Start again...  😉"));
      }
      if (neuMischen === "n"){
    console.log(gradient.rainbow("Have a nice day... Bye 🤚")); 
    console.log("");
    console.log("");
    false
  }
}
