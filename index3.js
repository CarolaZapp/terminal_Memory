import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
import gradient from 'gradient-string';

// // // Rahmen
console.log();
console.log();
console.log(gradient.rainbow
  ("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"));
  
  console.log(gradient.rainbow
    ("OO                         I love memory!                          OO"));  
  
  console.log(gradient.rainbow
  ("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"));
  console.log(gradient.rainbow
  ("OO  "),"                                                           ",gradient.rainbow("  OO"));
  
  console.log(gradient.rainbow
    ("OO  "),"                                                           ",gradient.rainbow("  OO"));
  
  
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
  
  console.log(gradient.rainbow
    ("OO  "),"                                                           ",gradient.rainbow("  OO"));
  
  console.log(gradient.rainbow
  ("OO  "),"                                                           ",gradient.rainbow("  OO"));
    
  console.log(gradient.rainbow
  ("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"));
  console.log(gradient.rainbow
    ("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"));
  
  console.log("                                                          ");
  console.log("                                                          ");
  

// Array of Objects
  const testArray = [
    {
      name: "clock1",
      pic: "🕓",
      id: 1,
    },
    {
      name: "clock2",
      pic: "🕓",
      id: 2,
    },
    {
      name: "monkey1",
      pic: "🙊 ",
      id: 3,
    },
    {
      name: "monkey2",
      pic: "🙊 ",
      id: 4,
    },
    {
      name: "world1",
      pic: "🌍 ",
      id: 5,
    },
    {
      name: "world2",
      pic: "🌍 ",
      id: 6,
    },
  ]

let newTestArray = []

for( let i = 0; i< testArray.length; i++){
  let allPics = testArray[i].pic;
  newTestArray.push(allPics)
}
console.log("");
/* console.log("newTestArray-Join:", newTestArray.join(" ")); */

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


// Hidden Array to choose
    console.log("newArray_gemischt:", neueMischung().join(" "));
// 
    console.log("");
    console.log("");


// Auswahl aus new Array
// max 2x

const choice01 = prompt(gradient.rainbow("Please do your first choice (number):   " ));
/* console.log("choice01:", choice01); */
console.log();
console.log();

const choice02 = prompt(gradient.rainbow("Please do your second choice (number):   " ));

// funktioniert noch nicht ....
/* if(choice02 === choice01){
  console.log("Please choose a different card than the first one ");
  const choice02 = prompt("Please do your second choice (number):   " ) 
} */

// Gewählt

let choice1 = newArray[choice01]
/* console.log(choice1); */
console.log();
let choice2 = newArray[choice02];
/* console.log(choice2); */

console.log();



//  Check
    let choiceArray = [];
    let chosenCardID= [];


    function check(num1, num2){
      if (choiceArray.length === 0){
            choiceArray.push(choice1);
/*             chosenCardID.push(cardID) */

      if (choiceArray.length === 1){
        choiceArray.push(choice2);
    }
      console.log("Your first choice:", choiceArray[0], "  Your second choice:", choiceArray[1]); 

      if ( choiceArray[0] === choiceArray[1]){
      console.log(" ");
      console.log(gradient.rainbow("           Great! You found a match!              "));
      console.log(" "); 

     }
     else{
      console.log(" ");
      console.log(gradient.rainbow("      Sorry you failed. Please try again...         "));
      console.log(" ");
      console.log(" ");

     }

  }
}

   check(choice1,choice2)