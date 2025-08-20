// you can use this data to test your code
const data = require("./data.json");

function makeHidden(list) {
  // YOUR CODE HERE
  let info;
  let mobileArr;
  let cardArr;
  for (let i = 0; i < list.length; i++) {
    info = list[i].details;
    // mobile
    mobileArr = info.mobile.split("");
    for (let i = 6; i <= 8; i++) {
      mobileArr[i] = "*";
    }
    info.mobile = mobileArr.join("");
    // card
    cardArr = info.card_no.split("-");
    for (let i = 0; i <= 2; i++) {
      cardArr[i] = "****";
    }
    info.card_no = cardArr.join("-");
    // is_secure
    list[i].is_secure = true;
  }

  return list;
}

// console.log(
//   makeHidden([
//     {
//       id: 1,
//       firstName: "jeff",
//       lastName: "bezos",
//       details: {
//         mobile: "09351651897",
//         card_no: "1111-2222-3434-0757",
//       },
//       is_secure: false,
//     },
//     {
//       id: 2,
//       firstName: "elon",
//       lastName: "musk",
//       details: {
//         mobile: "09926761066",
//         card_no: "5555-6666-9999-2323",
//       },
//       is_secure: false,
//     },
//     {
//       id: 3,
//       firstName: "mark",
//       lastName: "zuckerberg",
//       details: {
//         mobile: "09122223344",
//         card_no: "9988-6633-8855-6548",
//       },
//       is_secure: false,
//     },
//   ])
// );

module.exports = makeHidden;
