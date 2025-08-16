function calculator(num1, operator, num2) {
  switch (operator) {
    case "addition":
      return num1 + num2;
    case "subtraction":
      return num1 - num2;
    case "division":
      return num1 / num2;
    case "multiply":
      return num1 * num2;
    case "equality":
      if (num1 === num2) return "Equal";
      else return "Not equal";
    default:
      return "Operator is not valid!";
  }
}

// console.log(calculator(205, "lorem", 26));

module.exports = calculator;
