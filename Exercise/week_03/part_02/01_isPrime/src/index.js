function isPrime(num) {
  // TODO...
  if (num >= 1) {
    if (num === 1) return false;
    if (num === 2) return true;
    else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }

      return true;
    }
  }
}

// console.log(isPrime(5));

module.exports = isPrime;

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
