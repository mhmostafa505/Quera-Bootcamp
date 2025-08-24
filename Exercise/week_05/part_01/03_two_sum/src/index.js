function twoSum(list, target) {
  // Your code here...
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < i; j++) {
      if (list[i] + list[j] === target) return [j, i];
    }
  }
  return -1;
}

// console.log(twoSum([12, 22, 30], 50));

module.exports = twoSum;
