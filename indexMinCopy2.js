import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import chalk from 'chalk';
import gradient from 'gradient-string';


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
  console.log(header2);

console.log("");
console.log(""); 

// Frage
function start(){
const question = prompt("Do you want to play memory with me? (y/n)  ").toLowerCase();
  console.log("");
  console.log(""); 
console.clear()
  console.log(""); 

  if ( question === "y"){
    console.log(gradient.rainbow("Great! 😃  Let's get started then...")); 
    console.log(" ");
    return true;
  }
  if (question === "n"){
      console.log(gradient.rainbow("What a pity!... 😦")); 
      return false;
  }

}
start()

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

// // // Rahmen
console.log(); 
/* console.log(); */
let frame1 = gradient.rainbow.multiline([
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                         I love memory!                          OO", 
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OO                                                                 OO",
"OO                                                                 OO",
].join('\n'));
console.log(frame1);

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
  
let frame2 = gradient.rainbow.multiline([
"OO                                                                 OO",
"OO                                                                 OO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
].join('\n'));
console.log(frame2);
  
  console.log("                                                          ");
  console.log("                                                          ");
  

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

console.log("");
console.log("");

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
      if (neuMischen === "y")
      // neueMischung(); // funktioniert nicht....
      // return neueMischung(); // funktioniert nicht
      // return true funktioniert nicht
         console.log(gradient.rainbow("Start again...  😉"));

      if (neuMischen === "n"){
    console.log(gradient.rainbow("Have a nice day... Bye 🤚")); 
    console.log("");
    console.log("");
    false
  }
}





// weitere Ideen zum einbauen....

/* let counter = 0;
const repeatIt10 = () => {
  counter++
  console.log(counter);
  if (counter === 10){
    clearInterval(test3)
  }
}

const test3 = setInterval(function() {repeatIt10()}, 1000) */

/* 
const repeatIt = () => {console.log("hello")};
const test1 = setTimeout(function() {repeatIt()}, 2000) */