function sumNumbers(numbers, type) {
  let even = 0;
  let odd = 0;
  if (numbers.length === 0) return 0;
  for (const arrIndex of numbers) {
    if (isNaN(arrIndex)) return 0;
    else {
      if (arrIndex % 2 === 0) even += arrIndex;
      else if (arrIndex % 2 === 1) odd += arrIndex;
    }
  }

  if (type === "even") return even;
  else if (type === "odd") return odd;
}

// console.log(sumNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "odd"));

module.exports = sumNumbers;
