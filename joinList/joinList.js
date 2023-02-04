const joinList = function (conceptList) {
  let commaSeparatedString = "";
  if (conceptList.length === 0) {
    return (commaSeparatedString = "");
  } else {
    for (let i = 0; i <= conceptList.length - 2; i++) {
      commaSeparatedString += conceptList[i] + ", ";

      //return commaSeparatedString;
    }

    commaSeparatedString += conceptList[conceptList.length - 1];
    return commaSeparatedString;
  }
};

// Test / Driver Code below...
const conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving"
];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
const conceptList1 = [];
const concepts1 = joinList(conceptList1);
console.log(`Today I learned about ${concepts1}.`);
