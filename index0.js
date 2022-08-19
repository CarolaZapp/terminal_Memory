import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
import gradient from 'gradient-string';

// Use the rainbow gradient
/* console.log(gradient.rainbow('I ❤️ MEMORY!'))

const question = prompt("Do you want to play memory with me? (y/n) " ).toLowerCase();

  if ( question === "y"){
    console.log(gradient.rainbow("Great! 😃")); 
    // return true;
  }
  if (question ==="n"){
    console.log(gradient.rainbow("What a pity!... 😦")); 
    // return false;
  } */

  // Test Array

  const testArray = [" 🌍"," 🌍", " B ", " B ", " 🙊", " 🙊", " D ", " D ", " 🕓", " 🕓"]
   /*  console.log(testArray); */
   /*  console.log(testArray.join(" ")); */

   const coverArray= ["███","███","███","███","███","███","███","███","███","███","███","███","███"];

 /*   console.log(gradient.rainbow(coverArray)); */
   console.log("");
   console.log("");
   console.log(gradient.rainbow(coverArray.join(" ")));
/*  console.clear() */


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
     newArray.push(testArray[i]);
/* console.log(newArray);
console.log(newArray.length); */
/* console.log(newArray[i]); */
    }
  return newArray
  }
    console.log("");
    console.log("");
    console.log("   ", neueMischung().join(" "));
    console.log("");
    console.log("");
/* console.clear() */

    const coverArray2= ["███","███","███","███","███","███","███","███","███","███","███","███","███","███","███","███","███"];

    console.log("");
    console.log("");
/* console.log(gradient.rainbow(coverArray));  */

      console.log(gradient.rainbow(coverArray2.join("")));
      console.log("");
      console.log("");

// Auswahl aus new Array
// max 2x
/* let choice1 = newArray[5]
let choice2 = newArray[3]; */

/* const question = prompt("Please do your first choice (letter plus number):   " ) */



//  Check
    let choiceArray = [];
    let chosenCardID= [];
    let choiceAmount = 0;


    function check(choice1, choice2){
      if (choiceArray.length === 0){
            choiceArray.push(choice1);
/*             chosenCardID.push(cardID) */
        }
/*         console.log("1" , choiceArray); */


      if (choiceArray.length === 1){
        choiceArray.push(choice2);
    }
/* console.log("2" , choiceArray); */
/* console.log(choiceArray.join(" "))  */
console.log(" Your first choice:", choiceArray[0], "  Your second choice:", choiceArray[1]); 
/* console.log("Your second choice:", choiceArray[1]); */
/*      if ( choiceArray[0] === choiceArray[1]){
        choiceArray.splice(0,2)
      console.log("match!!!!");
      console.log(choiceArray); */

      if ( choiceArray[0] === choiceArray[1]){
        console.log(" ");
      console.log(gradient.rainbow("           Great! You found a match!              "));
      console.log(" "); 
/*       console.log(choiceArray);
      console.log("ID" , chosenCardID); */

     }
     else{
      console.log(" ");
      console.log(gradient.rainbow("      Sorry you failed. Please try again...         "));
      console.log(" ");
      console.log(" ");

     }

  }

   check(newArray[3],newArray[5])