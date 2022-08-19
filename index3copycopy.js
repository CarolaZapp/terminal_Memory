import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
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


// Auswahl aus new Array
// max 2x

function choiceA(){
  const choice01 = prompt(gradient.rainbow("Please do your first choice (number):   " ));
  console.log("");

  const choice1 = newArray[choice01];
  return choice1
}

function choiceB(){
  const choice02 = prompt(gradient.rainbow("Please do your second choice (number):   " ));
  console.log("");

  const choice2 = newArray[choice02];
  return choice2
}

// funktioniert noch nicht ....
/* if(choice02 === choice01){
  console.log("Please choose a different card than the first one ");
  const choice02 = prompt("Please do your second choice (number):   " ) 
} */


console.log("");
console.log("");


//  Check
    let choiceArray = [];
/*     let chosenCardID= []; */


    function check(){
      if (choiceArray.length === 0){
            choiceArray.push(choiceA());
/*             chosenCardID.push(cardID) */

      if (choiceArray.length === 1){
        choiceArray.push(choiceB());
    }
      console.log("Your first choice:", choiceArray[0], "  Your second choice:", choiceArray[1]); 

      if ( choiceArray[0] === choiceArray[1]){
      console.log(" ");
      console.log(gradient.rainbow("           Great! You found a match!              "));

// match anzeigen  
// => noch offen

// match aus newArray entfernen
// => noch offen
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

check()

/*    check(choice1,choice2) */

// Weiterspielen

function weiterSpielen(){
  let neuR;
  let neuR2;
  let neuCheck;
  let neuM;
  const weiter = prompt("Would you like to play another round? (y/n) " ).toLowerCase();
console.log("");
console.log("");
  if ( weiter === "y"){
     neuR = choiceA();
     neuR2 = choiceB();
     neuCheck = check();
  }
  if (weiter ==="n"){
    const neuMischen = prompt("Would you like to reshuffel? (y/n) " ).toLowerCase();
    console.log("");
    console.log("");
    if ( neuMischen === "y")
         neuM = neueMischung();
         if (neuMischen ==="n"){
    console.log(gradient.rainbow("What a pity!... 😦")); 
    console.log("");
    console.log("");
  }
/* return weiterSpielen() */
}
}

weiterSpielen()

//  game

/* function game(){
  let weiter
  do{
    choiceA();
    choiceB();
    check(),
    weiter = weiterSpielen()
  }while (weiter)
}
game() */
