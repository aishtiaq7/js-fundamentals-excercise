/*
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

Write a loop under each comment in the file.
Under the first, write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
*/

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// While loop to print out each item of ingredients
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// For loop to print out each item of ingredients
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

// Loop to print out each item of ingredients backwards
for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}
