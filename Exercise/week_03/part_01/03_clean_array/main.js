const dirtyArray = [
  "Quera",
  2024,
  undefined,
  { course: "alpha", duration: "7" },
  NaN,
  "1403/02/15",
  null,
  912000111222,
  NaN,
  "Array",
  true,
  null,
  "undefined",
];

function makeArrayClean(dirtyArray) {
  // YOUR CODE HERE
  // loop over array to find expected data and push it in a new array
  // return a new array
  let cleanArray = [];
  for (const arrIndex of dirtyArray) {
    if (
      typeof arrIndex === "string" ||
      typeof arrIndex === "number" ||
      typeof arrIndex === "object"
    ) {
      if (arrIndex !== null && arrIndex === arrIndex && arrIndex !== undefined)
        cleanArray.push(arrIndex);
    }
  }

  return cleanArray;
}

// console.log(makeArrayClean(dirtyArray));

module.exports = makeArrayClean;
