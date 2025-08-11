function fizz_buzz(numbers) {
  //your code here...
  let space = ", ";
  let result = "";
  for (const number of numbers) {
    if (number % 5 === 0 && number % 3 === 0) result += "fizzbuzz";
    else if (number % 3 === 0) result += "fizz";
    else if (number % 5 === 0) result += "buzz";
    else result += `${number}`;
    if (numbers.indexOf(number) !== numbers.length - 1) result += space;
  }
  return result;
}

// console.log(fizz_buzz([11, 7]));

module.exports = fizz_buzz;
