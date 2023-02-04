let arg = process.argv.slice(2);

const diceRolled = function (arg) {
  let result = "";
  const dice = 6;
  for (let i = 1; i <= arg - 1; i++) {
    result += Math.floor(Math.random() * dice) + 1 + ", ";
  }
  result += Math.floor(Math.random() * dice) + 1;
  return result;
};
console.log("Rolled " + arg + " dice: " + diceRolled(arg));
