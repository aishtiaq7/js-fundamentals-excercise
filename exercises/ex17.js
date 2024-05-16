/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

var laugh = function (num) {
  var laughter = "";
  for (var i = 0; i < num; i++) {
    laughter += "ha";
  }
  return laughter + "!";
};

// Example usage:
console.log(laugh(3)); // "hahaha!"
