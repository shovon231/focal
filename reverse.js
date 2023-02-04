// program that accepts any number of CLI arguments

// takes the arguments, and logs the reversed order

// example input/output
// node reverse.js hello goodbye
// olleh
// eybdoog

const arg = process.argv.slice(2);

const reverse = function (arguments) {
  for (const argument of arguments) {
    let reverse = "";
    for (let i = argument.length - 1; i >= 0; i--) {
      reverse += argument[i];
    }

    console.log(reverse);
  }
};

reverse(arg);

/* 
let cliStrings = process.argv.slice(2);

// for each loop to call reverseText() on each string in cliArray
for (let string of cliStrings) {
  console.log(reverseText(string));
}

// define function for reversing strings
function reverseText(inputString) {
  let reversed = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }
  return reversed;
}

*/


