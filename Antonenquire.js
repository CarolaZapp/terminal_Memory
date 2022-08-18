import enquirer from 'enquirer';
const { Select } = enquirer;

/* const prompt = new Select({
  name: 'color',
  message: 'Pick a flavor',
  choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
});


const answer = await prompt.run();
console.log(answer); */


// 
const { prompt } = enquirer;

const response = await prompt({
  type: 'input',
  name: 'username',
  message: 'What is your username?'
});

console.log(response); // { username: 'jonschlinkert' }


// 
const response2 = await prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your username?'
  }
]);

console.log(response2); // { name: 'Edward Chan', username: 'edwardmchan' }

// 
/* const { Confirm } = enquirer;

const prompt2 = new Confirm({
  name: 'question',
  message: 'Did you like enquirer?' // (y/N) true
});

prompt2.run()
  .then(answer => console.log('Answer:', answer)); // N: Answer: false */


// const { prompt } = require('enquirer');

/* prompt({
  type: 'confirm',
  name: 'question',
  message: 'Did you like enquirer?' // // (y/N) true
})
  .then(answer => console.log('Answer:', answer)); // Answer: { question: true } */

// 
// Enquirer
/* Create an instance of Enquirer.

Params

options {Object}: (optional) Options to use with all prompts.
answers {Object}: (optional) Answers object to initialize with. */

/* const Enquirer = 'enquirer';
const enquirer = new Enquirer(); */