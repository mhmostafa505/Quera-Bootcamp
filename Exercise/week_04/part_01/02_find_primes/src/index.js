function findPrimes(num) {
  // your code here...
  let result = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      if (i === 2) result.push(i);
      else {
        let number = 0;
        for (let j = 2; j < i; j++) {
          if (i % j === 0) break;
          number = j;
        }

        if (number === i - 1) {
          result.push(i);
        }
      }
    }
  }

  return result;
}

// console.log(findPrimes(21));

module.exports = findPrimes;
