const args = process.argv.slice(2);
let sum = 0;
const argSum = function (argv) {
  for (let i in args) {
    sum += Number(args[i]);
  }
  return sum;
};
console.log(argSum(args));
