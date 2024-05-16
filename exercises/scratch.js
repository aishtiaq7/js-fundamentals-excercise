const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the first question
rl.question("Input name: ", (name) => {
  //   console.log(`given -> ${name}!`, `which is of type ${typeof name}`);

  //   rl.question("Input 2nd param: ", (param) => {
  //     console.log(`given -> ${param}!`, `which is also of type ${typeof param}`);
  //     rl.close();
  //   });

  const number = parseFloat(name); // Change your number to test your if statement
  console.log("number:", typeof number);
  console.log("number:", number);

    if (number % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
});
