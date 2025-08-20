function filterByTerm(inputArr, searchTerm) {
  //your code here...
  // let res = [];
  if (searchTerm === undefined)
    return "searchTerm cannot be empty at filterByTerm";

  if (inputArr === undefined) return "inputArr cannot be empty";
  /* else {
    let key;
    for (const index of inputArr) {
      key = index.url;
      if (key.includes(`${searchTerm.toLowerCase()}`)) res.push(index);
    }
    return res;
  } 
  */ else {
    const resArr = inputArr.filter((obj) =>
      obj.url.includes(`${searchTerm.toLowerCase()}`)
    );
    return resArr;
  }
}

// console.log(
//   filterByTerm(
//     [
//       { id: 1, url: "https://www.url1.dev" },
//       { id: 2, url: "https://www.link2.dev" },
//       { id: 3, url: "https://www.link3.dev" },
//     ],
//     "LINK"
//   )
// );

module.exports = filterByTerm;
