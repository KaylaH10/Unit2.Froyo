// Prompt the user for Froyo
const userInputFroyo = prompt(
    "Please enter some froyo flavors separated by commas:",
    "strawberry,chocolate,vanilla"
  );

  // Parse into an array of strings/flavors.
const froyoArray = userInputFroyo.split(",");

console.log(froyoArray);