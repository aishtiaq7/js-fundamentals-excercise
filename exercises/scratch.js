
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input name: ', (name) => {// Ask the first question
  console.log(`given -> ${name}!`, `which is of type ${typeof name}`);



  rl.question('Input 2nd param: ', (param) => { //2nd question..
    console.log(`given -> ${param}!`, `which is also of type ${typeof param}`);
    rl.close(); //close readline interface
  });
});