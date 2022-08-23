import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import gradient from 'gradient-string';

// header 

console.log("");
console.log("");
console.log("");
console.log(""); 

// // header 1
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

// // header 2
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

// // header 3

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

// Erste Frage

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
      // Wie beende ich hier den Prozess?
    
    }
  }
start()


// Display 

console.log("");
console.log("");


let header4 = gradient.rainbow.multiline([
"     )))           +++           &&&           xxx           (((     ",
"    (o o)         (o o)         (o o)         (o o)         (o o)    ",
"ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo",
].join('\n'));
console.log(header4);


// // // Rahmen  Level 4
console.log(); 

let frame = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO  Level 4                      I love memory!                                OO", 
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
  
let frame0 = gradient.rainbow.multiline([
"OO                                                                             OO",
"OO                                                                             OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
].join('\n'));
console.log(frame0);
  
console.log("");
console.log("");

// Array of Objects Level 4
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

function choiceA(){
  const choice01 = prompt(gradient.rainbow("Please do your first choice (number):   " ));
  console.log("");

  const choice1 = newArray[choice01];
  return choice1;
}

function choiceB(){
  const choice02 = prompt(gradient.rainbow("Please do your second choice (number):   " ));
  console.log("");


  const choice2 = newArray[choice02];
  return choice2;
}


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


