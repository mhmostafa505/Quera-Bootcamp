function arrayEquality(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true;
  else return false;

  /*
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        continue;
      } else {
        return "False";
      }
    }

    return "True";
  } else {
    return "False";
  }
  */
}

function objectEquality(obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
  else return false;

  /*
  key1 = [];
  value1 = [];
  key2 = [];
  value2 = [];
  object = [];


  for (key in obj1) {
    key1.push(key);
    value1.push(obj1[key]);
  }

  for (key in obj2) {
    key2.push(key);
    value2.push(obj1[key]);
  }

  if (key1.length === key2.length && value1.length === value2.length) {
    for (let i = 0; i < key1.length; i++) {
      if (key1[i] === key2[i]) {
        continue;
      } else {
        return "False";
      }
    }

    for (let i = 0; i < value1.length; i++) {
      if (typeof value1[i] === "object")
        if (value1[i] === value2[i]) {
          continue;
        } else {
          return "False";
        }
    }

    return "True";
  } else {
    return "False";
  }
  */
}

// console.log(arrayEquality([1, 2, 3], [1, 2, 3]));
// console.log(
//   objectEquality(
//     { a: 1, b: { foo: 1, bar: 2 } },
//     { a: 1, b: { foo: 1, bar: 2 } }
//   )
// );

module.exports = { arrayEquality, objectEquality };
