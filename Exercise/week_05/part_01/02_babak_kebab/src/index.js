function palindrome(input) {
  // YOUR CODE HERE
  if (typeof input === "number") {
    input = String(input);
    let numArr = input.split("");
    for (let i = 0; i < Math.floor(numArr.length / 2); i++) {
      if (numArr[i] !== numArr[numArr.length - (i + 1)]) return false;
      else continue;
    }
    return true;
  } else if (typeof input === "string") {
    let strArr = input
      .toLowerCase()
      .replace(/\p{P}/gu, " ")
      .split(" ")
      .join("")
      .split("");
    for (let i = 0; i < Math.floor(strArr.length / 2); i++) {
      if (strArr[i] !== strArr[strArr.length - (i + 1)]) return false;
      else continue;
    }
    return true;
  }
}

// console.log(palindrome("Madam, I'm Adam"));

module.exports = palindrome;
