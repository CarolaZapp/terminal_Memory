import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
import gradient from 'gradient-string';

// Array of Objects
  const testArray2 = [
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
    

/* console.log("TestArray2:", testArray2); */
console.log("");

let newTestArray2 = []

for( let i = 0; i< testArray2.length; i++){
  let allPics = testArray2[i].pic;
  newTestArray2.push(allPics)
}
console.log("");
console.log("newTestArray2-Join:", newTestArray2.join(" "));

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
    testArray2.testMischen();
    for(let i = 0; i < testArray2.length; i++){
     newArray.push(testArray2[i]);
/* console.log(newArray);
console.log(newArray.length); */
/* console.log("newArray:", newArray);
console.log("newArray-i:", newArray[i]); */

    }
  return newArray
  }

    console.log("");
    console.log("");
/*     console.log("newArray-join:", neueMischung().join(" ")); */
    console.log("newArray:", neueMischung());
    console.log("");
    console.log("");


// Auswahl aus new Array
// max 2x
let choice1 = newArray[2]
let choice2 = newArray[4];

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
/*     console.log("2" , choiceArray); */
    console.log(choiceArray[0]);
    console.log(choiceArray[1]);

/*       if ( choiceArray[0] === choiceArray[1]){
        choiceArray.splice(0,2)
      console.log("match!!!!");
      console.log(choiceArray);
 */
      if ( choiceArray[0] === choiceArray[1]){
        choiceArray
      console.log("match!!!!");
      console.log(choiceArray);
      console.log("ID" , chosenCardID);

     }
     else{
      console.log("try again...");
     }

  }

   check(newArray[3],newArray[5])