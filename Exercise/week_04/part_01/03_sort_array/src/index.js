function doubleSort(...args) {
  // Todo ...
  numbers = {
    ascending: args.toSorted((a, b) => {
      if (a > b) return 1;
      else if (a < b) return -1;
      else if (a === b) return 0;
    }),
    descending: args
      .toSorted((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else if (a === b) return 0;
      })
      .reverse(),
  };

  return numbers;
}

// console.log(doubleSort(1, 234, 3, 4, 8, 6, 10, 9, -1, 20, 121, 123, 122, 122));

module.exports = doubleSort;
