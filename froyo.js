// Prompt the user for Froyo
const userInputFroyo = prompt(
  "Please enter some froyo flavors separated by commas:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Parse into an array of strings/flavors.
const froyoArray = userInputFroyo.split(",");
console.log(froyoArray);
let object = {};
// let keys = Object.keys(object);
for (const item of froyoArray) {
  if (object[item]) {
    // if they have that item +1
    object[item] += 1;
  } // if they dont have item
  else {
    object[item] = 1;
  }
}
console.table(object);
