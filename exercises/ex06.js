/*
From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat.

Animals that eat only plants are called herbivores
Animals that eat only other animals are called carnivores
Animals that eat both plants and animals are called omnivores
Directions:
Write a series of ternary statements that sets the variable category equal to:

"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
"undefined" if an animal doesn't eat plants or animals
Use the eatsPlants and eatsAnimals variables to test your code.

If eatsPlants equals true and eatsAnimals equals false, then herbivore should be printed to the console. 
*/

// const eatsPlants = true; // Change your value to test your conditional statements
// const eatsAnimals = false; // Change your value to test your conditional statements

// const category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");

// console.log(category);

/*
    SOLUTION 2
*/
const eatsPlants = false; // Change your value to test your conditional statements
const eatsAnimals = false; // Change your value to test your conditional statements

let category;

if (eatsPlants && eatsAnimals) {
  category = "omnivore";
} else if (eatsPlants) {
  category = "herbivore";
} else if (eatsAnimals) {
  category = "carnivore";
} else { //only else also works but doest handle exception properly. AKA no default
  category = "undefined";
}

console.log("category:", category);
