// Prompt the user for Froyo
const userInputFroyo = prompt(
  "Please enter some froyo flavors separated by commas:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Parse into an array of strings/flavors.
const froyoArray = userInputFroyo.split(",");
console.log(froyoArray);
let flavors = {};
// let keys = Object.keys(object);
for (const item of froyoArray) {
  if (flavors[item]) {
    // if they have that item +1
    flavors[item] += 1;
  } // if they dont have item
  else {
    flavors[item] = 1;
  }
}
console.table(flavors);
alert(JSON.stringify(flavors));
