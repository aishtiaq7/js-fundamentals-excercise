/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions(myString, myFunc) {
  console.log('typeof myFunc:', typeof myFunc);
  console.log("I am " + myString + ", " + myFunc);
}

// Example usage:
emotions(
  "happy",
  (function (num) {
    var laughter = "";
    for (var i = 0; i < num; i++) {
      laughter += "ha";
    }
    return laughter + "!";
  })(2)
); // "I am happy, haha!"
