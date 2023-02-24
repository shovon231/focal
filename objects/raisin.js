// raisins.js authored collaboratively by Mohammad Islam (@shovon231)
// and Denny Ng (@Desyn6)

// core activity
const raisinAlarm = function (cookie) {
  // Put your solution here

  for (let filling of cookie) {
    if (filling === "🍇") {
      return "Raisin alert!";
    }
  }

  return "All good!";
};

// stretch activity
const raisinAlarmArray = function (cookies) {
  // Put your solution here

  let result = []; // Initialize output array

  // iterate through cookie array of cookies array of arrays
  for (let cookie of cookies) {
    /* evaluate cookie by calling raisinAlarm */
    result.push(raisinAlarm(cookie));

    /* evaluate cookie without a function call */
    /* we did this out of interest */
    // let alertOut = "All good!";

    // for (let topping of cookie) {
    //   if (topping === "🍇") {
    //     alertOut = "Raisin alert!"
    //     break;
    //   };
    // };


  }

  return result;
};

// Core raisin alarm exercise checks
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); // All good!

// Stretch  raisin alarm exercise checks
// Expected output is
// ["Raisin alert!", "Raisin alert!", "All good!"]
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
